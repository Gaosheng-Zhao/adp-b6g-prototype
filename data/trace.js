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
    "discoveredCandidate": [],
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
    "discoveredCandidate": [],
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
    "discoveredCandidate": [],
    "newMembers": []
  },
  {
    "step": 3,
    "stage": "Coordination demand",
    "title": "Recurring pre-action conflicts emerge",
    "description": "Repeated observations over the epoch reveal a connected pattern of pre-actions that cannot be jointly executed across the intersection.",
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
        "A2",
        "A3"
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
    "conflictCount": 3,
    "resources": [],
    "timescale": "slow",
    "slowEpoch": "k = 2 \u00b7 20\u201340 s",
    "fastSlot": "t = 201 \u2026 400",
    "reasoningRound": "\u2014",
    "operations": [],
    "discoveredCandidate": [],
    "newMembers": []
  },
  {
    "step": 4,
    "stage": "Candidate ADP",
    "title": "A candidate population is discovered",
    "description": "Algorithm 1 selects the strongest recurring-conflict seed and expands through EHC-connected agents with accumulated coordination demand.",
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
        "A2",
        "A3"
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
    "conflictCount": 3,
    "resources": [],
    "timescale": "slow",
    "slowEpoch": "k = 3 \u00b7 40\u201360 s",
    "fastSlot": "epoch boundary",
    "reasoningRound": "\u2014",
    "operations": [],
    "discoveredCandidate": [],
    "newMembers": []
  },
  {
    "step": 5,
    "stage": "Reasoning items",
    "title": "Cross-agent constraints instantiate population reasoning items",
    "description": "Each item carries a task-relevant condition, decision constraint, and affected scope that may span multiple Candidate ADP members.",
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
        "A2",
        "A3"
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
          "A2",
          "A3"
        ],
        "condition": {
          "spatial": 0.825,
          "temporal": 0.885,
          "communication": 0.895
        },
        "constraint": "Establish a compatible traversal order across the shared intersection",
        "state": "unresolved"
      },
      {
        "id": "RI-2",
        "agents": [
          "A2",
          "A3",
          "A4"
        ],
        "condition": {
          "spatial": 0.81,
          "temporal": 0.875,
          "communication": 0.885
        },
        "constraint": "Coordinate the intersecting service and mobility actions",
        "state": "unresolved"
      }
    ],
    "coherence": 0.0,
    "conflictCount": 3,
    "resources": [],
    "timescale": "fast",
    "slowEpoch": "k = 3 \u00b7 40\u201360 s",
    "fastSlot": "t = 401 \u00b7 <100 ms",
    "reasoningRound": "r = 0",
    "operations": [],
    "discoveredCandidate": [],
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
        "A2",
        "A3"
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
          "A2",
          "A3"
        ],
        "condition": {
          "spatial": 0.825,
          "temporal": 0.885,
          "communication": 0.895
        },
        "constraint": "Establish a compatible traversal order across the shared intersection",
        "state": "unresolved"
      },
      {
        "id": "RI-2",
        "agents": [
          "A2",
          "A3",
          "A4"
        ],
        "condition": {
          "spatial": 0.81,
          "temporal": 0.875,
          "communication": 0.885
        },
        "constraint": "Coordinate the intersecting service and mobility actions",
        "state": "unresolved"
      }
    ],
    "coherence": 0.0,
    "conflictCount": 3,
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
        "item": "RI-1",
        "agent": "A3",
        "state": "scheduled"
      },
      {
        "slot": "RB-4",
        "item": "RI-2",
        "agent": "A2+A3+A4",
        "state": "waiting"
      }
    ],
    "timescale": "fast",
    "slowEpoch": "k = 3 \u00b7 40\u201360 s",
    "fastSlot": "t = 401 \u00b7 <100 ms",
    "reasoningRound": "r = 0",
    "operations": [],
    "discoveredCandidate": [],
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
          "A2",
          "A3"
        ],
        "condition": {
          "spatial": 0.825,
          "temporal": 0.885,
          "communication": 0.895
        },
        "constraint": "Establish a compatible traversal order across the shared intersection",
        "state": "resolved"
      },
      {
        "id": "RI-2",
        "agents": [
          "A2",
          "A3",
          "A4"
        ],
        "condition": {
          "spatial": 0.81,
          "temporal": 0.875,
          "communication": 0.885
        },
        "constraint": "Coordinate the intersecting service and mobility actions",
        "state": "unresolved"
      }
    ],
    "coherence": 0.5,
    "conflictCount": 1,
    "resources": [
      {
        "slot": "RB-1",
        "item": "RI-1",
        "agent": "A1+A2+A3",
        "state": "completed"
      },
      {
        "slot": "RB-2",
        "item": "RI-2",
        "agent": "A2",
        "state": "scheduled"
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
    "discoveredCandidate": [],
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
          "A2",
          "A3"
        ],
        "condition": {
          "spatial": 0.825,
          "temporal": 0.885,
          "communication": 0.895
        },
        "constraint": "Establish a compatible traversal order across the shared intersection",
        "state": "resolved"
      },
      {
        "id": "RI-2",
        "agents": [
          "A2",
          "A3",
          "A4"
        ],
        "condition": {
          "spatial": 0.81,
          "temporal": 0.875,
          "communication": 0.885
        },
        "constraint": "Coordinate the intersecting service and mobility actions",
        "state": "resolved"
      }
    ],
    "coherence": 1.0,
    "conflictCount": 0,
    "resources": [
      {
        "slot": "RB-1",
        "item": "RI-1",
        "agent": "A1+A2+A3",
        "state": "completed"
      },
      {
        "slot": "RB-2",
        "item": "RI-2",
        "agent": "A2+A3+A4",
        "state": "completed"
      }
    ],
    "timescale": "fast",
    "slowEpoch": "k = 3 \u00b7 40\u201360 s",
    "fastSlot": "t = 401 \u00b7 <100 ms",
    "reasoningRound": "r = 2",
    "operations": [],
    "discoveredCandidate": [],
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
          "A2",
          "A3"
        ],
        "condition": {
          "spatial": 0.825,
          "temporal": 0.885,
          "communication": 0.895
        },
        "constraint": "Establish a compatible traversal order across the shared intersection",
        "state": "resolved"
      },
      {
        "id": "RI-2",
        "agents": [
          "A2",
          "A3",
          "A4"
        ],
        "condition": {
          "spatial": 0.81,
          "temporal": 0.875,
          "communication": 0.885
        },
        "constraint": "Coordinate the intersecting service and mobility actions",
        "state": "resolved"
      }
    ],
    "coherence": 1.0,
    "conflictCount": 0,
    "resources": [
      {
        "slot": "RB-1",
        "item": "z1* reused",
        "agent": "A1+A2+A3+A4",
        "state": "completed"
      }
    ],
    "timescale": "fast",
    "slowEpoch": "k = 3 \u00b7 40\u201360 s",
    "fastSlot": "t = 402 \u00b7 <100 ms",
    "reasoningRound": "reuse",
    "operations": [],
    "discoveredCandidate": [],
    "newMembers": []
  },
  {
    "step": 10,
    "stage": "Cross-boundary demand",
    "title": "New coordination demand crosses the active ADP boundary",
    "description": "The active P1 remains internally coherent, while recurring A3-A6 pre-action conflicts accumulate across the boundary together with their persistent EHC relation.",
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
        "A6"
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
          "A2",
          "A3"
        ],
        "condition": {
          "spatial": 0.825,
          "temporal": 0.885,
          "communication": 0.895
        },
        "constraint": "Establish a compatible traversal order across the shared intersection",
        "state": "resolved"
      },
      {
        "id": "RI-2",
        "agents": [
          "A2",
          "A3",
          "A4"
        ],
        "condition": {
          "spatial": 0.81,
          "temporal": 0.875,
          "communication": 0.885
        },
        "constraint": "Coordinate the intersecting service and mobility actions",
        "state": "resolved"
      }
    ],
    "coherence": 1.0,
    "conflictCount": 0,
    "resources": [],
    "timescale": "slow",
    "slowEpoch": "k = 4 \u00b7 60\u201380 s",
    "fastSlot": "accumulated slots",
    "reasoningRound": "\u2014",
    "operations": [],
    "discoveredCandidate": [],
    "newMembers": [
      "A6"
    ]
  },
  {
    "step": 11,
    "stage": "Candidate ADP discovery",
    "title": "Algorithm 1 discovers an overlapping Candidate ADP",
    "description": "From the recurring A3-A6 coordination demand, Algorithm 1 discovers U2={A3,A6}, which overlaps active P1 at A3 and introduces external member A6.",
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
        "A6"
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
          "A2",
          "A3"
        ],
        "condition": {
          "spatial": 0.825,
          "temporal": 0.885,
          "communication": 0.895
        },
        "constraint": "Establish a compatible traversal order across the shared intersection",
        "state": "resolved"
      },
      {
        "id": "RI-2",
        "agents": [
          "A2",
          "A3",
          "A4"
        ],
        "condition": {
          "spatial": 0.81,
          "temporal": 0.875,
          "communication": 0.885
        },
        "constraint": "Coordinate the intersecting service and mobility actions",
        "state": "resolved"
      }
    ],
    "coherence": 1.0,
    "conflictCount": 0,
    "resources": [],
    "timescale": "slow",
    "slowEpoch": "k = 4 \u00b7 60\u201380 s",
    "fastSlot": "Algorithm 1",
    "reasoningRound": "\u2014",
    "operations": [],
    "discoveredCandidate": [
      "A3",
      "A6"
    ],
    "newMembers": [
      "A6"
    ]
  },
  {
    "step": 12,
    "stage": "Admission operation",
    "title": "Candidate overlap forms an admission candidate",
    "description": "Because U2 overlaps one active ADP and extends beyond its boundary, the edge unit forms U\u03031=P1\u222aU2 while retaining the original active P1 during validation.",
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
        "A6"
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
          "A2",
          "A3"
        ],
        "condition": {
          "spatial": 0.825,
          "temporal": 0.885,
          "communication": 0.895
        },
        "constraint": "Establish a compatible traversal order across the shared intersection",
        "state": "resolved"
      },
      {
        "id": "RI-2",
        "agents": [
          "A2",
          "A3",
          "A4"
        ],
        "condition": {
          "spatial": 0.81,
          "temporal": 0.875,
          "communication": 0.885
        },
        "constraint": "Coordinate the intersecting service and mobility actions",
        "state": "resolved"
      }
    ],
    "coherence": 1.0,
    "conflictCount": 0,
    "resources": [],
    "timescale": "slow",
    "slowEpoch": "k = 4 \u00b7 60\u201380 s",
    "fastSlot": "set union",
    "reasoningRound": "\u2014",
    "operations": [
      {
        "name": "Active ADP P1[k]",
        "members": "A1, A2, A3, A4",
        "status": "context",
        "reason": "The original population remains active during admission validation"
      },
      {
        "name": "New Candidate U2[k]",
        "members": "A3, A6",
        "status": "candidate",
        "reason": "Algorithm 1 finds overlap {A3} and external member {A6}"
      },
      {
        "name": "Admission candidate U\u03031[k]",
        "members": "A1, A2, A3, A4, A6",
        "status": "selected",
        "reason": "U\u03031[k] = P1[k] \u222a U2[k]; activation still requires Algorithm 2"
      }
    ],
    "discoveredCandidate": [
      "A3",
      "A6"
    ],
    "newMembers": [
      "A6"
    ]
  },
  {
    "step": 13,
    "stage": "Expanded Candidate ADP",
    "title": "The union enters fast-timescale validation",
    "description": "U\u03031 contains P1 and the external member A6 but is not yet active; its unresolved cross-boundary reasoning item RI-3 must be aligned first.",
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
        "A6"
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
          "A2",
          "A3"
        ],
        "condition": {
          "spatial": 0.825,
          "temporal": 0.885,
          "communication": 0.895
        },
        "constraint": "Establish a compatible traversal order across the shared intersection",
        "state": "resolved"
      },
      {
        "id": "RI-2",
        "agents": [
          "A2",
          "A3",
          "A4"
        ],
        "condition": {
          "spatial": 0.81,
          "temporal": 0.875,
          "communication": 0.885
        },
        "constraint": "Coordinate the intersecting service and mobility actions",
        "state": "resolved"
      },
      {
        "id": "RI-3",
        "agents": [
          "A2",
          "A3",
          "A4",
          "A6"
        ],
        "condition": {
          "spatial": 0.78,
          "temporal": 0.84,
          "communication": 0.89
        },
        "constraint": "Align the new member with the ADP's task-relevant decision basis before activation",
        "state": "unresolved"
      }
    ],
    "coherence": 0.67,
    "conflictCount": 1,
    "resources": [],
    "timescale": "slow",
    "slowEpoch": "k = 5 \u00b7 80\u2013100 s",
    "fastSlot": "epoch boundary",
    "reasoningRound": "\u2014",
    "operations": [
      {
        "name": "Active ADP P1[k]",
        "members": "A1, A2, A3, A4",
        "status": "context",
        "reason": "The original population remains active during admission validation"
      },
      {
        "name": "New Candidate U2[k]",
        "members": "A3, A6",
        "status": "candidate",
        "reason": "Algorithm 1 finds overlap {A3} and external member {A6}"
      },
      {
        "name": "Admission candidate U\u03031[k]",
        "members": "A1, A2, A3, A4, A6",
        "status": "selected",
        "reason": "U\u03031[k] = P1[k] \u222a U2[k]; activation still requires Algorithm 2"
      }
    ],
    "discoveredCandidate": [],
    "newMembers": [
      "A6"
    ]
  },
  {
    "step": 14,
    "stage": "Expansion validation",
    "title": "Algorithm 2 aligns the expanded Candidate ADP",
    "description": "The BS schedules the multi-member affected scope of RI-3 and tests whether U\u03031 can reach full reasoning coherence with no residual action conflict.",
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
        "A6"
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
          "A2",
          "A3"
        ],
        "condition": {
          "spatial": 0.825,
          "temporal": 0.885,
          "communication": 0.895
        },
        "constraint": "Establish a compatible traversal order across the shared intersection",
        "state": "resolved"
      },
      {
        "id": "RI-2",
        "agents": [
          "A2",
          "A3",
          "A4"
        ],
        "condition": {
          "spatial": 0.81,
          "temporal": 0.875,
          "communication": 0.885
        },
        "constraint": "Coordinate the intersecting service and mobility actions",
        "state": "resolved"
      },
      {
        "id": "RI-3",
        "agents": [
          "A2",
          "A3",
          "A4",
          "A6"
        ],
        "condition": {
          "spatial": 0.78,
          "temporal": 0.84,
          "communication": 0.89
        },
        "constraint": "Align the new member with the ADP's task-relevant decision basis before activation",
        "state": "unresolved"
      }
    ],
    "coherence": 0.67,
    "conflictCount": 1,
    "resources": [
      {
        "slot": "RB-1",
        "item": "RI-3",
        "agent": "A2",
        "state": "scheduled"
      },
      {
        "slot": "RB-2",
        "item": "RI-3",
        "agent": "A3",
        "state": "scheduled"
      },
      {
        "slot": "RB-3",
        "item": "RI-3",
        "agent": "A4",
        "state": "scheduled"
      },
      {
        "slot": "RB-4",
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
        "name": "Active ADP P1[k]",
        "members": "A1, A2, A3, A4",
        "status": "context",
        "reason": "The original population remains active during admission validation"
      },
      {
        "name": "New Candidate U2[k]",
        "members": "A3, A6",
        "status": "candidate",
        "reason": "Algorithm 1 finds overlap {A3} and external member {A6}"
      },
      {
        "name": "Admission candidate U\u03031[k]",
        "members": "A1, A2, A3, A4, A6",
        "status": "selected",
        "reason": "U\u03031[k] = P1[k] \u222a U2[k]; activation still requires Algorithm 2"
      }
    ],
    "discoveredCandidate": [],
    "newMembers": [
      "A6"
    ]
  },
  {
    "step": 15,
    "stage": "Expanded Active ADP",
    "title": "Successful validation activates the expanded ADP",
    "description": "Algorithm 2 reaches \u03a6=1 and C=0, so U\u03031 is activated as the new P1; otherwise, the original four-member P1 would have been retained.",
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
          "A2",
          "A3"
        ],
        "condition": {
          "spatial": 0.825,
          "temporal": 0.885,
          "communication": 0.895
        },
        "constraint": "Establish a compatible traversal order across the shared intersection",
        "state": "resolved"
      },
      {
        "id": "RI-2",
        "agents": [
          "A2",
          "A3",
          "A4"
        ],
        "condition": {
          "spatial": 0.81,
          "temporal": 0.875,
          "communication": 0.885
        },
        "constraint": "Coordinate the intersecting service and mobility actions",
        "state": "resolved"
      },
      {
        "id": "RI-3",
        "agents": [
          "A2",
          "A3",
          "A4",
          "A6"
        ],
        "condition": {
          "spatial": 0.78,
          "temporal": 0.84,
          "communication": 0.89
        },
        "constraint": "Align the new member with the ADP's task-relevant decision basis before activation",
        "state": "resolved"
      }
    ],
    "coherence": 1.0,
    "conflictCount": 0,
    "resources": [
      {
        "slot": "RB-1",
        "item": "RI-3",
        "agent": "A2+A3",
        "state": "completed"
      },
      {
        "slot": "RB-2",
        "item": "RI-3",
        "agent": "A4+A6",
        "state": "completed"
      }
    ],
    "timescale": "fast",
    "slowEpoch": "k = 5 \u00b7 80\u2013100 s",
    "fastSlot": "t = 801 \u00b7 <100 ms",
    "reasoningRound": "r = 1",
    "operations": [
      {
        "name": "Active ADP P1[k]",
        "members": "A1, A2, A3, A4",
        "status": "context",
        "reason": "The original population remains active during admission validation"
      },
      {
        "name": "New Candidate U2[k]",
        "members": "A3, A6",
        "status": "candidate",
        "reason": "Algorithm 1 finds overlap {A3} and external member {A6}"
      },
      {
        "name": "Admission candidate U\u03031[k]",
        "members": "A1, A2, A3, A4, A6",
        "status": "selected",
        "reason": "U\u03031[k] = P1[k] \u222a U2[k]; activation still requires Algorithm 2"
      }
    ],
    "discoveredCandidate": [],
    "newMembers": [
      "A6"
    ]
  }
];

