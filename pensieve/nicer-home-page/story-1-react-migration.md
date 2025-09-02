# Story 1: Switch from vanilla DOM to React components

## Description
Switch from vanilla DOM to React components by flipping the `USE_REACT_PRODUCTLIST` feature flag to true and updating tests to verify React rendering works.

## TDD Test Plan

### Test 1: Feature flag enables React rendering
**Given:** The `USE_REACT_PRODUCTLIST` flag is set to true  
**When:** The app loads products  
**Then:** React components should be used instead of vanilla DOM manipulation

### Test 2: React component receives products via IPC
**Given:** React rendering is enabled  
**When:** Products are loaded from the API  
**Then:** The `SimpleProductList` component should receive the products data

### Test 3: React rendering produces same output as vanilla DOM
**Given:** React rendering is enabled  
**When:** Products are displayed  
**Then:** The rendered output should match the existing vanilla DOM structure exactly

### Test 4: Error states work with React rendering
**Given:** React rendering is enabled  
**When:** An error occurs loading products  
**Then:** The error message should be displayed correctly

### Test 5: Empty state works with React rendering
**Given:** React rendering is enabled  
**When:** No products are available  
**Then:** The empty state message should be displayed correctly

### Test 6: Loading state works with React rendering
**Given:** React rendering is enabled  
**When:** Products are being loaded  
**Then:** The loading message should be displayed

## Acceptance Criteria
- [ ] Feature flag `USE_REACT_PRODUCTLIST` is set to true
- [ ] All existing functionality works through React components
- [ ] No visual changes to the user interface
- [ ] All Jest tests pass
- [ ] All Playwright E2E tests continue to pass
