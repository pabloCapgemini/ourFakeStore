# Swimlane Ownership Workflow (Platform → Bridge → DevX)

This diagram represents the workflow as **swimlanes by ownership** (roles/systems),
showing clear handoffs from automation → product/architecture planning → developer execution → CI/CD.

---

## Mermaid Diagram (Swimlane / Ownership Model)

```mermaid
flowchart LR

subgraph L1["🤖 Automated Systems"]
direction TB
    MH["<b>AI Market Hub</b><br/>📦 Automated Offer Deck"]
    KB["<b>APEX KB</b><br/>🗄️ Auto-picks KB articles"]
end

subgraph L2["👤 PM / SME (Product Ownership)"]
direction TB
    Story["<b>User Story Creation</b><br/>🛠️ JIRA<br/>🔄 Iterate on epic content"]
end

subgraph L3["👤 Architect / PM (Bridge & Planning)"]
direction TB
    Epic["<b>Bulk Epic Creation</b><br/>🛠️ APEX KB<br/>📄 epic-lld.md + plan.md"]
    Upload["<b>Upload to JIRA</b><br/>🛠️ JIRA API<br/>📄 Attach .md to subtasks"]
end

subgraph L4["👤 Architect / Lead Dev (Architecture & Repo Planning)"]
direction TB
    SingleSpec["<b>Single-Repo Specs</b><br/>🛠️ apex-plan-feature-from-lld<br/>🔄 Refine per repo<br/>📄 repo-specific .md"]
    MultiRepo["<b>Multi-Repo Planning</b><br/>🛠️ apex-playbooks + LLM<br/>🔄 Identify repos<br/>📄 Updated epic-lld.md"]
    LLD["<b>LLD / Tech Spec</b><br/>🛠️ APEX KB + Prompts<br/>🔄 Refine architecture<br/>📄 epic-lld.md"]
end

subgraph L5["👤 Developer (Local DevX)"]
direction TB
    Pull["<b>Pull Specs & Setup</b><br/>🛠️ APEX Plugin / CLI<br/>📄 Pull subtasks + specs"]
    CodeGen["<b>Code Generation</b><br/>🛠️ Copilot in VS Code<br/>🔄 Gen + Review code<br/>📄 Source + Tests"]
    Review["<b>Code Review</b><br/>🛠️ apex-qlens-code-review<br/>🔄 Address feedback"]
    UnitTest["<b>Unit Test Execution</b><br/>🛠️ IDE Test Runners<br/>📊 Local validation"]
end

subgraph L6["🤖 CI/CD Automation"]
direction TB
    CICD["<b>CI/CD Pipeline</b><br/>🛠️ Jenkins<br/>🚀 Full test suite"]
end

MH --> KB --> Epic --> Story
Story -. "drives scope" .-> LLD

Epic --> Upload
Upload --> SingleSpec --> MultiRepo --> LLD
Upload --> Pull

Pull --> CodeGen --> Review --> UnitTest --> CICD
```
