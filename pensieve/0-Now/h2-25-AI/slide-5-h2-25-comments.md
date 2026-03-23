# Slide 5 — How Human Role Changes When Adopting AI: Review Comments

---

## What's still accurate
- The 5-column spectrum (AI-assisted → fully autonomous) remains a valid and useful model
- The three team dynamics zones (Human Drives / Equal Partnership / Agent Drives) hold up well
- The core direction of travel — from doing to governing — is validated
- The "requires increasing competency" arrow is more true now than when written

## What's evolved / needs updating

### The spectrum has compressed at the high end
- When this was written (early 2025), columns 4–5 (Task-assignable agents / Fully autonomous) felt aspirational. By H2 2025 they are operational realities for early-adopting teams.
- Tools like Codex, Claude Code, and Devin have moved column 4 into mainstream experimentation and column 5 into early production for specific task types (automated patching, test generation, documentation).
- **Proposed update**: Shift the "current focus" marker from cols 3–5 to cols 4–5 for leading teams, while acknowledging most teams are still maturing through col 3.

### "Requires increasing competency" needs unpacking
- The original slide notes this but doesn't explain *what kind* of competency.
- H2 2025 has made it clearer: the competency required is not more technical skill in the traditional sense. It's:
  1. **Context externalisation** — the ability to articulate objectives, constraints, and domain knowledge clearly enough for an agent to act on
  2. **Output evaluation** — the ability to assess whether what the agent produced is correct, safe, and aligned with intent (without necessarily reading every line)
  3. **Systems thinking** — understanding agent behaviour at the orchestration level, not just the task level
- **Proposed update**: Add a row or callout naming these three competencies explicitly.

### The "equal partnership" zone (col 3) deserves more attention
- This is where most teams land and where the most interesting learning happens. The original treats it as a transition point, but it may be a stable operating mode for many delivery contexts.
- Key dynamic here: the human provides context and judgment, the agent provides execution speed and breadth. When this works well it genuinely outperforms either alone.

### Agent-to-agent workflows are not represented
- The original spectrum is implicitly single-agent. By H2 2025, multi-agent orchestration adds a new dimension: humans are increasingly governing *systems of agents*, not directing individual ones.
- This changes the human role in a qualitatively different way — less about prompting and more about designing agent systems, defining handoff contracts, and setting quality gates.
- **Proposed addition**: Note at the bottom of the slide that the spectrum extends for multi-agent systems, where human role becomes system architect and governor rather than collaborator or director.

### The externalization problem lands here too
- The competency spectrum implicitly assumes that moving right is a function of experience and tooling confidence.
- H2 2025 observation: the real gate is the ability to externalise context (ref: [Norman, Nov 2025](https://agentdrivendevelopment.com/the-engineers-who-cant-use-ai-agents-dont-have-a-tools-problem/)). Engineers who cannot articulate context clearly are functionally stuck at col 1–2 regardless of the tools available to them.
- **Proposed addition**: Add a note that progression along the spectrum is *not* automatic with tool exposure — it requires developing the externalization and evaluation muscles explicitly.

## Suggested structural additions
- Add a row: **"Key competencies required"** per column
  - Col 1–2: Code literacy, ability to evaluate suggestions
  - Col 3: Context articulation, judgment, ability to verify intent
  - Col 4: Objective definition, constraint setting, output governance
  - Col 5: System design, agent orchestration, exception handling, risk governance
