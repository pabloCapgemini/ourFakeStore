# Slide 4 — What Have We Learned?: Review Comments

> Reference article: [The Engineers Who Can't Use AI Agents Don't Have a Tools Problem](https://agentdrivendevelopment.com/the-engineers-who-cant-use-ai-agents-dont-have-a-tools-problem/) — Norman, Nov 2025

---

## PLANNING column

### "Clear objectives, use-cases, requirements and success criteria are even more critical `[S&C]`"
- **Status: Still accurate — strengthen**
- H2 2025 reinforces this. The teams that failed weren't failing at prompting — they were failing upstream at knowing what they wanted built.
- The article's framing helps here: agents are like capable interns starting from absolute zero on your codebase. If you can't brief a human clearly, you can't brief an agent clearly either.
- **Proposed update**: Add a note that the ability to articulate clear objectives is now a *differentiating competency* — not evenly distributed, and not correlated with seniority.

### "Team composition matters: expertise in software engineering is essential `[S&C]`"
- **Status: Still accurate — add nuance**
- What H2 2025 added: it's not just *having* SE expertise that matters, it's whether team members can *externalise* that expertise into instructions an agent can act on.
- Two types of engineers emerged: those who can articulate context, and those who can't. This cuts across experience levels.
- **Proposed addition**: Highlight the "externalization problem" — engineers who carry knowledge in their heads as tacit intuition (built through years of osmosis) struggle to direct agents effectively. This is a skill that atrophied, not an innate trait.

### "Discussions about requirements and the solution must be accessible to AI `[CE]`"
- **Status: Still accurate — add practical examples**
- By H2 2025, teams have developed concrete patterns: structured feature specs, context-rich prompt templates, decision logs, ADRs written with agent readability in mind.
- **Proposed update**: Shift from observation to guidance — name the emerging practices.

---

## DESIGN column

### "Detailed software architecture, design and specification is more important than ever before `[CE]`"
- **Status: Still accurate — strongly validated**
- No change needed to the core claim. If anything, increase emphasis: the agent-to-agent workflow patterns emerging in H2 2025 make clean architectural boundaries even more critical. Complexity compounds rapidly across agent boundaries without them.

### "Design of the development process, prompts, AI agent & tool configuration is highly influential `[CE]`"
- **Status: Still accurate — expand scope**
- In H2 2025 this expanded beyond individual prompt design to include: agent orchestration design, handoff protocols between agents, and context window management as a design concern.

### "Domain Driven Design is a practical & useful approach to designing with and for AI `[CE]`"
- **Status: Still accurate — increasingly validated**
- DDD's emphasis on ubiquitous language and bounded contexts maps well to agent-consumable design. Teams using DDD vocabulary in their prompts report better agent outputs.

---

## AGILE column

### "Teams change their ways of working as they accelerate when using AI tools `[WoW]`"
- **Status: Still accurate — add direction**
- The observation stands but feels passive. By H2 2025 we have a clearer picture of *how* they change: less ceremony, smaller teams, faster decision loops, more focus on context preparation and less on task execution.

### "As proficiency grows task size increases, reduced decomposition into granular tasks `[WoW]`"
- **Status: Still accurate — add caveat**
- True for experienced practitioners. But there is a failure mode: teams that increase task size before they have sufficient engineering discipline to evaluate the output. Task size should grow with *verification capability*, not just confidence.

### "User Stories are the wrong abstraction for coding with agents (insufficient context) `[WoW]`"
- **Status: Still accurate — NEEDS UPDATE to add what's replacing them**
- The original identifies the problem. H2 2025 gives us emerging alternatives:
  - Context-rich feature specs that include: architectural constraints, relevant domain models, prior decisions, acceptance criteria written for automated verification
  - BDD-style scenarios authored with agent consumption in mind
  - "Agent briefs" — a new lightweight format some teams are experimenting with
- **Proposed update**: Add a second row or callout: *"Emerging replacement: structured context specs that include domain, constraints, decisions and verifiable outcomes"*

---

## DEVELOPMENT column

### "Vibe coding only works for experts that work alone, everything else needs process `[S&C]`"
- **Status: Still accurate — strengthen the warning**
- The risk has grown. Tools like Claude Code and Codex lowered the barrier in H2 2025, making vibe coding more accessible — which has also made its failure modes more visible and costly in team settings.
- The "works for experts" qualifier is critical: what makes an expert effective here is precisely the ability to evaluate AI output against deep system knowledge. Without that, vibe coding produces plausible-looking but subtly wrong code at speed.
- **Proposed update**: Add: *"AI tooling has become more capable, which amplifies both the upside for experts and the downside for those without sufficient context to evaluate what's produced."*

### "Human-in-the-loop reviews of code are a bottleneck that impedes productivity `[S&C]`"
- **Status: Still accurate — but the solution space has evolved significantly**
- The original correctly identifies the bottleneck. H2 2025 has brought a practical shift: **AI-reviewed AI code** is now a real pattern. Teams are using agents to do initial code review passes, with humans governing at a higher level (architecture, risk, correctness of intent).
- Also relevant: *"Stop Reviewing Code. Start Proving It Works"* — the shift from manual review to automated verification (tests, contracts, observability) as the primary quality gate.
- **Proposed update**: Shift from problem statement to emerging solution: *"Human code review at the line level is being replaced by AI-assisted review + comprehensive automated verification. Human oversight moves up the stack — to intent, architecture, and risk."*

### "Comprehensive build and test automation is essential `[AUTO]`"
- **Status: Still accurate — now table stakes, not aspirational**
- No longer a recommendation — it's a prerequisite. Teams without it cannot safely adopt agentic workflows. Codebases that are not agent-maintainable (poor test coverage, implicit conventions, undocumented decisions) dramatically limit what agents can safely do.
- Reference: [Your Codebase Is Not Agent-Maintainable](https://agentdrivendevelopment.com/your-codebase-is-not-agent-maintainable/)

---

## MAINTENANCE column

### "AI agents can and should automate software patching and maintenance `[AUTO]`"
- **Status: Still accurate — increasingly validated**
- No major change. Automated dependency patching and security updates via agents is now well-established in mature teams.

### "Near zero technical debt is a real prospect and will unlock new value streams `[AUTO]`"
- **Status: Still accurate — BUT add important caveat**
- The prospect remains real and is achievable. However H2 2025 has shown the other side: AI-generated code at velocity, *without* strong engineering discipline, can accumulate technical debt *faster* than traditional development.
- The balance tilts quickly in the wrong direction if the engineering foundation is weak.
- **Proposed update**: Keep the optimism but add the condition explicitly: *"Near zero technical debt is a real prospect — for teams with strong engineering discipline. Without it, AI-assisted development can accelerate debt accumulation rather than eliminate it. The determining factor is whether the team has the rigour to evaluate, refactor, and maintain what agents produce."*

### "Comprehensive and robust observability is essential `[AUTO]`"
- **Status: Still accurate — no change needed**
- Validated further by the emergence of multi-agent systems where tracing agent decisions and outputs is essential for debugging and trust.

---

## New cross-cutting observations (H2 2025)

### Local text files & Markdown as the AI collaboration sweet spot `[WoW]` `[CE]`
- A practical finding that cuts across Design, Agile, and Development: **plain text files — especially Markdown — are the optimal medium for human-AI collaboration**. They are readable by humans, fully manipulable by agents, diffable in git, and require no special tooling.
- The failure mode seen in many teams: trying to preserve existing workflows (Jira, Confluence, spreadsheets) via MCP connectors and integrations rather than embracing the format shift. This adds complexity without capturing the benefit.
- The sweet spot is: requirements, specs, decisions, plans, context, and task definitions living as local text files in the repo — versioned, reviewable, and directly accessible to agents without a connector layer.
- Resistance typically comes from muscle memory around existing tools (Jira, etc.) and discomfort with git/terminal/IDE-with-agent workflows. This is a ways-of-working problem, not a tooling problem.
- **Proposed addition to Agile column**: *"Markdown-based local text files are emerging as the de facto standard for agent-readable requirements, specs, and context. Teams that shift to plain text workflows unlock significantly better AI collaboration than those maintaining MCP-heavy integrations with legacy planning tools."*

### Agent configuration as a team standard `[WoW]` `[AUTO]`
- Just as mature teams have standards for deployment pipelines, dev environments, test frameworks, coding standards, linting, and build tools — teams now need **standards for how they configure AI agents**.
- This includes: custom skills, sub-agent definitions, custom commands, agent personas, context injection rules, and tool permissions — across whichever agents the team uses (GitHub Copilot, Claude Code, Devin, Codex, etc.).
- Without team-level standards, every engineer configures agents differently, producing inconsistent outputs and making it impossible to share practices or debug agent behaviour across the team.
- This is an IDP-level concern: agent configuration should be versioned, reviewed, and deployed the same way coding standards or lint configs are.
- **Proposed addition to Development column**: *"Teams need defined standards for AI agent configuration — custom skills, sub-agents, commands, and context — just as they have standards for build tools, test frameworks, and deployment pipelines. Ad hoc agent configuration is the new ad hoc deployment."*

---

## Potential new row to add

### The Externalization Problem *(cuts across Planning, S&C)*
- A new and important finding not captured in the original: **the ability to articulate context clearly is now the primary differentiating competency** — and it is not correlated with seniority or experience.
- Two groups have emerged: engineers who can externalise what they know (and thrive with agents), and those who can't (and struggle regardless of tooling).
- The article by Norman (Nov 2025) frames this precisely: *"The correlation isn't age. It isn't seniority. It isn't intelligence or technical skill. The correlation is whether someone can take the knowledge in their head and put it into words that a collaborator with zero institutional context can actually use."*
- Critically: some engineers can't externalise because they never had to; others can't because they never built the deep understanding in the first place — the old system rewarded shipping, not understanding.
- **The agent is an X-ray machine** — it surfaces gaps that traditional development processes hid for years.
- Remediation: pair programming, book clubs, architecture reviews, dedicated time to read and understand codebases — not prompt engineering workshops.
