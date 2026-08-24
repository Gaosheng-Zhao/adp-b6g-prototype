(function () {
  "use strict";

  const trace = window.ADP_TRACE;
  if (!Array.isArray(trace) || trace.length === 0) {
    document.body.innerHTML = "<p>Prototype trace is missing. Run generate_trace.py.</p>";
    return;
  }

  const svgNS = "http://www.w3.org/2000/svg";
  const els = {
    tracks: [
      document.getElementById("slow-stage-track"),
      document.getElementById("fast-stage-track"),
      document.getElementById("evolution-stage-track")
    ],
    kicker: document.getElementById("stage-kicker"),
    title: document.getElementById("stage-title"),
    description: document.getElementById("stage-description"),
    populationStatus: document.getElementById("population-status"),
    coherence: document.getElementById("coherence-value"),
    conflicts: document.getElementById("conflict-value"),
    itemCount: document.getElementById("item-count"),
    itemList: document.getElementById("item-list"),
    resourceGrid: document.getElementById("resource-grid"),
    background: document.getElementById("scene-background"),
    boundary: document.getElementById("population-boundary"),
    relations: document.getElementById("relation-layer"),
    conflictLayer: document.getElementById("conflict-layer"),
    agents: document.getElementById("agent-layer"),
    previous: document.getElementById("previous-button"),
    play: document.getElementById("play-button"),
    next: document.getElementById("next-button"),
    timeline: document.getElementById("timeline"),
    stepValue: document.getElementById("step-value")
  };
  els.slowLane = document.getElementById("slow-lane");
  els.fastLane = document.getElementById("fast-lane");
  els.slowEpoch = document.getElementById("slow-epoch");
  els.fastSlot = document.getElementById("fast-slot");
  els.reasoningRound = document.getElementById("reasoning-round");
  els.operationTitle = document.getElementById("operation-title");
  els.operationDescription = document.getElementById("operation-description");
  els.operationGrid = document.getElementById("operation-grid");
  els.alignmentStatus = document.getElementById("alignment-status");
  els.feedbackFast = document.getElementById("feedback-fast-evidence");
  els.feedbackSlow = document.getElementById("feedback-slow-operation");
  els.feedbackValidation = document.getElementById("feedback-fast-validation");

  let index = 0;
  let timer = null;

  function svgElement(tag, attrs = {}) {
    const node = document.createElementNS(svgNS, tag);
    Object.entries(attrs).forEach(([name, value]) => node.setAttribute(name, value));
    return node;
  }

  function clear(node) {
    while (node.firstChild) node.removeChild(node.firstChild);
  }

  function setupBackground() {
    clear(els.background);
    const horizontal = svgElement("rect", { x: 0, y: 190, width: 720, height: 160, class: "road" });
    const vertical = svgElement("rect", { x: 270, y: 0, width: 160, height: 540, class: "road" });
    const junction = svgElement("rect", { x: 270, y: 190, width: 160, height: 160, rx: 12, class: "intersection" });
    const westPlatform = svgElement("rect", { x: 62, y: 178, width: 122, height: 42, rx: 7, class: "service-platform" });
    const eastPlatform = svgElement("rect", { x: 536, y: 320, width: 122, height: 42, rx: 7, class: "service-platform" });
    const hLine = svgElement("line", { x1: 0, y1: 270, x2: 720, y2: 270, class: "lane-mark" });
    const vLine = svgElement("line", { x1: 350, y1: 0, x2: 350, y2: 540, class: "lane-mark" });
    const ring = svgElement("circle", { cx: 650, cy: 70, r: 44, class: "bs-ring" });
    const core = svgElement("circle", { cx: 650, cy: 70, r: 10, class: "bs-core" });
    const label = svgElement("text", { x: 650, y: 50, class: "bs-label", "text-anchor": "middle" });
    label.textContent = "BS";
    const zoneLabel = svgElement("text", { x: 20, y: 520, class: "zone-label" });
    zoneLabel.textContent = "Controlled mobility zone · repeated operations";
    [horizontal, vertical, westPlatform, eastPlatform, hLine, vLine, ring, junction, core, label, zoneLabel].forEach(node => els.background.appendChild(node));
  }

  function agentMap(frame) {
    return Object.fromEntries(frame.agents.map(agent => [agent.id, agent]));
  }

  function renderRelations(frame) {
    clear(els.relations);
    if (!frame.visibleRelations) return;
    const agents = agentMap(frame);

    frame.relations.forEach(relation => {
      const source = agents[relation.source];
      const target = agents[relation.target];
      if (!source || !target) return;
      const line = svgElement("line", {
        x1: source.x,
        y1: source.y,
        x2: target.x,
        y2: target.y,
        class: `relation-edge ${frame.visibleRelations}`
      });
      els.relations.appendChild(line);

      if (frame.visibleRelations === "dependencies") {
        const label = svgElement("text", {
          x: (source.x + target.x) / 2,
          y: (source.y + target.y) / 2 - 7,
          class: "relation-label",
          "text-anchor": "middle"
        });
        label.textContent = `S ${relation.spatial.toFixed(2)} · T ${relation.temporal.toFixed(2)} · C ${relation.communication.toFixed(2)}`;
        els.relations.appendChild(label);
      }
    });
  }

  function renderConflicts(frame) {
    clear(els.conflictLayer);
    const agents = agentMap(frame);
    frame.conflicts.forEach(([sourceId, targetId]) => {
      const source = agents[sourceId];
      const target = agents[targetId];
      if (!source || !target) return;
      els.conflictLayer.appendChild(svgElement("line", {
        x1: source.x,
        y1: source.y,
        x2: target.x,
        y2: target.y,
        class: "conflict-edge"
      }));
    });
  }

  function renderBoundary(frame) {
    clear(els.boundary);
    const agents = agentMap(frame);
    const drawBoundary = (memberIds, className) => {
      const points = memberIds.map(id => agents[id]).filter(Boolean);
      if (!points.length) return;
      const minX = Math.min(...points.map(point => point.x)) - 48;
      const maxX = Math.max(...points.map(point => point.x)) + 48;
      const minY = Math.min(...points.map(point => point.y)) - 48;
      const maxY = Math.max(...points.map(point => point.y)) + 48;
      els.boundary.appendChild(svgElement("rect", {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY,
        rx: 70,
        class: `population-boundary ${className}`.trim()
      }));
    };
    drawBoundary(frame.candidate, frame.active ? "active" : "");
    drawBoundary(frame.discoveredCandidate || [], "discovered");
  }

  function renderAgents(frame) {
    clear(els.agents);
    frame.agents.forEach(agent => {
      const group = svgElement("g", { transform: `translate(${agent.x} ${agent.y})` });
      group.appendChild(svgElement("circle", { cx: 0, cy: 0, r: 31, class: "agent-halo" }));
      const isNew = (frame.newMembers || []).includes(agent.id);
      const stateClass = frame.active && frame.candidate.includes(agent.id)
        ? " active"
        : frame.candidate.includes(agent.id) ? " candidate" : "";
      const transitionClass = isNew ? " incoming" : "";
      group.appendChild(svgElement("circle", { cx: 0, cy: 0, r: 22, class: `agent-node${stateClass}${transitionClass}` }));
      const id = svgElement("text", { x: 0, y: 5, class: "agent-label" });
      id.textContent = agent.id;
      const kind = svgElement("text", { x: 0, y: 39, class: "agent-kind" });
      kind.textContent = agent.kind;
      group.appendChild(id);
      group.appendChild(kind);
      if (isNew) {
        const badgeText = frame.step === 10
          ? "EXTERNAL"
          : frame.step === 11 ? "CANDIDATE"
            : frame.step === 12 ? "ADMISSION"
              : frame.step === 13 ? "ADMITTED"
                : frame.step === 14 ? "ALIGNING" : "MEMBER";
        const badgeWidth = badgeText.length * 6.2 + 14;
        group.appendChild(svgElement("rect", {
          x: 25,
          y: -38,
          width: badgeWidth,
          height: 18,
          rx: 9,
          class: "member-badge incoming"
        }));
        const badge = svgElement("text", {
          x: 25 + badgeWidth / 2,
          y: -25,
          class: "member-badge-text incoming",
          "text-anchor": "middle"
        });
        badge.textContent = badgeText;
        group.appendChild(badge);
      }
      els.agents.appendChild(group);
    });
  }

  function renderItems(frame) {
    els.itemCount.textContent = `${frame.items.length} item${frame.items.length === 1 ? "" : "s"}`;
    if (!frame.items.length) {
      els.itemList.innerHTML = '<p class="empty-state">Reasoning items appear when a Candidate ADP contains current pre-action conflicts.</p>';
      return;
    }

    els.itemList.innerHTML = frame.items.map(item => {
      const bars = Object.entries(item.condition).map(([name, value]) => `
        <div>
          <span>${name[0].toUpperCase()}</span>
          <div class="bar-track"><div class="bar-fill" style="width:${Math.round(value * 100)}%"></div></div>
        </div>`).join("");
      return `
        <article class="reasoning-item ${item.state}">
          <div class="item-top">
            <span class="item-id">${item.id}</span>
            <span class="item-state">${item.state}</span>
          </div>
          <div class="item-agents">Affected members: ${item.agents.join(" + ")}</div>
          <div class="dependency-bars">${bars}</div>
        </article>`;
    }).join("");
  }

  function renderResources(frame) {
    if (!frame.resources.length) {
      els.resourceGrid.innerHTML = '<p class="empty-state">Resources are scheduled after reasoning items are instantiated.</p>';
      return;
    }
    els.resourceGrid.innerHTML = frame.resources.map(resource => `
      <div class="resource-row ${resource.state}">
        <span class="rb">${resource.slot}</span>
        <span>${resource.item} · ${resource.agent}</span>
        <span class="resource-state">${resource.state}</span>
      </div>`).join("");
  }

  function currentPopulationStatus(frame) {
    if (frame.step === 10) return "Active ADP · cross-boundary demand";
    if (frame.step === 11) return "Active ADP + New Candidate ADP";
    if (frame.step === 12) return "Active ADP + Admission Candidate";
    if (frame.step === 13 || frame.step === 14) return "Expanded Candidate ADP";
    if (frame.step === 15) return "Expanded Active ADP";
    if (frame.active) return "Active ADP";
    if (frame.candidate.length && frame.items.length) return "Candidate ADP · aligning";
    if (frame.candidate.length) return "Candidate ADP";
    if (frame.visibleRelations === "ehc") return "EHC relation space";
    return "Unorganized agents";
  }

  function renderChain(frame) {
    const order = ["network", "ehc", "candidate", "reasoning", "active"];
    let reached = 0;
    if (frame.step >= 2) reached = 1;
    if (frame.step >= 4) reached = 2;
    if (frame.step >= 5) reached = 3;
    if (frame.active) reached = 4;
    document.querySelectorAll(".chain-node").forEach(node => {
      const position = order.indexOf(node.dataset.chain);
      node.classList.toggle("reached", position <= reached);
      node.classList.toggle("current", position === reached);
    });
  }

  function renderFeedback(frame) {
    const feedbackSteps = [els.feedbackFast, els.feedbackSlow, els.feedbackValidation];
    let reached = -1;
    if (frame.step >= 10) reached = 0;
    if (frame.step >= 12) reached = 1;
    if (frame.step >= 14) reached = 2;
    feedbackSteps.forEach((step, position) => {
      step.classList.toggle("reached", position <= reached);
      step.classList.toggle("current", position === reached);
    });
  }

  function renderOperations(frame) {
    if (!frame.operations.length) {
      els.operationTitle.textContent = frame.step < 10
        ? "No membership change is currently required"
        : "Cross-boundary coordination demand is accumulating";
      els.operationDescription.textContent = frame.step < 10
        ? "Admission evaluation begins when an EHC update reveals a relationship-supported agent around the active ADP."
        : "Algorithm 1 has not yet completed discovery of the cross-boundary Candidate ADP.";
      els.operationGrid.innerHTML = '<div class="operation-empty">The admission set construction appears after a newly discovered Candidate ADP overlaps the active population.</div>';
      return;
    }

    els.operationTitle.textContent = "Admission is formed from Candidate ADP overlap";
    els.operationDescription.textContent = "U2 overlaps the single active P1 through A3 and introduces A6, so the edge unit forms Ũ1 = P1 ∪ U2 and sends the union to Algorithm 2.";
    els.operationGrid.innerHTML = frame.operations.map(operation => `
      <article class="operation-card ${operation.status}">
        <span class="operation-status">${operation.status}</span>
        <h3>${operation.name}</h3>
        <div class="operation-members">Members: ${operation.members}</div>
        ${operation.task ? `<div class="operation-metrics">
          <div><span>Task</span><strong>${operation.task}</strong></div>
          <div><span>Φ</span><strong>${operation.coherence.toFixed(2)}</strong></div>
          <div><span>C</span><strong>${operation.conflicts}</strong></div>
        </div>` : ""}
        <p class="operation-reason">${operation.reason}</p>
      </article>`).join("");
  }

  function renderStageTracks() {
    const groups = [[0, 5], [5, 10], [10, trace.length]];
    els.tracks.forEach((track, groupIndex) => {
      const [start, end] = groups[groupIndex];
      track.innerHTML = trace.slice(start, end).map((frame, localIndex) => {
        const frameIndex = start + localIndex;
        return `
          <button type="button" class="stage-button" data-index="${frameIndex}">
            <span>${String(frameIndex + 1).padStart(2, "0")}</span>${frame.stage}
          </button>`;
      }).join("");
      track.addEventListener("click", event => {
        const button = event.target.closest("button[data-index]");
        if (!button) return;
        stopPlayback();
        setIndex(Number(button.dataset.index));
      });
    });
  }

  function render() {
    const frame = trace[index];
    els.kicker.textContent = frame.stage;
    els.title.textContent = frame.title;
    els.description.textContent = frame.description;
    const populationStatus = currentPopulationStatus(frame);
    els.populationStatus.textContent = populationStatus;
    els.alignmentStatus.textContent = populationStatus;
    els.populationStatus.style.color = frame.active
      ? "var(--green)" : frame.candidate.length ? "var(--amber)" : "var(--blue)";
    els.coherence.textContent = frame.coherence.toFixed(2);
    els.conflicts.textContent = String(frame.conflictCount);
    els.slowEpoch.textContent = frame.slowEpoch;
    els.fastSlot.textContent = frame.fastSlot;
    els.reasoningRound.textContent = frame.reasoningRound;
    els.slowLane.classList.toggle("active", frame.timescale === "slow");
    els.fastLane.classList.toggle("active", frame.timescale === "fast");
    els.timeline.value = String(index);
    els.stepValue.textContent = `${index + 1} / ${trace.length}`;
    els.previous.disabled = index === 0;
    els.next.disabled = index === trace.length - 1;
    document.querySelectorAll(".stage-button").forEach(button => {
      button.classList.toggle("active", Number(button.dataset.index) === index);
    });

    renderBoundary(frame);
    renderRelations(frame);
    renderConflicts(frame);
    renderAgents(frame);
    renderItems(frame);
    renderResources(frame);
    renderChain(frame);
    renderFeedback(frame);
    renderOperations(frame);
  }

  function setIndex(nextIndex) {
    index = Math.max(0, Math.min(trace.length - 1, nextIndex));
    render();
  }

  function stopPlayback() {
    if (timer !== null) window.clearInterval(timer);
    timer = null;
    els.play.textContent = "Play";
  }

  function togglePlayback() {
    if (timer !== null) {
      stopPlayback();
      return;
    }
    if (index === trace.length - 1) setIndex(0);
    els.play.textContent = "Pause";
    timer = window.setInterval(() => {
      if (index >= trace.length - 1) {
        stopPlayback();
      } else {
        setIndex(index + 1);
      }
    }, 1900);
  }

  els.previous.addEventListener("click", () => { stopPlayback(); setIndex(index - 1); });
  els.next.addEventListener("click", () => { stopPlayback(); setIndex(index + 1); });
  els.play.addEventListener("click", togglePlayback);
  els.timeline.addEventListener("input", event => { stopPlayback(); setIndex(Number(event.target.value)); });
  document.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft") { stopPlayback(); setIndex(index - 1); }
    if (event.key === "ArrowRight") { stopPlayback(); setIndex(index + 1); }
    if (event.key === " ") { event.preventDefault(); togglePlayback(); }
  });

  setupBackground();
  renderStageTracks();
  els.timeline.max = String(trace.length - 1);
  render();
})();

