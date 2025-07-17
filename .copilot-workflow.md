# Development Workflow Preferences

## Test-Driven Development or Test-First Development
- Write failing test first
- Make smallest possible change to make test pass
- Run tests after each change
- Refactor only after tests are green

## Refactoring Workflow
- Keep code in a working state - it should never be broken for more than a few seconds
- Make the smallest possible change that keeps both compiler and tests passing.
    - This means run the tests after each of these tiny changes.
- Follow Kent Beck's advice: "for each desired change, make the change easy (warning: this may be hard), then make the easy change"
- Add new alongside old.  When changing interfaces or behavior, add the new implementation alongside the existing one, then migrate callers incrementally before removing the old implementation.
- Use a series of tiny, safe steps rather than introduce large blocks of code at once
- Use IDE refactoring tools when available to ensure safety

## Testing Conventions
- One assertion concept per test
- Use descriptive test names that explain the behavior being tested
- Follow the Given/When/Then pattern in test structure
- Keep tests focused and minimal
- Refactor tests to improve expressiveness and remove duplication

## Code Style
- Follow `TypeScript` standard naming conventions
- Prefer immutability where possible
- Keep functions small and focused
- Use meaningful variable names

## Commit Guidelines
- Commit often with small, logical changes
- Write commits in present tense
- One logical change per commit
- Include test changes in same commit as implementation

## General Workflow
1. Start with test
2. Run tests to see failure
3. Implement minimal solution
4. Run tests to verify, run tests often
5. Refactor if needed
6. Run tests again to confirm refactor

Feel free to modify this file with your specific preferences!
