# Story 1: Switch to React Components

## Story Description
Switch from vanilla DOM to React components by flipping the `USE_REACT_PRODUCTLIST` feature flag to true and updating tests to verify React rendering works.

## Acceptance Criteria
- [ ] `USE_REACT_PRODUCTLIST` flag is set to true in renderer.tsx
- [ ] React ProductList renders instead of vanilla DOM
- [ ] All existing functionality preserved (loading, error, empty, populated states)
- [ ] Existing Jest tests updated to work with React rendering
- [ ] Playwright E2E tests continue to pass

## TDD Test Plan

### Test Progress Table

| Test # | Test Description | Status | Notes |
|--------|------------------|---------|-------|
| 1 | Feature flag is set to true | ⏳ Planned | Simple configuration change |
| 2 | React ProductList component renders when flag is true | ⏳ Planned | Core React integration |
| 3 | Loading state displays correctly in React mode | ⏳ Planned | State handling verification |
| 4 | Error state displays correctly in React mode | ⏳ Planned | Error boundary testing |
| 5 | Empty products state displays correctly in React mode | ⏳ Planned | Empty state handling |
| 6 | Populated products list displays correctly in React mode | ⏳ Planned | Main functionality |
| 7 | React output matches vanilla DOM structure exactly | ⏳ Planned | Consistency verification |
| 8 | Playwright E2E tests pass with React rendering | ⏳ Planned | Integration testing |

### Status Legend
- ⏳ **Planned** - Test defined, ready to implement
- 🔄 **In Progress** - Currently writing/implementing test
- ✅ **Complete** - Test written and passing
- 🚫 **Blocked** - Cannot proceed due to dependencies/issues

## Detailed Test Descriptions

### Test 1: Feature flag is set to true
**File:** `src/renderer.tsx`
**Test:** Verify `USE_REACT_PRODUCTLIST` constant is `true`
```javascript
// Simple verification that flag is flipped
expect(USE_REACT_PRODUCTLIST).toBe(true);
```

### Test 2: React ProductList component renders when flag is true
**File:** `jest-tests/components/ReactIntegration.test.tsx` (new)
**Test:** Verify React component is mounted when flag is true
```javascript
// Mock the flag as true and verify React component renders
// Check that SimpleProductList component is in the DOM
```

### Test 3: Loading state displays correctly in React mode
**File:** `jest-tests/components/SimpleProductList.test.tsx` (existing)
**Test:** Verify loading state renders correctly
```javascript
// Test already exists but verify it works in integrated context
render(<SimpleProductList productsOrError={null} />);
expect(screen.getByText('Loading products...')).toBeInTheDocument();
```

### Test 4: Error state displays correctly in React mode
**File:** `jest-tests/components/SimpleProductList.test.tsx` (existing)
**Test:** Verify error state renders correctly
```javascript
// Test already exists but verify it works in integrated context
const error = new Error('Test error');
render(<SimpleProductList productsOrError={error} />);
expect(screen.getByText('Failed to fetch products')).toBeInTheDocument();
```

### Test 5: Empty products state displays correctly in React mode
**File:** `jest-tests/components/SimpleProductList.test.tsx` (existing)
**Test:** Verify empty state renders correctly
```javascript
// Test already exists but verify it works in integrated context
render(<SimpleProductList productsOrError={[]} />);
expect(screen.getByText('No products available. Please come back soon!')).toBeInTheDocument();
```

### Test 6: Populated products list displays correctly in React mode
**File:** `jest-tests/components/SimpleProductList.test.tsx` (existing)
**Test:** Verify products render correctly
```javascript
// Test already exists but verify it works in integrated context
const mockProducts = [{ id: 1, title: 'Test Product', price: 10.99 }];
render(<SimpleProductList productsOrError={mockProducts} />);
expect(screen.getByText('Test Product - $10.99')).toBeInTheDocument();
```

### Test 7: React output matches vanilla DOM structure exactly
**File:** `jest-tests/components/SimpleProductList.test.tsx` (existing)
**Test:** Verify DOM structure consistency
```javascript
// Test already exists - "matches vanilla DOM output format exactly"
// Ensure React version produces identical DOM structure
```

### Test 8: Playwright E2E tests pass with React rendering
**File:** `tests/storeUX.spec.ts` (existing)
**Test:** Verify E2E tests continue to work
```javascript
// Run existing Playwright tests to ensure they pass
// Tests should work transparently with React rendering
```

## Implementation Notes
- Start with Test 1 (flag change) - this is the simplest change
- Tests 3-7 largely exist already but need verification in integrated context
- Test 2 may require new test file for integration testing
- Test 8 is validation that nothing broke in E2E scenarios
- Keep vanilla DOM code temporarily to enable rollback if needed

## Definition of Done
- [ ] All 8 tests are written and passing
- [ ] Feature flag successfully flipped to React mode
- [ ] No regressions in existing functionality
- [ ] React components render correctly in Electron app
- [ ] All existing tests continue to pass
