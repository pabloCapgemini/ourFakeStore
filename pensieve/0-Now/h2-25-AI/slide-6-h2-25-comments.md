# Slide 6 — Impact on Teams, Process & Competencies: Review Comments

---

## What's still accurate
- All six cells remain valid — no fundamentally wrong claims here
- The three ⚠️ warnings in particular have been strongly validated in H2 2025

## Cell-by-cell assessment

### "Smaller teams configured for faster decision making and iterations"
- **Status: Accurate — add nuance on the lower bound**
- H2 2025 experience shows teams are getting smaller, but there's an emerging question about *how small is too small*. Very small teams (1–2 engineers with heavy agent use) gain speed but lose the diversity of perspective that catches design errors and edge cases.
- The risk: speed without sufficient human challenge in the loop leads to fast delivery of the wrong thing.
- **Proposed addition**: Note the trade-off — smaller teams need stronger individual engineering judgment to compensate for reduced peer challenge.

### "Same people, change of focus: more dialogue, more on design & process, less on toil"
- **Status: Accurate — validate and strengthen**
- Well validated. The shift away from execution toil (writing boilerplate, searching docs, repetitive tasks) is real and broadly experienced.
- What's added by H2 2025: the *dialogue* has shifted in nature — more of it is now about context preparation, reviewing agent outputs, and making architectural decisions that constrain what agents do next. Less about coordinating human task execution.
- **Proposed update**: Refine to clarify that "more dialogue" now means dialogue with *and about* agents — defining what they do, verifying what they produced, and deciding what to delegate next.

### "Increased focus on theory, techniques, and design methods-related competencies"
- **Status: Accurate — strongly validated, worth amplifying**
- Directly supported by slide 4 observations and the Norman article. The engineers thriving with agents are those with strong mental models, not just those with strong tool familiarity.
- The shift: academic and theoretical knowledge that once felt nice-to-have (DDD, clean architecture, testing theory) is now actively competitive. Engineers who invested in fundamentals are seeing disproportionate returns.
- **Proposed update**: Add concrete examples — DDD, TDD, clean architecture, separation of concerns — as the competencies that are appreciating in value.

### ⚠️ "Proficient teams consume the backlog faster which puts pressure on organisations ability to make decisions that feed the backlog"
- **Status: Accurate — this has become more acute, not less**
- The most underappreciated finding in the original. In H2 2025 this has become a real operational problem for teams that have matured their AI usage.
- The bottleneck has shifted: it's no longer engineering capacity, it's *product decision-making capacity*. Organisations built for quarterly planning cycles are feeding backlogs to teams that can now execute on weekly or even daily cycles.
- **Proposed addition**: This is now a strategic/organisational concern, not just a team-level one. Leadership needs to restructure how product decisions and priorities are made — current governance models are the constraint.
- Also links to slide 2 audience comment: this is why Product Owners need to be in the room.

### ⚠️ "AI reasoning is limited to pre-trained scenarios, humans still need to curate and design, specify process"
- **Status: Accurate — nuance required given model improvements**
- The core claim holds: humans must still define *what* is built and *how* processes work. But the specific limitation of "pre-trained scenarios" needs updating — frontier models as of H2 2025 are substantially more capable of reasoning in novel scenarios than this implies.
- The real limitation is not pre-training boundaries but *context and grounding* — agents perform poorly when context is ambiguous, implicit, or missing, not just when scenarios are novel.
- **Proposed update**: Reframe from "limited to pre-trained scenarios" → "dependent on high-quality context and explicit process design. Ambiguity and implicit knowledge are the real constraints, not novelty."

### ⚠️ "Greater understanding of software engineering required to articulate processes for AI to follow"
- **Status: Accurate — this is arguably the most important cell in the slide**
- The most validated and important observation. Directly reinforced by the externalization problem (Norman article) and slide 3's emphasis on SE fundamentals.
- H2 2025 adds: this isn't just "greater" understanding — it's a *qualitatively different* kind of understanding. You need to be able to externalise your mental model explicitly, not just hold it as tacit intuition.
- **Proposed update**: Strengthen — *"Engineering understanding must now be explicit and communicable, not just tacit. The ability to articulate design decisions, constraints, and intent to an agent is the new core engineering competency."*

---

## Additional H2 2025 observations to weave in

### The plain text / Markdown shift as a ways-of-working change
- One of the most practical and underappreciated shifts in H2 2025: teams that moved their planning artefacts, specs, and context to **local Markdown files in the repo** unlocked significantly better AI collaboration than those maintaining integrations with existing tools (Jira, Confluence, etc.).
- This is a direct extension of the "more dialogue, more on design & process" observation — but the medium matters. Dialogue captured in Markdown that lives in git is agent-readable, diffable, reviewable, and versionable. Dialogue captured in Jira tickets is not.
- The resistance is cultural: too much muscle memory around existing planning tools, too much pushback on using git or IDE-with-agent workflows for non-coding tasks. This is the new organisational change management challenge.
- **Proposed addition**: New cell or callout — *"Teams adopting plain text, Markdown-based workflows for requirements, specs, and context unlock the full collaboration potential of AI agents. Preserving legacy tool integrations (Jira, Confluence) via MCP connectors maintains familiarity but misses the sweet spot."*

### Agent configuration standards as an organisational concern
- By H2 2025, organisations deploying AI agents across large teams face a new class of configuration management problem: how do you define, maintain, and deploy consistent agent configurations (custom skills, sub-agents, commands, context rules) at scale?
- This is analogous to how teams manage coding standards, linting, test frameworks, and deployment pipelines — it needs the same level of discipline and team-level standardisation.
- Without it: every engineer configures their agent differently, sharing best practices is ad hoc, and teams can't build on each other's work.
- **Proposed addition to ⚠️ row or as new cell**: *"As teams scale AI adoption, agent configuration — skills, sub-agents, custom commands, tool permissions — requires the same standards and governance as deployment pipelines and coding conventions."*

---

## Survey questions (genuinely useful ones)

- Has the speed of your team's delivery created pressure upstream — e.g. on product decisions, prioritisation, or organisational governance? *(Yes, significantly / Yes, somewhat / Not yet / No)*
- In your team, has the focus shifted from writing code to designing processes, reviewing outputs, and making architectural decisions? *(Yes, significantly / Yes, somewhat / Minimal change / No)*
