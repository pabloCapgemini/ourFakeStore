# Chatmode Workflow and Interactions

This diagram shows how the different chatmodes work together in the ourFakeStore project, including the files they create and consume.

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
    
    %% File Legend
    subgraph Files["📁 Files Created"]
        BF
        AG
        SAG
        PF
        SF
        RF
    end
    
    %% Agent Legend
    subgraph Agents["🤖 Chatmodes"]
        AP
        B
        CA
        EP
        CC
    end
    
    %% Styling
    classDef agentStyle fill:#e1f5fe,stroke:#01579b,stroke-width:2px
    classDef fileStyle fill:#f3e5f5,stroke:#4a148c,stroke-width:2px
    classDef userStyle fill:#e8f5e8,stroke:#1b5e20,stroke-width:2px
    
    class AP,B,CA,EP,CC agentStyle
    class BF,AG,SAG,PF,SF,RF fileStyle
    class User userStyle
```

## Workflow Description

### 1. **Feature Initiation** 
- User requests a new feature
- **Agile Planner** assesses if requirements are clear

### 2. **Requirements Gathering** (if needed)
- **Agile Planner** → **Brainstormer** for vague requirements
- **Brainstormer** creates `brainstorm.md` with detailed requirements
- **Agile Planner** reads `brainstorm.md` to understand feature scope

### 3. **Architecture Planning**
- **Agile Planner** → **Code Architect** for architectural guidance
- **Code Architect** creates `architect-guidance.md` with structural recommendations
- **Agile Planner** reads guidance to inform planning decisions

### 4. **Feature Planning**
- **Agile Planner** creates:
  - `plan.md` - Master feature plan with story overview
  - `story-name.md` files - Individual story breakdowns with test/task sequences

### 5. **Implementation Cycle**
- **Extreme Programmer** reads `story-name.md` and `architect-guidance.md`
- During Red-Green-Refactor cycles:
  - **Extreme Programmer** → **Clean Coder** during refactor phase
  - **Clean Coder** creates `refactoring-name.md` with improvement suggestions
  - **Extreme Programmer** applies suggestions and updates story status

### 6. **Continuous Review**
- **Code Architect** reviews `plan.md` and story files periodically
- May create story-specific `story-architect-guidance.md` for complex stories
- **Extreme Programmer** incorporates architectural feedback

## Key Integration Points

- **File-based communication**: Agents communicate through structured markdown files
- **Status tracking**: Story files maintain current implementation status
- **Iterative refinement**: Architecture guidance evolves with implementation needs
- **Test-driven focus**: All workflows support the TDD Red-Green-Refactor cycle