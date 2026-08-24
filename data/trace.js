window.ADP_TRACE = [
  {
    "step": 0,
    "stage": "Wireless network",
    "title": "Network-visible agents",
    "description": "The BS observes a relatively stable core of low-mobility agents operating repeatedly inside the same controlled mobility zone.",
    "agents": [
      {
        "id": "A1",
        "kind": "Shuttle",
        "x": 145,
        "y": 270,
        "intent": "serve west platform"
      },
      {
        "id": "A2",
        "kind": "Robot",
        "x": 350,
        "y": 445,
        "intent": "cross service lane"
      },
      {
        "id": "A3",
        "kind": "Shuttle",
        "x": 565,
        "y": 270,
        "intent": "serve east platform"
      },
      {
        "id": "A4",
        "kind": "Robot",
        "x": 350,
        "y": 95,
        "intent": "cross service lane"
      },
      {
        "id": "A5",
        "kind": "UAV",
        "x": 105,
        "y": 105,
        "intent": "observe mobility zone"
      }
    ],
    "relations": [
      {
        "source": "A1",
        "target": "A2",
        "spatial": 0.86,
        "temporal": 0.92,
        "communication": 0.88
      },
      {
        "source": "A2",
        "target": "A3",
        "spatial": 0.79,
        "temporal": 0.85,
        "communication": 0.91
      },
      {
        "source": "A3",
        "target": "A4",
        "spatial": 0.83,
        "temporal": 0.9,
        "communication": 0.86
      },
      {
        "source": "A4",
        "target": "A1",
        "spatial": 0.76,
        "temporal": 0.81,
        "communication": 0.84
      },
      {
        "source": "A1",
        "target": "A3",
        "spatial": 0.48,
        "temporal": 0.72,
        "communication": 0.78
      },
      {
        "source": "A2",
        "target": "A4",
        "spatial": 0.45,
        "temporal": 0.68,
        "communication": 0.8
      },
      {
        "source": "A1",
        "target": "A5",
        "spatial": 0.22,
        "temporal": 0.31,
        "communication": 0.74
      },
      {
        "source": "A3",
        "target": "A6",
        "spatial": 0.72,
        "temporal": 0.78,
        "communication": 0.89
      }
    ],
    "visibleRelations": "communication",
    "conflicts": [],
    "candidate": [],
    "active": false,
    "items": [],
    "coherence": 0.0,
    "conflictCount": 0,
    "resources": [],
    "timescale": "slow",
    "slowEpoch": "k = 1 \u00b7 0\u201320 s",
    "fastSlot": "sampling",
    "reasoningRound": "\u2014",
    "operations": [],
    "newMembers": []
  },
  {
    "step": 1,
    "stage": "Dependency identification",
    "title": "Three dependencies become visible",
    "description": "Across many fast slots, spatial, temporal, and communication measurements reveal which agents repeatedly affect one another.",
    "agents": [
      {
        "id": "A1",
        "kind": "Shuttle",
        "x": 145,
        "y": 270,
        "intent": "serve west platform"
      },
      {
        "id": "A2",
        "kind": "Robot",
        "x": 350,
        "y": 445,
        "intent": "cross service lane"
      },
      {
        "id": "A3",
        "kind": "Shuttle",
        "x": 565,
        "y": 270,
        "intent": "serve east platform"
      },
      {
        "id": "A4",
        "kind": "Robot",
        "x": 350,
        "y": 95,
        "intent": "cross service lane"
      },
      {
        "id": "A5",
        "kind": "UAV",
        "x": 105,
        "y": 105,
        "intent": "observe mobility zone"
      }
    ],
    "relations": [
      {
        "source": "A1",
        "target": "A2",
        "spatial": 0.86,
        "temporal": 0.92,
        "communication": 0.88
      },
      {
        "source": "A2",
        "target": "A3",
        "spatial": 0.79,
        "temporal": 0.85,
        "communication": 0.91
      },
      {
        "source": "A3",
        "target": "A4",
        "spatial": 0.83,
        "temporal": 0.9,
        "communication": 0.86
      },
      {
        "source": "A4",
        "target": "A1",
        "spatial": 0.76,
        "temporal": 0.81,
        "communication": 0.84
      },
      {
        "source": "A1",
        "target": "A3",
        "spatial": 0.48,
        "temporal": 0.72,
        "communication": 0.78
      },
      {
        "source": "A2",
        "target": "A4",
        "spatial": 0.45,
        "temporal": 0.68,
        "communication": 0.8
      },
      {
        "source": "A1",
        "target": "A5",
        "spatial": 0.22,
        "temporal": 0.31,
        "communication": 0.74
      },
      {
        "source": "A3",
        "target": "A6",
        "spatial": 0.72,
        "temporal": 0.78,
        "communication": 0.89
      }
    ],
    "visibleRelations": "dependencies",
    "conflicts": [],
    "candidate": [],
    "active": false,
    "items": [],
    "coherence": 0.0,
    "conflictCount": 0,
    "resources": [],
    "timescale": "slow",
    "slowEpoch": "k = 1 \u00b7 0\u201320 s",
    "fastSlot": "t = 1 \u2026 200",
    "reasoningRound": "\u2014",
    "operations": [],
    "newMembers": []
  },
  {
    "step": 2,
    "stage": "EHC construction",
    "title": "The BS maintains the EHC relation space",
    "description": "At the next organizational epoch, accumulated dependency measurements form relationship-aware EHC edges rather than a new coverage area.",
    "agents": [
      {
        "id": "A1",
        "kind": "Shuttle",
        "x": 145,
        "y": 270,
        "intent": "serve west platform"
      },
      {
        "id": "A2",
        "kind": "Robot",
        "x": 350,
        "y": 445,
        "intent": "cross service lane"
      },
      {
        "id": "A3",
        "kind": "Shuttle",
        "x": 565,
        "y": 270,
        "intent": "serve east platform"
      },
      {
        "id": "A4",
        "kind": "Robot",
        "x": 350,
        "y": 95,
        "intent": "cross service lane"
      },
      {
        "id": "A5",
        "kind": "UAV",
        "x": 105,
        "y": 105,
        "intent": "observe mobility zone"
      }
    ],
    "relations": [
      {
        "source": "A1",
        "target": "A2",
        "spatial": 0.86,
        "temporal": 0.92,
        "communication": 0.88
      },
      {
        "source": "A2",
        "target": "A3",
        "spatial": 0.79,
        "temporal": 0.85,
        "communication": 0.91
      },
      {
        "source": "A3",
        "target": "A4",
        "spatial": 0.83,
        "temporal": 0.9,
        "communication": 0.86
      },
      {
        "source": "A4",
        "target": "A1",
        "spatial": 0.76,
        "temporal": 0.81,
        "communication": 0.84
      },
      {
        "source": "A1",
        "target": "A3",
        "spatial": 0.48,
        "temporal": 0.72,
        "communication": 0.78
      },
      {
        "source": "A2",
        "target": "A4",
        "spatial": 0.45,
        "temporal": 0.68,
        "communication": 0.8
      },
      {
        "source": "A1",
        "target": "A5",
        "spatial": 0.22,
        "temporal": 0.31,
        "communication": 0.74
      },
      {
        "source": "A3",
        "target": "A6",
        "spatial": 0.72,
        "temporal": 0.78,
        "communication": 0.89
      }
    ],
    "visibleRelations": "ehc",
    "conflicts": [],
    "candidate": [],
    "active": false,
    "items": [],
    "coherence": 0.0,
    "conflictCount": 0,
    "resources": [],
    "timescale": "slow",
    "slowEpoch": "k = 2 \u00b7 20\u201340 s",
    "fastSlot": "aggregated slots",
    "reasoningRound": "\u2014",
    "operations": [],
    "newMembers": []
  },
  {
    "step": 3,
    "stage": "Coordination demand",
    "title": "Recurring pre-action conflicts emerge",
    "description": "Repeated observations over the epoch show that two EHC-connected pairs regularly propose actions that cannot be jointly executed.",
    "agents": [
      {
        "id": "A1",
        "kind": "Shuttle",
        "x": 145,
        "y": 270,
        "intent": "serve west platform"
      },
      {
        "id": "A2",
        "kind": "Robot",
        "x": 350,
        "y": 445,
        "intent": "cross service lane"
      },
      {
        "id": "A3",
        "kind": "Shuttle",
        "x": 565,
        "y": 270,
        "intent": "serve east platform"
      },
      {
        "id": "A4",
        "kind": "Robot",
        "x": 350,
        "y": 95,
        "intent": "cross service lane"
      },
      {
        "id": "A5",
        "kind": "UAV",
        "x": 105,
        "y": 105,
        "intent": "observe mobility zone"
      }
    ],
    "relations": [
      {
        "source": "A1",
        "target": "A2",
        "spatial": 0.86,
        "temporal": 0.92,
        "communication": 0.88
      },
      {
        "source": "A2",
        "target": "A3",
        "spatial": 0.79,
        "temporal": 0.85,
        "communication": 0.91
      },
      {
        "source": "A3",
        "target": "A4",
        "spatial": 0.83,
        "temporal": 0.9,
        "communication": 0.86
      },
      {
        "source": "A4",
        "target": "A1",
        "spatial": 0.76,
        "temporal": 0.81,
        "communication": 0.84
      },
      {
        "source": "A1",
        "target": "A3",
        "spatial": 0.48,
        "temporal": 0.72,
        "communication": 0.78
      },
      {
        "source": "A2",
        "target": "A4",
        "spatial": 0.45,
        "temporal": 0.68,
        "communication": 0.8
      },
      {
        "source": "A1",
        "target": "A5",
        "spatial": 0.22,
        "temporal": 0.31,
        "communication": 0.74
      },
      {
        "source": "A3",
        "target": "A6",
        "spatial": 0.72,
        "temporal": 0.78,
        "communication": 0.89
      }
    ],
    "visibleRelations": "ehc",
    "conflicts": [
      [
        "A1",
        "A2"
      ],
      [
        "A3",
        "A4"
      ]
    ],
    "candidate": [],
    "active": false,
    "items": [],
    "coherence": 0.0,
    "conflictCount": 2,
    "resources": [],
    "timescale": "slow",
    "slowEpoch": "k = 2 \u00b7 20\u201340 s",
    "fastSlot": "t = 201 \u2026 400",
    "reasoningRound": "\u2014",
    "operations": [],
    "newMembers": []
  },
  {
    "step": 4,
    "stage": "Candidate ADP",
    "title": "A candidate population is discovered",
    "description": "After slow-timescale accumulation, recurring conflicts seed Algorithm 1 and their dependency-supported endpoints form a Candidate ADP.",
    "agents": [
      {
        "id": "A1",
        "kind": "Shuttle",
        "x": 145,
        "y": 270,
        "intent": "serve west platform"
      },
      {
        "id": "A2",
        "kind": "Robot",
        "x": 350,
        "y": 445,
        "intent": "cross service lane"
      },
      {
        "id": "A3",
        "kind": "Shuttle",
        "x": 565,
        "y": 270,
        "intent": "serve east platform"
      },
      {
        "id": "A4",
        "kind": "Robot",
        "x": 350,
        "y": 95,
        "intent": "cross service lane"
      },
      {
        "id": "A5",
        "kind": "UAV",
        "x": 105,
        "y": 105,
        "intent": "observe mobility zone"
      }
    ],
    "relations": [
      {
        "source": "A1",
        "target": "A2",
        "spatial": 0.86,
        "temporal": 0.92,
        "communication": 0.88
      },
      {
        "source": "A2",
        "target": "A3",
        "spatial": 0.79,
        "temporal": 0.85,
        "communication": 0.91
      },
      {
        "source": "A3",
        "target": "A4",
        "spatial": 0.83,
        "temporal": 0.9,
        "communication": 0.86
      },
      {
        "source": "A4",
        "target": "A1",
        "spatial": 0.76,
        "temporal": 0.81,
        "communication": 0.84
      },
      {
        "source": "A1",
        "target": "A3",
        "spatial": 0.48,
        "temporal": 0.72,
        "communication": 0.78
      },
      {
        "source": "A2",
        "target": "A4",
        "spatial": 0.45,
        "temporal": 0.68,
        "communication": 0.8
      },
      {
        "source": "A1",
        "target": "A5",
        "spatial": 0.22,
        "temporal": 0.31,
        "communication": 0.74
      },
      {
        "source": "A3",
        "target": "A6",
        "spatial": 0.72,
        "temporal": 0.78,
        "communication": 0.89
      }
    ],
    "visibleRelations": "ehc",
    "conflicts": [
      [
        "A1",
        "A2"
      ],
      [
        "A3",
        "A4"
      ]
    ],
    "candidate": [
      "A1",
      "A2",
      "A3",
      "A4"
    ],
    "active": false,
    "items": [],
    "coherence": 0.0,
    "conflictCount": 2,
    "resources": [],
    "timescale": "slow",
    "slowEpoch": "k = 3 \u00b7 40\u201360 s",
    "fastSlot": "epoch boundary",
    "reasoningRound": "\u2014",
    "operations": [],
    "newMembers": []
  },
  {
    "step": 5,
    "stage": "Reasoning items",
    "title": "Conflicts instantiate population reasoning items",
    "description": "Within one fast decision slot, each current conflict pair contributes one unresolved item grounded in its three dependency dimensions.",
    "agents": [
      {
        "id": "A1",
        "kind": "Shuttle",
        "x": 145,
        "y": 270,
        "intent": "serve west platform"
      },
      {
        "id": "A2",
        "kind": "Robot",
        "x": 350,
        "y": 445,
        "intent": "cross service lane"
      },
      {
        "id": "A3",
        "kind": "Shuttle",
        "x": 565,
        "y": 270,
        "intent": "serve east platform"
      },
      {
        "id": "A4",
        "kind": "Robot",
        "x": 350,
        "y": 95,
        "intent": "cross service lane"
      },
      {
        "id": "A5",
        "kind": "UAV",
        "x": 105,
        "y": 105,
        "intent": "observe mobility zone"
      }
    ],
    "relations": [
      {
        "source": "A1",
        "target": "A2",
        "spatial": 0.86,
        "temporal": 0.92,
        "communication": 0.88
      },
      {
        "source": "A2",
        "target": "A3",
        "spatial": 0.79,
        "temporal": 0.85,
        "communication": 0.91
      },
      {
        "source": "A3",
        "target": "A4",
        "spatial": 0.83,
        "temporal": 0.9,
        "communication": 0.86
      },
      {
        "source": "A4",
        "target": "A1",
        "spatial": 0.76,
        "temporal": 0.81,
        "communication": 0.84
      },
      {
        "source": "A1",
        "target": "A3",
        "spatial": 0.48,
        "temporal": 0.72,
        "communication": 0.78
      },
      {
        "source": "A2",
        "target": "A4",
        "spatial": 0.45,
        "temporal": 0.68,
        "communication": 0.8
      },
      {
        "source": "A1",
        "target": "A5",
        "spatial": 0.22,
        "temporal": 0.31,
        "communication": 0.74
      },
      {
        "source": "A3",
        "target": "A6",
        "spatial": 0.72,
        "temporal": 0.78,
        "communication": 0.89
      }
    ],
    "visibleRelations": "ehc",
    "conflicts": [
      [
        "A1",
        "A2"
      ],
      [
        "A3",
        "A4"
      ]
    ],
    "candidate": [
      "A1",
      "A2",
      "A3",
      "A4"
    ],
    "active": false,
    "items": [
      {
        "id": "RI-1",
        "agents": [
          "A1",
          "A2"
        ],
        "condition": {
          "spatial": 0.86,
          "temporal": 0.92,
          "communication": 0.88
        },
        "constraint": "Eliminate the corresponding pre-action conflict",
        "state": "unresolved"
      },
      {
        "id": "RI-2",
        "agents": [
          "A3",
          "A4"
        ],
        "condition": {
          "spatial": 0.83,
          "temporal": 0.9,
          "communication": 0.86
        },
        "constraint": "Eliminate the corresponding pre-action conflict",
        "state": "unresolved"
      }
    ],
    "coherence": 0.0,
    "conflictCount": 2,
    "resources": [],
    "timescale": "fast",
    "slowEpoch": "k = 3 \u00b7 40\u201360 s",
    "fastSlot": "t = 401 \u00b7 <100 ms",
    "reasoningRound": "r = 0",
    "operations": [],
    "newMembers": []
  },
  {
    "step": 6,
    "stage": "Resource scheduling",
    "title": "The BS schedules item-relevant exchanges",
    "description": "Limited radio resources are assigned to RI-1 first; unscheduled items remain unresolved.",
    "agents": [
      {
        "id": "A1",
        "kind": "Shuttle",
        "x": 145,
        "y": 270,
        "intent": "serve west platform"
      },
      {
        "id": "A2",
        "kind": "Robot",
        "x": 350,
        "y": 445,
        "intent": "cross service lane"
      },
      {
        "id": "A3",
        "kind": "Shuttle",
        "x": 565,
        "y": 270,
        "intent": "serve east platform"
      },
      {
        "id": "A4",
        "kind": "Robot",
        "x": 350,
        "y": 95,
        "intent": "cross service lane"
      },
      {
        "id": "A5",
        "kind": "UAV",
        "x": 105,
        "y": 105,
        "intent": "observe mobility zone"
      }
    ],
    "relations": [
      {
        "source": "A1",
        "target": "A2",
        "spatial": 0.86,
        "temporal": 0.92,
        "communication": 0.88
      },
      {
        "source": "A2",
        "target": "A3",
        "spatial": 0.79,
        "temporal": 0.85,
        "communication": 0.91
      },
      {
        "source": "A3",
        "target": "A4",
        "spatial": 0.83,
        "temporal": 0.9,
        "communication": 0.86
      },
      {
        "source": "A4",
        "target": "A1",
        "spatial": 0.76,
        "temporal": 0.81,
        "communication": 0.84
      },
      {
        "source": "A1",
        "target": "A3",
        "spatial": 0.48,
        "temporal": 0.72,
        "communication": 0.78
      },
      {
        "source": "A2",
        "target": "A4",
        "spatial": 0.45,
        "temporal": 0.68,
        "communication": 0.8
      },
      {
        "source": "A1",
        "target": "A5",
        "spatial": 0.22,
        "temporal": 0.31,
        "communication": 0.74
      },
      {
        "source": "A3",
        "target": "A6",
        "spatial": 0.72,
        "temporal": 0.78,
        "communication": 0.89
      }
    ],
    "visibleRelations": "ehc",
    "conflicts": [
      [
        "A1",
        "A2"
      ],
      [
        "A3",
        "A4"
      ]
    ],
    "candidate": [
      "A1",
      "A2",
      "A3",
      "A4"
    ],
    "active": false,
    "items": [
      {
        "id": "RI-1",
        "agents": [
          "A1",
          "A2"
        ],
        "condition": {
          "spatial": 0.86,
          "temporal": 0.92,
          "communication": 0.88
        },
        "constraint": "Eliminate the corresponding pre-action conflict",
        "state": "unresolved"
      },
      {
        "id": "RI-2",
        "agents": [
          "A3",
          "A4"
        ],
        "condition": {
          "spatial": 0.83,
          "temporal": 0.9,
          "communication": 0.86
        },
        "constraint": "Eliminate the corresponding pre-action conflict",
        "state": "unresolved"
      }
    ],
    "coherence": 0.0,
    "conflictCount": 2,
    "resources": [
      {
        "slot": "RB-1",
        "item": "RI-1",
        "agent": "A1",
        "state": "scheduled"
      },
      {
        "slot": "RB-2",
        "item": "RI-1",
        "agent": "A2",
        "state": "scheduled"
      },
      {
        "slot": "RB-3",
        "item": "RI-2",
        "agent": "A3",
        "state": "waiting"
      },
      {
        "slot": "RB-4",
        "item": "RI-2",
        "agent": "A4",
        "state": "waiting"
      }
    ],
    "timescale": "fast",
    "slowEpoch": "k = 3 \u00b7 40\u201360 s",
    "fastSlot": "t = 401 \u00b7 <100 ms",
    "reasoningRound": "r = 0",
    "operations": [],
    "newMembers": []
  },
  {
    "step": 7,
    "stage": "Incremental alignment",
    "title": "One item is resolved",
    "description": "The scheduled responses resolve RI-1. Population coherence rises while one action conflict remains.",
    "agents": [
      {
        "id": "A1",
        "kind": "Shuttle",
        "x": 145,
        "y": 270,
        "intent": "serve west platform"
      },
      {
        "id": "A2",
        "kind": "Robot",
        "x": 350,
        "y": 445,
        "intent": "cross service lane"
      },
      {
        "id": "A3",
        "kind": "Shuttle",
        "x": 565,
        "y": 270,
        "intent": "serve east platform"
      },
      {
        "id": "A4",
        "kind": "Robot",
        "x": 350,
        "y": 95,
        "intent": "cross service lane"
      },
      {
        "id": "A5",
        "kind": "UAV",
        "x": 105,
        "y": 105,
        "intent": "observe mobility zone"
      }
    ],
    "relations": [
      {
        "source": "A1",
        "target": "A2",
        "spatial": 0.86,
        "temporal": 0.92,
        "communication": 0.88
      },
      {
        "source": "A2",
        "target": "A3",
        "spatial": 0.79,
        "temporal": 0.85,
        "communication": 0.91
      },
      {
        "source": "A3",
        "target": "A4",
        "spatial": 0.83,
        "temporal": 0.9,
        "communication": 0.86
      },
      {
        "source": "A4",
        "target": "A1",
        "spatial": 0.76,
        "temporal": 0.81,
        "communication": 0.84
      },
      {
        "source": "A1",
        "target": "A3",
        "spatial": 0.48,
        "temporal": 0.72,
        "communication": 0.78
      },
      {
        "source": "A2",
        "target": "A4",
        "spatial": 0.45,
        "temporal": 0.68,
        "communication": 0.8
      },
      {
        "source": "A1",
        "target": "A5",
        "spatial": 0.22,
        "temporal": 0.31,
        "communication": 0.74
      },
      {
        "source": "A3",
        "target": "A6",
        "spatial": 0.72,
        "temporal": 0.78,
        "communication": 0.89
      }
    ],
    "visibleRelations": "ehc",
    "conflicts": [
      [
        "A3",
        "A4"
      ]
    ],
    "candidate": [
      "A1",
      "A2",
      "A3",
      "A4"
    ],
    "active": false,
    "items": [
      {
        "id": "RI-1",
        "agents": [
          "A1",
          "A2"
        ],
        "condition": {
          "spatial": 0.86,
          "temporal": 0.92,
          "communication": 0.88
        },
        "constraint": "Eliminate the corresponding pre-action conflict",
        "state": "resolved"
      },
      {
        "id": "RI-2",
        "agents": [
          "A3",
          "A4"
        ],
        "condition": {
          "spatial": 0.83,
          "temporal": 0.9,
          "communication": 0.86
        },
        "constraint": "Eliminate the corresponding pre-action conflict",
        "state": "unresolved"
      }
    ],
    "coherence": 0.5,
    "conflictCount": 1,
    "resources": [
      {
        "slot": "RB-1",
        "item": "RI-1",
        "agent": "A1",
        "state": "completed"
      },
      {
        "slot": "RB-2",
        "item": "RI-1",
        "agent": "A2",
        "state": "completed"
      },
      {
        "slot": "RB-3",
        "item": "RI-2",
        "agent": "A3",
        "state": "scheduled"
      },
      {
        "slot": "RB-4",
        "item": "RI-2",
        "agent": "A4",
        "state": "scheduled"
      }
    ],
    "timescale": "fast",
    "slowEpoch": "k = 3 \u00b7 40\u201360 s",
    "fastSlot": "t = 401 \u00b7 <100 ms",
    "reasoningRound": "r = 1",
    "operations": [],
    "newMembers": []
  },
  {
    "step": 8,
    "stage": "Active ADP",
    "title": "The Candidate ADP becomes operational",
    "description": "Both items are resolved: population coherence reaches one and no action conflict remains.",
    "agents": [
      {
        "id": "A1",
        "kind": "Shuttle",
        "x": 145,
        "y": 270,
        "intent": "serve west platform"
      },
      {
        "id": "A2",
        "kind": "Robot",
        "x": 350,
        "y": 445,
        "intent": "cross service lane"
      },
      {
        "id": "A3",
        "kind": "Shuttle",
        "x": 565,
        "y": 270,
        "intent": "serve east platform"
      },
      {
        "id": "A4",
        "kind": "Robot",
        "x": 350,
        "y": 95,
        "intent": "cross service lane"
      },
      {
        "id": "A5",
        "kind": "UAV",
        "x": 105,
        "y": 105,
        "intent": "observe mobility zone"
      }
    ],
    "relations": [
      {
        "source": "A1",
        "target": "A2",
        "spatial": 0.86,
        "temporal": 0.92,
        "communication": 0.88
      },
      {
        "source": "A2",
        "target": "A3",
        "spatial": 0.79,
        "temporal": 0.85,
        "communication": 0.91
      },
      {
        "source": "A3",
        "target": "A4",
        "spatial": 0.83,
        "temporal": 0.9,
        "communication": 0.86
      },
      {
        "source": "A4",
        "target": "A1",
        "spatial": 0.76,
        "temporal": 0.81,
        "communication": 0.84
      },
      {
        "source": "A1",
        "target": "A3",
        "spatial": 0.48,
        "temporal": 0.72,
        "communication": 0.78
      },
      {
        "source": "A2",
        "target": "A4",
        "spatial": 0.45,
        "temporal": 0.68,
        "communication": 0.8
      },
      {
        "source": "A1",
        "target": "A5",
        "spatial": 0.22,
        "temporal": 0.31,
        "communication": 0.74
      },
      {
        "source": "A3",
        "target": "A6",
        "spatial": 0.72,
        "temporal": 0.78,
        "communication": 0.89
      }
    ],
    "visibleRelations": "ehc",
    "conflicts": [],
    "candidate": [
      "A1",
      "A2",
      "A3",
      "A4"
    ],
    "active": true,
    "items": [
      {
        "id": "RI-1",
        "agents": [
          "A1",
          "A2"
        ],
        "condition": {
          "spatial": 0.86,
          "temporal": 0.92,
          "communication": 0.88
        },
        "constraint": "Eliminate the corresponding pre-action conflict",
        "state": "resolved"
      },
      {
        "id": "RI-2",
        "agents": [
          "A3",
          "A4"
        ],
        "condition": {
          "spatial": 0.83,
          "temporal": 0.9,
          "communication": 0.86
        },
        "constraint": "Eliminate the corresponding pre-action conflict",
        "state": "resolved"
      }
    ],
    "coherence": 1.0,
    "conflictCount": 0,
    "resources": [
      {
        "slot": "RB-1",
        "item": "RI-1",
        "agent": "A1",
        "state": "completed"
      },
      {
        "slot": "RB-2",
        "item": "RI-1",
        "agent": "A2",
        "state": "completed"
      },
      {
        "slot": "RB-3",
        "item": "RI-2",
        "agent": "A3",
        "state": "completed"
      },
      {
        "slot": "RB-4",
        "item": "RI-2",
        "agent": "A4",
        "state": "completed"
      }
    ],
    "timescale": "fast",
    "slowEpoch": "k = 3 \u00b7 40\u201360 s",
    "fastSlot": "t = 401 \u00b7 <100 ms",
    "reasoningRound": "r = 2",
    "operations": [],
    "newMembers": []
  },
  {
    "step": 9,
    "stage": "Active operation",
    "title": "Resolved items are reused",
    "description": "In the next fast slot, the Active ADP reuses its valid population reasoning state and avoids repeating the initial alignment overhead.",
    "agents": [
      {
        "id": "A1",
        "kind": "Shuttle",
        "x": 145,
        "y": 270,
        "intent": "serve west platform"
      },
      {
        "id": "A2",
        "kind": "Robot",
        "x": 350,
        "y": 445,
        "intent": "cross service lane"
      },
      {
        "id": "A3",
        "kind": "Shuttle",
        "x": 565,
        "y": 270,
        "intent": "serve east platform"
      },
      {
        "id": "A4",
        "kind": "Robot",
        "x": 350,
        "y": 95,
        "intent": "cross service lane"
      },
      {
        "id": "A5",
        "kind": "UAV",
        "x": 105,
        "y": 105,
        "intent": "observe mobility zone"
      }
    ],
    "relations": [
      {
        "source": "A1",
        "target": "A2",
        "spatial": 0.86,
        "temporal": 0.92,
        "communication": 0.88
      },
      {
        "source": "A2",
        "target": "A3",
        "spatial": 0.79,
        "temporal": 0.85,
        "communication": 0.91
      },
      {
        "source": "A3",
        "target": "A4",
        "spatial": 0.83,
        "temporal": 0.9,
        "communication": 0.86
      },
      {
        "source": "A4",
        "target": "A1",
        "spatial": 0.76,
        "temporal": 0.81,
        "communication": 0.84
      },
      {
        "source": "A1",
        "target": "A3",
        "spatial": 0.48,
        "temporal": 0.72,
        "communication": 0.78
      },
      {
        "source": "A2",
        "target": "A4",
        "spatial": 0.45,
        "temporal": 0.68,
        "communication": 0.8
      },
      {
        "source": "A1",
        "target": "A5",
        "spatial": 0.22,
        "temporal": 0.31,
        "communication": 0.74
      },
      {
        "source": "A3",
        "target": "A6",
        "spatial": 0.72,
        "temporal": 0.78,
        "communication": 0.89
      }
    ],
    "visibleRelations": "ehc",
    "conflicts": [],
    "candidate": [
      "A1",
      "A2",
      "A3",
      "A4"
    ],
    "active": true,
    "items": [
      {
        "id": "RI-1",
        "agents": [
          "A1",
          "A2"
        ],
        "condition": {
          "spatial": 0.86,
          "temporal": 0.92,
          "communication": 0.88
        },
        "constraint": "Eliminate the corresponding pre-action conflict",
        "state": "resolved"
      },
      {
        "id": "RI-2",
        "agents": [
          "A3",
          "A4"
        ],
        "condition": {
          "spatial": 0.83,
          "temporal": 0.9,
          "communication": 0.86
        },
        "constraint": "Eliminate the corresponding pre-action conflict",
        "state": "resolved"
      }
    ],
    "coherence": 1.0,
    "conflictCount": 0,
    "resources": [
      {
        "slot": "RB-1",
        "item": "reused",
        "agent": "A1+A2",
        "state": "completed"
      },
      {
        "slot": "RB-2",
        "item": "reused",
        "agent": "A3+A4",
        "state": "completed"
      }
    ],
    "timescale": "fast",
    "slowEpoch": "k = 3 \u00b7 40\u201360 s",
    "fastSlot": "t = 402 \u00b7 <100 ms",
    "reasoningRound": "reuse",
    "operations": [],
    "newMembers": []
  },
  {
    "step": 10,
    "stage": "Repeated degradation",
    "title": "One member repeatedly prevents full alignment",
    "description": "Across subsequent slots, A4 repeatedly appears in unresolved RI-2 outcomes; coherence falls and one action conflict remains after the fast alignment budget expires.",
    "agents": [
      {
        "id": "A1",
        "kind": "Shuttle",
        "x": 145,
        "y": 270,
        "intent": "serve west platform"
      },
      {
        "id": "A2",
        "kind": "Robot",
        "x": 350,
        "y": 445,
        "intent": "cross service lane"
      },
      {
        "id": "A3",
        "kind": "Shuttle",
        "x": 565,
        "y": 270,
        "intent": "serve east platform"
      },
      {
        "id": "A4",
        "kind": "Robot",
        "x": 350,
        "y": 95,
        "intent": "cross service lane"
      },
      {
        "id": "A5",
        "kind": "UAV",
        "x": 105,
        "y": 105,
        "intent": "observe mobility zone"
      }
    ],
    "relations": [
      {
        "source": "A1",
        "target": "A2",
        "spatial": 0.86,
        "temporal": 0.92,
        "communication": 0.88
      },
      {
        "source": "A2",
        "target": "A3",
        "spatial": 0.79,
        "temporal": 0.85,
        "communication": 0.91
      },
      {
        "source": "A3",
        "target": "A4",
        "spatial": 0.83,
        "temporal": 0.9,
        "communication": 0.86
      },
      {
        "source": "A4",
        "target": "A1",
        "spatial": 0.76,
        "temporal": 0.81,
        "communication": 0.84
      },
      {
        "source": "A1",
        "target": "A3",
        "spatial": 0.48,
        "temporal": 0.72,
        "communication": 0.78
      },
      {
        "source": "A2",
        "target": "A4",
        "spatial": 0.45,
        "temporal": 0.68,
        "communication": 0.8
      },
      {
        "source": "A1",
        "target": "A5",
        "spatial": 0.22,
        "temporal": 0.31,
        "communication": 0.74
      },
      {
        "source": "A3",
        "target": "A6",
        "spatial": 0.72,
        "temporal": 0.78,
        "communication": 0.89
      }
    ],
    "visibleRelations": "ehc",
    "conflicts": [
      [
        "A3",
        "A4"
      ]
    ],
    "candidate": [
      "A1",
      "A2",
      "A3",
      "A4"
    ],
    "active": true,
    "items": [
      {
        "id": "RI-1",
        "agents": [
          "A1",
          "A2"
        ],
        "condition": {
          "spatial": 0.86,
          "temporal": 0.92,
          "communication": 0.88
        },
        "constraint": "Eliminate the corresponding pre-action conflict",
        "state": "resolved"
      },
      {
        "id": "RI-2",
        "agents": [
          "A3",
          "A4"
        ],
        "condition": {
          "spatial": 0.83,
          "temporal": 0.9,
          "communication": 0.28
        },
        "constraint": "Eliminate the corresponding pre-action conflict",
        "state": "unresolved"
      }
    ],
    "coherence": 0.5,
    "conflictCount": 1,
    "resources": [
      {
        "slot": "RB-1",
        "item": "RI-1",
        "agent": "A1+A2",
        "state": "completed"
      },
      {
        "slot": "RB-2",
        "item": "RI-2",
        "agent": "A3",
        "state": "completed"
      },
      {
        "slot": "RB-3",
        "item": "RI-2",
        "agent": "A4",
        "state": "waiting"
      }
    ],
    "timescale": "fast",
    "slowEpoch": "k = 3 \u00b7 40\u201360 s",
    "fastSlot": "t = 403 \u2026 600",
    "reasoningRound": "terminal",
    "operations": [],
    "newMembers": []
  },
  {
    "step": 11,
    "stage": "Population monitoring",
    "title": "Fast failures accumulate into structural evidence",
    "description": "At the slow epoch boundary, the BS attributes the repeated unresolved-item pattern to the current membership rather than to a single transient slot.",
    "agents": [
      {
        "id": "A1",
        "kind": "Shuttle",
        "x": 145,
        "y": 270,
        "intent": "serve west platform"
      },
      {
        "id": "A2",
        "kind": "Robot",
        "x": 350,
        "y": 445,
        "intent": "cross service lane"
      },
      {
        "id": "A3",
        "kind": "Shuttle",
        "x": 565,
        "y": 270,
        "intent": "serve east platform"
      },
      {
        "id": "A4",
        "kind": "Robot",
        "x": 350,
        "y": 95,
        "intent": "cross service lane"
      },
      {
        "id": "A5",
        "kind": "UAV",
        "x": 105,
        "y": 105,
        "intent": "observe mobility zone"
      }
    ],
    "relations": [
      {
        "source": "A1",
        "target": "A2",
        "spatial": 0.86,
        "temporal": 0.92,
        "communication": 0.88
      },
      {
        "source": "A2",
        "target": "A3",
        "spatial": 0.79,
        "temporal": 0.85,
        "communication": 0.91
      },
      {
        "source": "A3",
        "target": "A4",
        "spatial": 0.83,
        "temporal": 0.9,
        "communication": 0.86
      },
      {
        "source": "A4",
        "target": "A1",
        "spatial": 0.76,
        "temporal": 0.81,
        "communication": 0.84
      },
      {
        "source": "A1",
        "target": "A3",
        "spatial": 0.48,
        "temporal": 0.72,
        "communication": 0.78
      },
      {
        "source": "A2",
        "target": "A4",
        "spatial": 0.45,
        "temporal": 0.68,
        "communication": 0.8
      },
      {
        "source": "A1",
        "target": "A5",
        "spatial": 0.22,
        "temporal": 0.31,
        "communication": 0.74
      },
      {
        "source": "A3",
        "target": "A6",
        "spatial": 0.72,
        "temporal": 0.78,
        "communication": 0.89
      }
    ],
    "visibleRelations": "ehc",
    "conflicts": [
      [
        "A3",
        "A4"
      ]
    ],
    "candidate": [
      "A1",
      "A2",
      "A3",
      "A4"
    ],
    "active": true,
    "items": [
      {
        "id": "RI-1",
        "agents": [
          "A1",
          "A2"
        ],
        "condition": {
          "spatial": 0.86,
          "temporal": 0.92,
          "communication": 0.88
        },
        "constraint": "Eliminate the corresponding pre-action conflict",
        "state": "resolved"
      },
      {
        "id": "RI-2",
        "agents": [
          "A3",
          "A4"
        ],
        "condition": {
          "spatial": 0.83,
          "temporal": 0.9,
          "communication": 0.28
        },
        "constraint": "Eliminate the corresponding pre-action conflict",
        "state": "unresolved"
      }
    ],
    "coherence": 0.5,
    "conflictCount": 1,
    "resources": [],
    "timescale": "slow",
    "slowEpoch": "k = 4 \u00b7 60\u201380 s",
    "fastSlot": "aggregate t = 403 \u2026 600",
    "reasoningRound": "\u2014",
    "operations": [],
    "newMembers": []
  },
  {
    "step": 12,
    "stage": "Member admission screening",
    "title": "The BS searches for a conflict-relevant new member",
    "description": "The EHC exposes newly visible agents, and the BS screens their communication feasibility and relevance to the unresolved RI-2 before expanding the ADP.",
    "agents": [
      {
        "id": "A1",
        "kind": "Shuttle",
        "x": 145,
        "y": 270,
        "intent": "serve west platform"
      },
      {
        "id": "A2",
        "kind": "Robot",
        "x": 350,
        "y": 445,
        "intent": "cross service lane"
      },
      {
        "id": "A3",
        "kind": "Shuttle",
        "x": 565,
        "y": 270,
        "intent": "serve east platform"
      },
      {
        "id": "A4",
        "kind": "Robot",
        "x": 350,
        "y": 95,
        "intent": "cross service lane"
      },
      {
        "id": "A5",
        "kind": "UAV",
        "x": 105,
        "y": 105,
        "intent": "observe mobility zone"
      },
      {
        "id": "A6",
        "kind": "Backup robot",
        "x": 615,
        "y": 425,
        "intent": "stand by for service replacement"
      }
    ],
    "relations": [
      {
        "source": "A1",
        "target": "A2",
        "spatial": 0.86,
        "temporal": 0.92,
        "communication": 0.88
      },
      {
        "source": "A2",
        "target": "A3",
        "spatial": 0.79,
        "temporal": 0.85,
        "communication": 0.91
      },
      {
        "source": "A3",
        "target": "A4",
        "spatial": 0.83,
        "temporal": 0.9,
        "communication": 0.86
      },
      {
        "source": "A4",
        "target": "A1",
        "spatial": 0.76,
        "temporal": 0.81,
        "communication": 0.84
      },
      {
        "source": "A1",
        "target": "A3",
        "spatial": 0.48,
        "temporal": 0.72,
        "communication": 0.78
      },
      {
        "source": "A2",
        "target": "A4",
        "spatial": 0.45,
        "temporal": 0.68,
        "communication": 0.8
      },
      {
        "source": "A1",
        "target": "A5",
        "spatial": 0.22,
        "temporal": 0.31,
        "communication": 0.74
      },
      {
        "source": "A3",
        "target": "A6",
        "spatial": 0.72,
        "temporal": 0.78,
        "communication": 0.89
      }
    ],
    "visibleRelations": "ehc",
    "conflicts": [
      [
        "A3",
        "A4"
      ]
    ],
    "candidate": [
      "A1",
      "A2",
      "A3",
      "A4"
    ],
    "active": true,
    "items": [
      {
        "id": "RI-1",
        "agents": [
          "A1",
          "A2"
        ],
        "condition": {
          "spatial": 0.86,
          "temporal": 0.92,
          "communication": 0.88
        },
        "constraint": "Eliminate the corresponding pre-action conflict",
        "state": "resolved"
      },
      {
        "id": "RI-2",
        "agents": [
          "A3",
          "A4"
        ],
        "condition": {
          "spatial": 0.83,
          "temporal": 0.9,
          "communication": 0.28
        },
        "constraint": "Eliminate the corresponding pre-action conflict",
        "state": "unresolved"
      }
    ],
    "coherence": 0.5,
    "conflictCount": 1,
    "resources": [],
    "timescale": "slow",
    "slowEpoch": "k = 4 \u00b7 60\u201380 s",
    "fastSlot": "operation screening",
    "reasoningRound": "\u2014",
    "operations": [
      {
        "name": "Retain and retry",
        "members": "A1, A2, A3, A4",
        "task": "maintained",
        "coherence": 0.5,
        "conflicts": 1,
        "status": "rejected",
        "reason": "Repeated RI-2 failure remains"
      },
      {
        "name": "Admit A5",
        "members": "A1, A2, A3, A4, A5",
        "task": "maintained",
        "coherence": 0.5,
        "conflicts": 1,
        "status": "rejected",
        "reason": "A5 is not dependency-relevant to unresolved RI-2"
      },
      {
        "name": "Admit A6",
        "members": "A1, A2, A3, A4, A6",
        "task": "maintained",
        "coherence": 1.0,
        "conflicts": 0,
        "status": "selected",
        "reason": "A6 is communication-feasible and dependency-relevant to RI-2"
      }
    ],
    "newMembers": [
      "A6"
    ]
  },
  {
    "step": 13,
    "stage": "Population expansion",
    "title": "A6 joins an expanded Candidate ADP",
    "description": "The communication-feasible and dependency-relevant A6 is admitted without removing any current member. The expanded population remains a Candidate ADP until fast-timescale validation succeeds.",
    "agents": [
      {
        "id": "A1",
        "kind": "Shuttle",
        "x": 145,
        "y": 270,
        "intent": "serve west platform"
      },
      {
        "id": "A2",
        "kind": "Robot",
        "x": 350,
        "y": 445,
        "intent": "cross service lane"
      },
      {
        "id": "A3",
        "kind": "Shuttle",
        "x": 565,
        "y": 270,
        "intent": "serve east platform"
      },
      {
        "id": "A4",
        "kind": "Robot",
        "x": 350,
        "y": 95,
        "intent": "cross service lane"
      },
      {
        "id": "A5",
        "kind": "UAV",
        "x": 105,
        "y": 105,
        "intent": "observe mobility zone"
      },
      {
        "id": "A6",
        "kind": "Backup robot",
        "x": 615,
        "y": 425,
        "intent": "stand by for service replacement"
      }
    ],
    "relations": [
      {
        "source": "A1",
        "target": "A2",
        "spatial": 0.86,
        "temporal": 0.92,
        "communication": 0.88
      },
      {
        "source": "A2",
        "target": "A3",
        "spatial": 0.79,
        "temporal": 0.85,
        "communication": 0.91
      },
      {
        "source": "A3",
        "target": "A4",
        "spatial": 0.83,
        "temporal": 0.9,
        "communication": 0.86
      },
      {
        "source": "A4",
        "target": "A1",
        "spatial": 0.76,
        "temporal": 0.81,
        "communication": 0.84
      },
      {
        "source": "A1",
        "target": "A3",
        "spatial": 0.48,
        "temporal": 0.72,
        "communication": 0.78
      },
      {
        "source": "A2",
        "target": "A4",
        "spatial": 0.45,
        "temporal": 0.68,
        "communication": 0.8
      },
      {
        "source": "A1",
        "target": "A5",
        "spatial": 0.22,
        "temporal": 0.31,
        "communication": 0.74
      },
      {
        "source": "A3",
        "target": "A6",
        "spatial": 0.72,
        "temporal": 0.78,
        "communication": 0.89
      }
    ],
    "visibleRelations": "ehc",
    "conflicts": [
      [
        "A3",
        "A4"
      ]
    ],
    "candidate": [
      "A1",
      "A2",
      "A3",
      "A4",
      "A6"
    ],
    "active": false,
    "items": [
      {
        "id": "RI-3",
        "agents": [
          "A3",
          "A4",
          "A6"
        ],
        "condition": {
          "spatial": 0.72,
          "temporal": 0.78,
          "communication": 0.89
        },
        "constraint": "Use the admitted member to eliminate the residual A3-A4 action conflict",
        "state": "unresolved"
      }
    ],
    "coherence": 0.0,
    "conflictCount": 1,
    "resources": [],
    "timescale": "slow",
    "slowEpoch": "k = 5 \u00b7 80\u2013100 s",
    "fastSlot": "epoch boundary",
    "reasoningRound": "\u2014",
    "operations": [
      {
        "name": "Retain and retry",
        "members": "A1, A2, A3, A4",
        "task": "maintained",
        "coherence": 0.5,
        "conflicts": 1,
        "status": "rejected",
        "reason": "Repeated RI-2 failure remains"
      },
      {
        "name": "Admit A5",
        "members": "A1, A2, A3, A4, A5",
        "task": "maintained",
        "coherence": 0.5,
        "conflicts": 1,
        "status": "rejected",
        "reason": "A5 is not dependency-relevant to unresolved RI-2"
      },
      {
        "name": "Admit A6",
        "members": "A1, A2, A3, A4, A6",
        "task": "maintained",
        "coherence": 1.0,
        "conflicts": 0,
        "status": "selected",
        "reason": "A6 is communication-feasible and dependency-relevant to RI-2"
      }
    ],
    "newMembers": [
      "A6"
    ]
  },
  {
    "step": 14,
    "stage": "Expanded-ADP alignment",
    "title": "The five-member population re-enters Algorithm 2",
    "description": "The BS schedules A3, A4, and the admitted A6 for RI-3 and checks whether the expanded population can restore coherence without residual conflict.",
    "agents": [
      {
        "id": "A1",
        "kind": "Shuttle",
        "x": 145,
        "y": 270,
        "intent": "serve west platform"
      },
      {
        "id": "A2",
        "kind": "Robot",
        "x": 350,
        "y": 445,
        "intent": "cross service lane"
      },
      {
        "id": "A3",
        "kind": "Shuttle",
        "x": 565,
        "y": 270,
        "intent": "serve east platform"
      },
      {
        "id": "A4",
        "kind": "Robot",
        "x": 350,
        "y": 95,
        "intent": "cross service lane"
      },
      {
        "id": "A5",
        "kind": "UAV",
        "x": 105,
        "y": 105,
        "intent": "observe mobility zone"
      },
      {
        "id": "A6",
        "kind": "Backup robot",
        "x": 615,
        "y": 425,
        "intent": "stand by for service replacement"
      }
    ],
    "relations": [
      {
        "source": "A1",
        "target": "A2",
        "spatial": 0.86,
        "temporal": 0.92,
        "communication": 0.88
      },
      {
        "source": "A2",
        "target": "A3",
        "spatial": 0.79,
        "temporal": 0.85,
        "communication": 0.91
      },
      {
        "source": "A3",
        "target": "A4",
        "spatial": 0.83,
        "temporal": 0.9,
        "communication": 0.86
      },
      {
        "source": "A4",
        "target": "A1",
        "spatial": 0.76,
        "temporal": 0.81,
        "communication": 0.84
      },
      {
        "source": "A1",
        "target": "A3",
        "spatial": 0.48,
        "temporal": 0.72,
        "communication": 0.78
      },
      {
        "source": "A2",
        "target": "A4",
        "spatial": 0.45,
        "temporal": 0.68,
        "communication": 0.8
      },
      {
        "source": "A1",
        "target": "A5",
        "spatial": 0.22,
        "temporal": 0.31,
        "communication": 0.74
      },
      {
        "source": "A3",
        "target": "A6",
        "spatial": 0.72,
        "temporal": 0.78,
        "communication": 0.89
      }
    ],
    "visibleRelations": "ehc",
    "conflicts": [
      [
        "A3",
        "A4"
      ]
    ],
    "candidate": [
      "A1",
      "A2",
      "A3",
      "A4",
      "A6"
    ],
    "active": false,
    "items": [
      {
        "id": "RI-1",
        "agents": [
          "A1",
          "A2"
        ],
        "condition": {
          "spatial": 0.86,
          "temporal": 0.92,
          "communication": 0.88
        },
        "constraint": "Eliminate the corresponding pre-action conflict",
        "state": "resolved"
      },
      {
        "id": "RI-3",
        "agents": [
          "A3",
          "A4",
          "A6"
        ],
        "condition": {
          "spatial": 0.72,
          "temporal": 0.78,
          "communication": 0.89
        },
        "constraint": "Use the admitted member to eliminate the residual A3-A4 action conflict",
        "state": "unresolved"
      }
    ],
    "coherence": 0.5,
    "conflictCount": 1,
    "resources": [
      {
        "slot": "RB-1",
        "item": "RI-3",
        "agent": "A3",
        "state": "scheduled"
      },
      {
        "slot": "RB-2",
        "item": "RI-3",
        "agent": "A4",
        "state": "scheduled"
      },
      {
        "slot": "RB-3",
        "item": "RI-3",
        "agent": "A6",
        "state": "scheduled"
      }
    ],
    "timescale": "fast",
    "slowEpoch": "k = 5 \u00b7 80\u2013100 s",
    "fastSlot": "t = 801 \u00b7 <100 ms",
    "reasoningRound": "r = 0",
    "operations": [
      {
        "name": "Retain and retry",
        "members": "A1, A2, A3, A4",
        "task": "maintained",
        "coherence": 0.5,
        "conflicts": 1,
        "status": "rejected",
        "reason": "Repeated RI-2 failure remains"
      },
      {
        "name": "Admit A5",
        "members": "A1, A2, A3, A4, A5",
        "task": "maintained",
        "coherence": 0.5,
        "conflicts": 1,
        "status": "rejected",
        "reason": "A5 is not dependency-relevant to unresolved RI-2"
      },
      {
        "name": "Admit A6",
        "members": "A1, A2, A3, A4, A6",
        "task": "maintained",
        "coherence": 1.0,
        "conflicts": 0,
        "status": "selected",
        "reason": "A6 is communication-feasible and dependency-relevant to RI-2"
      }
    ],
    "newMembers": [
      "A6"
    ]
  },
  {
    "step": 15,
    "stage": "Expanded Active ADP",
    "title": "New-member admission restores coherent operation",
    "description": "The expanded membership passes alignment validation: population coherence returns to one and the residual A3-A4 action conflict is eliminated without removing either member.",
    "agents": [
      {
        "id": "A1",
        "kind": "Shuttle",
        "x": 145,
        "y": 270,
        "intent": "serve west platform"
      },
      {
        "id": "A2",
        "kind": "Robot",
        "x": 350,
        "y": 445,
        "intent": "cross service lane"
      },
      {
        "id": "A3",
        "kind": "Shuttle",
        "x": 565,
        "y": 270,
        "intent": "serve east platform"
      },
      {
        "id": "A4",
        "kind": "Robot",
        "x": 350,
        "y": 95,
        "intent": "cross service lane"
      },
      {
        "id": "A5",
        "kind": "UAV",
        "x": 105,
        "y": 105,
        "intent": "observe mobility zone"
      },
      {
        "id": "A6",
        "kind": "Backup robot",
        "x": 615,
        "y": 425,
        "intent": "stand by for service replacement"
      }
    ],
    "relations": [
      {
        "source": "A1",
        "target": "A2",
        "spatial": 0.86,
        "temporal": 0.92,
        "communication": 0.88
      },
      {
        "source": "A2",
        "target": "A3",
        "spatial": 0.79,
        "temporal": 0.85,
        "communication": 0.91
      },
      {
        "source": "A3",
        "target": "A4",
        "spatial": 0.83,
        "temporal": 0.9,
        "communication": 0.86
      },
      {
        "source": "A4",
        "target": "A1",
        "spatial": 0.76,
        "temporal": 0.81,
        "communication": 0.84
      },
      {
        "source": "A1",
        "target": "A3",
        "spatial": 0.48,
        "temporal": 0.72,
        "communication": 0.78
      },
      {
        "source": "A2",
        "target": "A4",
        "spatial": 0.45,
        "temporal": 0.68,
        "communication": 0.8
      },
      {
        "source": "A1",
        "target": "A5",
        "spatial": 0.22,
        "temporal": 0.31,
        "communication": 0.74
      },
      {
        "source": "A3",
        "target": "A6",
        "spatial": 0.72,
        "temporal": 0.78,
        "communication": 0.89
      }
    ],
    "visibleRelations": "ehc",
    "conflicts": [],
    "candidate": [
      "A1",
      "A2",
      "A3",
      "A4",
      "A6"
    ],
    "active": true,
    "items": [
      {
        "id": "RI-1",
        "agents": [
          "A1",
          "A2"
        ],
        "condition": {
          "spatial": 0.86,
          "temporal": 0.92,
          "communication": 0.88
        },
        "constraint": "Eliminate the corresponding pre-action conflict",
        "state": "resolved"
      },
      {
        "id": "RI-3",
        "agents": [
          "A3",
          "A4",
          "A6"
        ],
        "condition": {
          "spatial": 0.72,
          "temporal": 0.78,
          "communication": 0.89
        },
        "constraint": "Use the admitted member to eliminate the residual A3-A4 action conflict",
        "state": "resolved"
      }
    ],
    "coherence": 1.0,
    "conflictCount": 0,
    "resources": [
      {
        "slot": "RB-1",
        "item": "RI-3",
        "agent": "A3",
        "state": "completed"
      },
      {
        "slot": "RB-2",
        "item": "RI-3",
        "agent": "A4",
        "state": "completed"
      },
      {
        "slot": "RB-3",
        "item": "RI-3",
        "agent": "A6",
        "state": "completed"
      }
    ],
    "timescale": "fast",
    "slowEpoch": "k = 5 \u00b7 80\u2013100 s",
    "fastSlot": "t = 801 \u00b7 <100 ms",
    "reasoningRound": "r = 1",
    "operations": [
      {
        "name": "Retain and retry",
        "members": "A1, A2, A3, A4",
        "task": "maintained",
        "coherence": 0.5,
        "conflicts": 1,
        "status": "rejected",
        "reason": "Repeated RI-2 failure remains"
      },
      {
        "name": "Admit A5",
        "members": "A1, A2, A3, A4, A5",
        "task": "maintained",
        "coherence": 0.5,
        "conflicts": 1,
        "status": "rejected",
        "reason": "A5 is not dependency-relevant to unresolved RI-2"
      },
      {
        "name": "Admit A6",
        "members": "A1, A2, A3, A4, A6",
        "task": "maintained",
        "coherence": 1.0,
        "conflicts": 0,
        "status": "selected",
        "reason": "A6 is communication-feasible and dependency-relevant to RI-2"
      }
    ],
    "newMembers": [
      "A6"
    ]
  }
];

