"""Generate a deterministic trace for the BS-side EHC--ADP prototype.

The code intentionally mirrors the paper's current definitions. It does not
model D2D/BS relay selection. The BS observes three dependency dimensions,
discovers a Candidate ADP from recurring pre-action conflicts, instantiates one
reasoning item per current conflicting pair, and schedules limited radio
resources to support incremental item resolution.
"""

from __future__ import annotations

import json
from dataclasses import asdict, dataclass
from pathlib import Path


ROOT = Path(__file__).resolve().parent


@dataclass(frozen=True)
class Agent:
    id: str
    kind: str
    x: int
    y: int
    intent: str


@dataclass(frozen=True)
class Relation:
    source: str
    target: str
    spatial: float
    temporal: float
    communication: float

    @property
    def mean_strength(self) -> float:
        return (self.spatial + self.temporal + self.communication) / 3.0


AGENTS = [
    Agent("A1", "Shuttle", 145, 270, "serve west platform"),
    Agent("A2", "Robot", 350, 445, "cross service lane"),
    Agent("A3", "Shuttle", 565, 270, "serve east platform"),
    Agent("A4", "Robot", 350, 95, "cross service lane"),
    Agent("A5", "UAV", 105, 105, "observe mobility zone"),
    Agent("A6", "Backup robot", 615, 425, "stand by for service replacement"),
]


RELATIONS = [
    Relation("A1", "A2", 0.86, 0.92, 0.88),
    Relation("A2", "A3", 0.79, 0.85, 0.91),
    Relation("A3", "A4", 0.83, 0.90, 0.86),
    Relation("A4", "A1", 0.76, 0.81, 0.84),
    Relation("A1", "A3", 0.48, 0.72, 0.78),
    Relation("A2", "A4", 0.45, 0.68, 0.80),
    Relation("A1", "A5", 0.22, 0.31, 0.74),
    Relation("A3", "A6", 0.72, 0.78, 0.89),
]


# Repetition across recent fast slots. The current slot contains the two pairs
# listed last; both have repeatedly required coordination in the slow epoch.
CONFLICT_HISTORY = [
    [("A1", "A2")],
    [("A3", "A4")],
    [("A1", "A2"), ("A3", "A4")],
    [("A1", "A2"), ("A3", "A4")],
]


def conflict_counts() -> dict[tuple[str, str], int]:
    counts: dict[tuple[str, str], int] = {}
    for slot in CONFLICT_HISTORY:
        for pair in slot:
            key = tuple(sorted(pair))
            counts[key] = counts.get(key, 0) + 1
    return counts


def discover_candidate() -> list[str]:
    """Discover a compact candidate from recurring conflict endpoints.

    This is a deliberately small executable counterpart of Algorithm 1: use
    recurring conflicts as seeds and retain their EHC-connected endpoints.
    """

    recurring_pairs = {
        pair for pair, count in conflict_counts().items() if count >= 2
    }
    candidate = {agent for pair in recurring_pairs for agent in pair}

    # Keep only endpoints supported by at least one sufficiently strong EHC edge.
    supported = set()
    for relation in RELATIONS:
        pair = tuple(sorted((relation.source, relation.target)))
        if pair in recurring_pairs and relation.mean_strength >= 0.70:
            supported.update(pair)
    return sorted(candidate & supported)


def generate_items(candidate: list[str]) -> list[dict]:
    current_conflicts = CONFLICT_HISTORY[-1]
    items = []
    for index, (source, target) in enumerate(current_conflicts, start=1):
        if source not in candidate or target not in candidate:
            continue
        relation = next(
            rel
            for rel in RELATIONS
            if {rel.source, rel.target} == {source, target}
        )
        items.append(
            {
                "id": f"RI-{index}",
                "agents": [source, target],
                "condition": {
                    "spatial": relation.spatial,
                    "temporal": relation.temporal,
                    "communication": relation.communication,
                },
                "constraint": "Eliminate the corresponding pre-action conflict",
                "state": "unresolved",
            }
        )
    return items


def make_frame(
    step: int,
    stage: str,
    title: str,
    description: str,
    candidate: list[str],
    items: list[dict],
    visible_relations: str,
    conflicts: list[list[str]],
    coherence: float,
    conflict_count: int,
    resources: list[dict],
    timescale: str,
    slow_epoch: str,
    fast_slot: str,
    reasoning_round: str,
    active: bool = False,
    operations: list[dict] | None = None,
) -> dict:
    # A6 is discovered only when slow-timescale evolution searches beyond the
    # degraded ADP. Before that point it is not part of the BS-visible EHC view.
    visible_agents = AGENTS if step >= 12 else [agent for agent in AGENTS if agent.id != "A6"]
    return {
        "step": step,
        "stage": stage,
        "title": title,
        "description": description,
        "agents": [asdict(agent) for agent in visible_agents],
        "relations": [asdict(relation) for relation in RELATIONS],
        "visibleRelations": visible_relations,
        "conflicts": conflicts,
        "candidate": candidate,
        "active": active,
        "items": items,
        "coherence": coherence,
        "conflictCount": conflict_count,
        "resources": resources,
        "timescale": timescale,
        "slowEpoch": slow_epoch,
        "fastSlot": fast_slot,
        "reasoningRound": reasoning_round,
        "operations": operations or [],
        "newMembers": ["A6"] if 12 <= step <= 15 else [],
    }


def build_trace() -> list[dict]:
    candidate = discover_candidate()
    base_items = generate_items(candidate)
    resolved_one = [dict(item) for item in base_items]
    resolved_one[0] = {**resolved_one[0], "state": "resolved"}
    resolved_all = [{**item, "state": "resolved"} for item in base_items]
    degraded_items = [{**item} for item in resolved_all]
    degraded_items[1] = {
        **degraded_items[1],
        "state": "unresolved",
        "condition": {
            **degraded_items[1]["condition"],
            "communication": 0.28,
        },
    }
    expanded_candidate = ["A1", "A2", "A3", "A4", "A6"]
    admission_item = {
        "id": "RI-3",
        "agents": ["A3", "A4", "A6"],
        "condition": {
            "spatial": 0.72,
            "temporal": 0.78,
            "communication": 0.89,
        },
        "constraint": "Use the admitted member to eliminate the residual A3-A4 action conflict",
        "state": "unresolved",
    }
    admission_items = [resolved_all[0], admission_item]
    admission_resolved = [
        {**item, "state": "resolved"} for item in admission_items
    ]
    operation_candidates = [
        {
            "name": "Retain and retry",
            "members": "A1, A2, A3, A4",
            "task": "maintained",
            "coherence": 0.50,
            "conflicts": 1,
            "status": "rejected",
            "reason": "Repeated RI-2 failure remains",
        },
        {
            "name": "Admit A5",
            "members": "A1, A2, A3, A4, A5",
            "task": "maintained",
            "coherence": 0.50,
            "conflicts": 1,
            "status": "rejected",
            "reason": "A5 is not dependency-relevant to unresolved RI-2",
        },
        {
            "name": "Admit A6",
            "members": "A1, A2, A3, A4, A6",
            "task": "maintained",
            "coherence": 1.00,
            "conflicts": 0,
            "status": "selected",
            "reason": "A6 is communication-feasible and dependency-relevant to RI-2",
        },
    ]

    return [
        make_frame(
            0,
            "Wireless network",
            "Network-visible agents",
            "The BS observes a relatively stable core of low-mobility agents operating repeatedly inside the same controlled mobility zone.",
            [], [], "communication", [], 0.0, 0, [], "slow", "k = 1 · 0–20 s", "sampling", "—",
        ),
        make_frame(
            1,
            "Dependency identification",
            "Three dependencies become visible",
            "Across many fast slots, spatial, temporal, and communication measurements reveal which agents repeatedly affect one another.",
            [], [], "dependencies", [], 0.0, 0, [], "slow", "k = 1 · 0–20 s", "t = 1 … 200", "—",
        ),
        make_frame(
            2,
            "EHC construction",
            "The BS maintains the EHC relation space",
            "At the next organizational epoch, accumulated dependency measurements form relationship-aware EHC edges rather than a new coverage area.",
            [], [], "ehc", [], 0.0, 0, [], "slow", "k = 2 · 20–40 s", "aggregated slots", "—",
        ),
        make_frame(
            3,
            "Coordination demand",
            "Recurring pre-action conflicts emerge",
            "Repeated observations over the epoch show that two EHC-connected pairs regularly propose actions that cannot be jointly executed.",
            [], [], "ehc", [["A1", "A2"], ["A3", "A4"]], 0.0, 2, [], "slow", "k = 2 · 20–40 s", "t = 201 … 400", "—",
        ),
        make_frame(
            4,
            "Candidate ADP",
            "A candidate population is discovered",
            "After slow-timescale accumulation, recurring conflicts seed Algorithm 1 and their dependency-supported endpoints form a Candidate ADP.",
            candidate, [], "ehc", [["A1", "A2"], ["A3", "A4"]], 0.0, 2, [], "slow", "k = 3 · 40–60 s", "epoch boundary", "—",
        ),
        make_frame(
            5,
            "Reasoning items",
            "Conflicts instantiate population reasoning items",
            "Within one fast decision slot, each current conflict pair contributes one unresolved item grounded in its three dependency dimensions.",
            candidate, base_items, "ehc", [["A1", "A2"], ["A3", "A4"]], 0.0, 2, [], "fast", "k = 3 · 40–60 s", "t = 401 · <100 ms", "r = 0",
        ),
        make_frame(
            6,
            "Resource scheduling",
            "The BS schedules item-relevant exchanges",
            "Limited radio resources are assigned to RI-1 first; unscheduled items remain unresolved.",
            candidate, base_items, "ehc", [["A1", "A2"], ["A3", "A4"]], 0.0, 2,
            [
                {"slot": "RB-1", "item": "RI-1", "agent": "A1", "state": "scheduled"},
                {"slot": "RB-2", "item": "RI-1", "agent": "A2", "state": "scheduled"},
                {"slot": "RB-3", "item": "RI-2", "agent": "A3", "state": "waiting"},
                {"slot": "RB-4", "item": "RI-2", "agent": "A4", "state": "waiting"},
            ], "fast", "k = 3 · 40–60 s", "t = 401 · <100 ms", "r = 0",
        ),
        make_frame(
            7,
            "Incremental alignment",
            "One item is resolved",
            "The scheduled responses resolve RI-1. Population coherence rises while one action conflict remains.",
            candidate, resolved_one, "ehc", [["A3", "A4"]], 0.5, 1,
            [
                {"slot": "RB-1", "item": "RI-1", "agent": "A1", "state": "completed"},
                {"slot": "RB-2", "item": "RI-1", "agent": "A2", "state": "completed"},
                {"slot": "RB-3", "item": "RI-2", "agent": "A3", "state": "scheduled"},
                {"slot": "RB-4", "item": "RI-2", "agent": "A4", "state": "scheduled"},
            ], "fast", "k = 3 · 40–60 s", "t = 401 · <100 ms", "r = 1",
        ),
        make_frame(
            8,
            "Active ADP",
            "The Candidate ADP becomes operational",
            "Both items are resolved: population coherence reaches one and no action conflict remains.",
            candidate, resolved_all, "ehc", [], 1.0, 0,
            [
                {"slot": "RB-1", "item": "RI-1", "agent": "A1", "state": "completed"},
                {"slot": "RB-2", "item": "RI-1", "agent": "A2", "state": "completed"},
                {"slot": "RB-3", "item": "RI-2", "agent": "A3", "state": "completed"},
                {"slot": "RB-4", "item": "RI-2", "agent": "A4", "state": "completed"},
            ], "fast", "k = 3 · 40–60 s", "t = 401 · <100 ms", "r = 2",
            active=True,
        ),
        make_frame(
            9,
            "Active operation",
            "Resolved items are reused",
            "In the next fast slot, the Active ADP reuses its valid population reasoning state and avoids repeating the initial alignment overhead.",
            candidate, resolved_all, "ehc", [], 1.0, 0,
            [
                {"slot": "RB-1", "item": "reused", "agent": "A1+A2", "state": "completed"},
                {"slot": "RB-2", "item": "reused", "agent": "A3+A4", "state": "completed"},
            ], "fast", "k = 3 · 40–60 s", "t = 402 · <100 ms", "reuse",
            active=True,
        ),
        make_frame(
            10,
            "Repeated degradation",
            "One member repeatedly prevents full alignment",
            "Across subsequent slots, A4 repeatedly appears in unresolved RI-2 outcomes; coherence falls and one action conflict remains after the fast alignment budget expires.",
            candidate, degraded_items, "ehc", [["A3", "A4"]], 0.5, 1,
            [
                {"slot": "RB-1", "item": "RI-1", "agent": "A1+A2", "state": "completed"},
                {"slot": "RB-2", "item": "RI-2", "agent": "A3", "state": "completed"},
                {"slot": "RB-3", "item": "RI-2", "agent": "A4", "state": "waiting"},
            ], "fast", "k = 3 · 40–60 s", "t = 403 … 600", "terminal",
            active=True,
        ),
        make_frame(
            11,
            "Population monitoring",
            "Fast failures accumulate into structural evidence",
            "At the slow epoch boundary, the BS attributes the repeated unresolved-item pattern to the current membership rather than to a single transient slot.",
            candidate, degraded_items, "ehc", [["A3", "A4"]], 0.5, 1, [],
            "slow", "k = 4 · 60–80 s", "aggregate t = 403 … 600", "—",
            active=True,
        ),
        make_frame(
            12,
            "Member admission screening",
            "The BS searches for a conflict-relevant new member",
            "The EHC exposes newly visible agents, and the BS screens their communication feasibility and relevance to the unresolved RI-2 before expanding the ADP.",
            candidate, degraded_items, "ehc", [["A3", "A4"]], 0.5, 1, [],
            "slow", "k = 4 · 60–80 s", "operation screening", "—",
            active=True,
            operations=operation_candidates,
        ),
        make_frame(
            13,
            "Population expansion",
            "A6 joins an expanded Candidate ADP",
            "The communication-feasible and dependency-relevant A6 is admitted without removing any current member. The expanded population remains a Candidate ADP until fast-timescale validation succeeds.",
            expanded_candidate, [admission_item], "ehc", [["A3", "A4"]], 0.0, 1, [],
            "slow", "k = 5 · 80–100 s", "epoch boundary", "—",
            operations=operation_candidates,
        ),
        make_frame(
            14,
            "Expanded-ADP alignment",
            "The five-member population re-enters Algorithm 2",
            "The BS schedules A3, A4, and the admitted A6 for RI-3 and checks whether the expanded population can restore coherence without residual conflict.",
            expanded_candidate, admission_items, "ehc", [["A3", "A4"]], 0.5, 1,
            [
                {"slot": "RB-1", "item": "RI-3", "agent": "A3", "state": "scheduled"},
                {"slot": "RB-2", "item": "RI-3", "agent": "A4", "state": "scheduled"},
                {"slot": "RB-3", "item": "RI-3", "agent": "A6", "state": "scheduled"},
            ], "fast", "k = 5 · 80–100 s", "t = 801 · <100 ms", "r = 0",
            operations=operation_candidates,
        ),
        make_frame(
            15,
            "Expanded Active ADP",
            "New-member admission restores coherent operation",
            "The expanded membership passes alignment validation: population coherence returns to one and the residual A3-A4 action conflict is eliminated without removing either member.",
            expanded_candidate, admission_resolved, "ehc", [], 1.0, 0,
            [
                {"slot": "RB-1", "item": "RI-3", "agent": "A3", "state": "completed"},
                {"slot": "RB-2", "item": "RI-3", "agent": "A4", "state": "completed"},
                {"slot": "RB-3", "item": "RI-3", "agent": "A6", "state": "completed"},
            ], "fast", "k = 5 · 80–100 s", "t = 801 · <100 ms", "r = 1",
            active=True,
            operations=operation_candidates,
        ),
    ]


def main() -> None:
    trace = build_trace()
    output_dir = ROOT / "data"
    output_dir.mkdir(exist_ok=True)
    output = "window.ADP_TRACE = " + json.dumps(trace, indent=2) + ";\n"
    (output_dir / "trace.js").write_text(output, encoding="utf-8")
    print(f"Generated {len(trace)} frames at {output_dir / 'trace.js'}")


if __name__ == "__main__":
    main()

