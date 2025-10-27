# Agent and Development Workflow Guidelines

This document outlines the development workflow preferences and agent interaction patterns for the ourFakeStore project.

## Development Workflow Preferences

### Test-Driven Development or Test-First Development
- Write failing test first
- Make smallest possible change to make test pass
- Run tests after each change
- Refactor only after tests are green

### Refactoring Workflow
- Keep code in a working state - it should never be broken for more than a few seconds
- Make the smallest possible change that keeps both compiler and tests passing.
    - This means run the tests after each of these tiny changes.
- Follow Kent Beck's advice: "for each desired change, make the change easy (warning: this may be hard), then make the easy change"
- Add new alongside old. When changing interfaces or behavior, add the new implementation alongside the existing one, then migrate callers incrementally before removing the old implementation.
- Use a series of tiny, safe steps rather than introduce large blocks of code at once
- Use IDE refactoring tools when available to ensure safety

### Testing Conventions
- One assertion concept per test
- Use descriptive test names that explain the behavior being tested
- Follow the Given/When/Then pattern in test structure
- Keep tests focused and minimal
- Refactor tests to improve expressiveness and remove duplication

### Code Style
- Follow `TypeScript` standard naming conventions
- Prefer immutability where possible
- Keep functions small and focused
- Use meaningful variable names

### Commit Guidelines
- Commit often with small, logical changes
- Write commits in present tense
- One logical change per commit
- Include test changes in same commit as implementation

### General Workflow
1. Start with test
2. Run tests to see failure
3. Implement minimal solution
4. Run tests to verify, run tests often
5. Refactor if needed
6. Run tests again to confirm refactor

## Project Agent Modes

This project uses specialized agent modes to support different aspects of development. These agents are configured in `.github/chatmodes/` and work together to maintain code quality and development velocity.

### Available Agent Modes

- **agile-planner**: Manages features across the pensieve planning hierarchy, breaks down work into testable increments
- **extreme-programmer**: Implements TDD workflows with strict Red-Green-Refactor cycles
- **clean-coder**: Provides design feedback and refactoring guidance during development
- **code-architect**: Analyzes codebase structure and guides architectural decisions
- **brainstormer**: Gathers comprehensive feature requirements through structured questioning

### Agent Interaction Patterns

Agents are designed to work together following the project's momentum-preserving workflow:
- All agents respect the "always-working codebase" principle
- Changes are implemented in small, testable increments
- Test-first development is maintained across all agent interactions
- Refactoring is done continuously with tests remaining green

### Technology Stack Context

- **Language**: TypeScript
- **Runtime**: Node.js (Electron application)
- **Testing Framework**: Jest
- **Build Tools**: Webpack
- **End-to-End Testing**: Playwright

### Project Structure Conventions

The project follows these structural patterns that agents should respect:
- Source code in `src/` directory
- Tests in `jest-tests/` directory
- Component organization under `src/components/`
- Domain models in `src/domain/`
- Planning documents in `pensieve/` hierarchy

Feel free to modify this file as the project and agent workflows evolve!