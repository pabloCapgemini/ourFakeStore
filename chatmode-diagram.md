# Chatmode Workflow Diagram

Open this file in VS Code's markdown preview (Cmd+Shift+V) to see the rendered diagram.

```mermaid
graph TD
    User[👤 User] --> AP[🎯 Agile Planner]
    
    %% Feature Planning Flow
    AP -->|"Vague requirements?"| B[🧠 Brainstormer]
    B -->|Creates| BF[📄 brainstorm.md]
    BF -->|Read by| AP
    
    AP -->|"Need architecture guidance?"| CA[🏗️ Code Architect]
    CA -->|Creates| AG[📄 architect-guidance.md]
    AG -->|Read by| AP
    
    AP -->|Creates| PF[📄 plan.md]
    AP -->|Creates| SF[📄 story-name.md files]
    
    %% Implementation Flow
    SF -->|Read by| EP[⚡ Extreme Programmer]
    AG -->|Read by| EP
    
    EP -->|"During Refactor phase"| CC[🧹 Clean Coder]
    CC -->|Creates| RF[📄 refactoring-name.md]
    RF -->|Read by| EP
    
    EP -->|Updates status in| SF
    EP -->|"After several tests"| CC
    
    %% Architecture Review Loop
    PF -->|Review request| CA
    SF -->|Review request| CA
    CA -->|Updates| AG
    CA -->|May create story-specific| SAG[📄 story-architect-guidance.md]
    SAG -->|Read by| EP
    
    %% Styling
    classDef agentStyle fill:#e1f5fe,stroke:#01579b,stroke-width:2px
    classDef fileStyle fill:#f3e5f5,stroke:#4a148c,stroke-width:2px
    classDef userStyle fill:#e8f5e8,stroke:#1b5e20,stroke-width:2px
    
    class AP,B,CA,EP,CC agentStyle
    class BF,AG,SAG,PF,SF,RF fileStyle
    class User userStyle
```

## How to View This Diagram:

1. **In VS Code**: Press `Cmd+Shift+V` while viewing this markdown file
2. **The diagram should render automatically** in the preview pane

## Workflow Description:

- **User** initiates feature requests
- **Agile Planner** orchestrates the entire workflow
- **Brainstormer** gathers detailed requirements when needed
- **Code Architect** provides structural guidance
- **Extreme Programmer** implements using TDD cycles
- **Clean Coder** suggests improvements during refactoring

Each agent creates specific files that other agents consume, creating a cohesive workflow that supports test-driven development and incremental feature delivery.