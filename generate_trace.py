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

# A later epoch contains recurring coordination demand between an existing
# member A3 and the external agent A6. Algorithm 1 therefore discovers a new
# Candidate ADP that overlaps the active population while crossing its boundary.
EXPANSION_CONFLICT_HISTORY = [
    [("A3", "A6")],
    [("A3", "A6")],
    [("A3", "A6")],
]


def conflict_counts(history: list[list[tuple[str, str]]]) -> dict[tuple[str, str], int]:
    counts: dict[tuple[str, str], int] = {}
    for slot in history:
        for pair in slot:
            key = tuple(sorted(pair))
            counts[key] = counts.get(key, 0) + 1
    return counts


def discover_candidate(history: list[list[tuple[str, str]]]) -> list[str]:
    """Discover a compact candidate from recurring conflict endpoints.

    This is a deliberately small executable counterpart of Algorithm 1: use
    recurring conflicts as seeds and retain their EHC-connected endpoints.
    """

    recurring_pairs = {pair for pair, count in conflict_counts(history).items() if count >= 2}
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
    discovered_candidate: list[str] | None = None,
) -> dict:
    # A6 enters the BS-visible EHC only when the next slow-timescale update
    # discovers a new organizational opportunity around the active ADP.
    visible_agents = AGENTS if step >= 10 else [agent for agent in AGENTS if agent.id != "A6"]
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
        "discoveredCandidate": discovered_candidate or [],
        "newMembers": ["A6"] if 10 <= step <= 15 else [],
    }


def build_trace() -> list[dict]:
    candidate = discover_candidate(CONFLICT_HISTORY)
    new_candidate = discover_candidate(EXPANSION_CONFLICT_HISTORY)
    base_items = generate_items(candidate)
    resolved_one = [dict(item) for item in base_items]
    resolved_one[0] = {**resolved_one[0], "state": "resolved"}
    resolved_all = [{**item, "state": "resolved"} for item in base_items]
    expanded_candidate = ["A1", "A2", "A3", "A4", "A6"]
    admission_item = {
        "id": "RI-3",
        "agents": ["A3", "A6"],
        "condition": {
            "spatial": 0.72,
            "temporal": 0.78,
            "communication": 0.89,
        },
        "constraint": "Align the new member with the ADP's task-relevant decision basis before activation",
        "state": "unresolved",
    }
    admission_items = [*resolved_all, admission_item]
    admission_resolved = [
        {**item, "state": "resolved"} for item in admission_items
    ]
    admission_sets = [
        {
            "name": "Active ADP P1[k]",
            "members": "A1, A2, A3, A4",
            "status": "context",
            "reason": "The original population remains active during admission validation",
        },
        {
            "name": "New Candidate U2[k]",
            "members": "A3, A6",
            "status": "candidate",
            "reason": "Algorithm 1 finds overlap {A3} and external member {A6}",
        },
        {
            "name": "Admission candidate Ũ1[k]",
            "members": "A1, A2, A3, A4, A6",
            "status": "selected",
            "reason": "Ũ1[k] = P1[k] ∪ U2[k]; activation still requires Algorithm 2",
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
            "Cross-boundary demand",
            "New coordination demand crosses the active ADP boundary",
            "The active P1 remains internally coherent, while recurring A3-A6 pre-action conflicts accumulate across the boundary together with their persistent EHC relation.",
            candidate, resolved_all, "ehc", [["A3", "A6"]], 1.0, 0, [],
            "slow", "k = 4 · 60–80 s", "accumulated slots", "—",
            active=True,
        ),
        make_frame(
            11,
            "Candidate ADP discovery",
            "Algorithm 1 discovers an overlapping Candidate ADP",
            "From the recurring A3-A6 coordination demand, Algorithm 1 discovers U2={A3,A6}, which overlaps active P1 at A3 and introduces external member A6.",
            candidate, resolved_all, "ehc", [["A3", "A6"]], 1.0, 0, [],
            "slow", "k = 4 · 60–80 s", "Algorithm 1", "—",
            active=True,
            discovered_candidate=new_candidate,
        ),
        make_frame(
            12,
            "Admission operation",
            "Candidate overlap forms an admission candidate",
            "Because U2 overlaps one active ADP and extends beyond its boundary, the edge unit forms Ũ1=P1∪U2 while retaining the original active P1 during validation.",
            candidate, resolved_all, "ehc", [["A3", "A6"]], 1.0, 0, [],
            "slow", "k = 4 · 60–80 s", "set union", "—",
            active=True,
            operations=admission_sets,
            discovered_candidate=new_candidate,
        ),
        make_frame(
            13,
            "Expanded Candidate ADP",
            "The union enters fast-timescale validation",
            "Ũ1 contains P1 and the external member A6 but is not yet active; its unresolved cross-boundary reasoning item RI-3 must be aligned first.",
            expanded_candidate, admission_items, "ehc", [["A3", "A6"]], 0.67, 1, [],
            "slow", "k = 5 · 80–100 s", "epoch boundary", "—",
            operations=admission_sets,
        ),
        make_frame(
            14,
            "Expansion validation",
            "Algorithm 2 aligns the expanded Candidate ADP",
            "The BS schedules A3 and A6 for RI-3 and tests whether Ũ1 can reach full reasoning coherence with no residual action conflict.",
            expanded_candidate, admission_items, "ehc", [["A3", "A6"]], 0.67, 1,
            [
                {"slot": "RB-1", "item": "RI-3", "agent": "A3", "state": "scheduled"},
                {"slot": "RB-2", "item": "RI-3", "agent": "A6", "state": "scheduled"},
            ], "fast", "k = 5 · 80–100 s", "t = 801 · <100 ms", "r = 0",
            operations=admission_sets,
        ),
        make_frame(
            15,
            "Expanded Active ADP",
            "Successful validation activates the expanded ADP",
            "Algorithm 2 reaches Φ=1 and C=0, so Ũ1 is activated as the new P1; otherwise, the original four-member P1 would have been retained.",
            expanded_candidate, admission_resolved, "ehc", [], 1.0, 0,
            [
                {"slot": "RB-1", "item": "RI-3", "agent": "A3", "state": "completed"},
                {"slot": "RB-2", "item": "RI-3", "agent": "A6", "state": "completed"},
            ], "fast", "k = 5 · 80–100 s", "t = 801 · <100 ms", "r = 1",
            active=True,
            operations=admission_sets,
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

