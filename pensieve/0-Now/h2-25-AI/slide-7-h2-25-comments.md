# Slide 7 — Successful Adoption of AI in Software Engineering Requires: Review Comments

---

## What's still accurate
- The three pillars remain the right framing — nothing here is wrong
- "Disciplined adoption of a well-defined AI-Development Model" has only grown in importance
- The IDP & test automation pillar is now table stakes, which is exactly what this slide predicted

## Cell-by-cell assessment

### "Information Architecture & Context Engineering"
- **Status: Accurate — significantly under-elaborated**
- This pillar was forward-looking when written; it's now the most discussed capability gap in H2 2025.
- Context Engineering has emerged as its own discipline: structuring information so it is reliably accessible and usable by agents. This includes: knowledge bases, decision logs, ADRs, codebase conventions, domain glossaries — all authored with agent readability as a first-class concern.
- The body text currently repeats the backlog pressure point from slide 6, which feels like a copy-paste error. It should be replaced with actual content about *what* Information Architecture & Context Engineering means in practice.
- **Proposed replacement body text**: *"How information is structured, maintained, and made accessible to AI agents is as important as the agents themselves. Teams must invest in making their codebases, decisions, domain models, and processes explicitly readable — not just by humans, but by agents starting from zero context."*
- Reference: [Your Codebase Is Not Agent-Maintainable](https://agentdrivendevelopment.com/your-codebase-is-not-agent-maintainable/)

### "Internal Developer Platform & Test Automation"
- **Status: Accurate — update from aspirational to mandatory**
- The original says tooling "must be mature" — by H2 2025 this is no longer a recommendation, it's a hard prerequisite. Teams without it are blocked from safely adopting agentic workflows at any meaningful scale.
- Add: CI/CD pipelines, automated test suites, observability tooling, and security scanning must all run on every agent-generated change — not just on human-authored code. The pipeline is the quality gate.
- **Proposed update**: Add *"The Internal Developer Platform is the safety net that makes agentic delegation safe. Without it, there is no reliable way to verify what agents have produced."*

### "Disciplined Adoption of a Well-defined AI-Development Model"
- **Status: Accurate — now has more concrete shape**
- When written, this was a principle. By H2 2025 there are emerging models teams can actually adopt — e.g. Agent-Driven Development (ADD), TDD-first agentic workflows, structured prompt-review-verify cycles.
- The key word is *consistent* — ad hoc agent use produces ad hoc results. Teams that establish a repeatable model with defined checkpoints, human review triggers, and escalation paths consistently outperform those that don't.
- Also links back to the externalization problem: a well-defined model gives engineers who struggle with context articulation a scaffold — the model tells them *what* context to provide and *when*.
- **Proposed addition**: Name the model components: objective definition → context preparation → agent execution → human verification → retrospective. Keep it lightweight but make it concrete.

---

## Two additional requirements emerging strongly in H2 2025

### Plain text / Markdown as the collaboration infrastructure
- Successful adoption increasingly depends on **where and how information lives**. Teams that have moved requirements, context, decisions, and plans to local Markdown files in the repo are seeing dramatically better agent collaboration than those maintaining MCP-heavy integrations with Jira, Confluence, or similar tools.
- Markdown is the sweet spot: human-readable, agent-manipulable, git-versioned, requires no connector layer. It turns the repo into the single source of truth for everything an agent needs to act.
- The barrier is cultural — muscle memory around existing planning tools and resistance to git/terminal/IDE-with-agent workflows for non-developers. This is now an organisational change management problem as much as a technical one.
- **Proposed addition to Information Architecture pillar**: *"The medium matters as much as the structure. Local, plain text, Markdown-based artefacts living in version control are the most agent-accessible form of context. Teams that shift planning and specification workflows into the repo unlock the full potential of the Information Architecture pillar."*

### Agent configuration standards — the new deployment pipeline problem
- As organisations scale AI adoption across large teams, a new operational concern has emerged: **how do you define, version, deploy, and maintain consistent AI agent configurations at scale?**
- This includes: custom skills, sub-agent definitions, custom commands, context injection rules, tool permissions, and agent personas — across whichever agents the team uses (GitHub Copilot, Claude Code, Devin, Codex, etc.).
- Teams that have tackled this treat agent configuration the same way they treat coding standards, linting, test frameworks, and deployment pipelines — versioned, reviewed, and deployed as part of the IDP.
- Without standards, agent behaviour is inconsistent across engineers, best practices don't propagate, and configuration becomes a source of entropy rather than leverage.
- **Proposed addition**: Either as a fourth pillar — *"Agent Configuration Standards & Governance"* — or woven into the IDP pillar as: *"The IDP must now include standards for AI agent configuration — skills, sub-agents, commands, and context — deployed and maintained with the same rigour as build tools, test frameworks, and deployment pipelines."*

---

## Missing fourth pillar — worth discussing

A case can be made for adding a fourth column:

### "Engineering Discipline & Competency Development"
- H2 2025 has made clear that tooling, platform, and process are necessary but not sufficient. The human capability side — specifically the externalization competency and deep SE fundamentals — is equally a prerequisite.
- Without investing in this pillar, the other three deliver diminishing returns: good context engineering requires engineers who can articulate context; good IDP adoption requires engineers who understand what the platform is protecting against; good AI development model adoption requires engineers who can evaluate what agents produce.
- **Decision needed**: Add as a fourth pillar, or weave into the existing three?

---

## Survey question (genuinely useful)

- Which of the following does your team currently have in place? *(Select all that apply: Mature CI/CD pipeline / Comprehensive automated test suite / Documented architecture decisions (ADRs) / A defined process for working with AI agents / None of the above)*
