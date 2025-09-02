# Development Plan: Nicer Home Page Feature

## Overview
Transform the current simple product list into a professional e-commerce home page with modern UI components, following TDD principles with small, testable increments.

## Visual Reference Examples
See visual examples in the `assets/` folder for design inspiration:
- **`floatingShoppingCart.png`** - Preferred cart sidebar design pattern
- **`betterHomePageMock.png`** - Overall layout and styling reference
- **`codebase-architecture-visual.md`** - Technical architecture overview

## Incremental Development Stories

### Phase 1: Foundation (React Migration)
**Story 1:** Switch from vanilla DOM to React components by flipping the `USE_REACT_PRODUCTLIST` feature flag to true and updating tests to verify React rendering works.

### Phase 2: Layout Structure
**Story 2:** Create a basic Header component with placeholder logo and title that renders above the product list.

**Story 3:** Transform the current list display into a responsive Bootstrap grid layout using ProductCard components that show title and price.

**Story 4:** Add a Footer component with typical e-commerce links and styling.

### Phase 3: Enhanced Product Display
**Story 5:** Add product images to each ProductCard component, with fallback handling for missing images from the API.

**Story 6:** Add star ratings display to ProductCard components using the rating data from the FakeStore API.

### Phase 4: Filtering & Search
**Story 7:** Create a category filter dropdown component that displays available categories from the product data.

**Story 8:** Implement category filtering functionality that updates the displayed products when a category is selected.

**Story 9:** Add a search input field to the Header component with basic text filtering of product titles.

### Phase 5: Cart Integration (Scaffolded)
**Story 10:** Add a cart icon to the Header with a placeholder badge showing "0" items.

**Story 11:** Create a scaffolded CartSidebar component that slides out when the cart icon is clicked (empty state only).

**Story 12:** Add "Add to Cart" buttons to each ProductCard (non-functional, UI only).

## Technical Requirements

### Testing Strategy
- Each story must include updated Jest component tests
- Playwright E2E tests should continue to pass or be updated accordingly
- Follow TDD approach: write failing test first, then implement

### Design Guidelines
- Use existing Bootstrap CSS framework
- Maintain responsive design principles
- Ensure accessibility standards
- Keep existing error states (loading, empty, error) working

### Architecture Notes
- Leverage existing adapter pattern for testing different states
- Maintain separation between domain models and UI components
- Keep cart functionality scaffolded only (full implementation in future feature)

## Questions for Clarification

1. **Test Strategy:** Should we keep the existing Playwright tests working throughout, or update them as we change the UI structure?

2. **Grid Layout:** For the ProductCard grid, how many columns would you prefer on desktop (3, 4, or responsive based on screen size)?

3. **Category Filter:** Should the category filter show "All Categories" as a default option, or start with the first available category?

4. **Search Scope:** For the search functionality, should it search both title and description, or just title for this iteration?

## Progress Tracking Table

| Phase | Story # | Description | Status | Notes |
|-------|---------|-------------|---------|-------|
| 1 | 1 | Switch from vanilla DOM to React components (flip feature flag) | ⏳ Planned | Foundation for all other stories |
| 2 | 2 | Create basic Header component with logo and title | ⏳ Planned | Layout structure begins |
| 2 | 3 | Transform list to Bootstrap grid with ProductCard components | ⏳ Planned | Core layout transformation |
| 2 | 4 | Add Footer component with e-commerce links | ⏳ Planned | Complete page structure |
| 3 | 5 | Add product images to ProductCard with fallback handling | ⏳ Planned | Visual enhancement begins |
| 3 | 6 | Add star ratings display from API data | ⏳ Planned | Enhanced product information |
| 4 | 7 | Create category filter dropdown component | ⏳ Planned | Filtering functionality starts |
| 4 | 8 | Implement category filtering functionality | ⏳ Planned | Interactive filtering |
| 4 | 9 | Add search input to Header with title filtering | ⏳ Planned | Search capability |
| 5 | 10 | Add cart icon to Header with placeholder badge | ⏳ Planned | Cart integration begins |
| 5 | 11 | Create scaffolded CartSidebar component (empty state) | ⏳ Planned | Cart UI structure |
| 5 | 12 | Add non-functional "Add to Cart" buttons to ProductCards | ⏳ Planned | Complete cart scaffolding |

### Status Legend
- ⏳ **Planned** - Story defined, ready for development
- 🔄 **In Progress** - Currently being developed
- ✅ **Complete** - Story implemented and tested
- 🚫 **Blocked** - Cannot proceed due to dependencies/issues

## Success Criteria
Each story should deliver:
- ✅ Visible UI progress that stakeholders can evaluate
- ✅ Working functionality (even if scaffolded)
- ✅ Passing automated tests
- ✅ No regression in existing features
- ✅ Code ready for stakeholder feedback

## Dependencies
- Bootstrap CSS (already included)
- Bootstrap Icons (already included)
- React & React DOM (already included)
- Existing domain models (Product, Cart)
- FakeStore API integration
