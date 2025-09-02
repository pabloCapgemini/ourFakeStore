# Story 7: Create category filter dropdown

## Description
Create a category filter dropdown component that displays available categories from the product data.

## TDD Test Plan

### Test 1: CategoryFilter component renders dropdown
**Given:** The CategoryFilter component is imported  
**When:** The component is rendered  
**Then:** It should display a dropdown select element

### Test 2: CategoryFilter extracts unique categories from products
**Given:** A list of products with various categories  
**When:** The CategoryFilter component receives the products  
**Then:** It should extract and display unique categories in the dropdown

### Test 3: CategoryFilter includes "All Categories" option
**Given:** The CategoryFilter component is rendered  
**When:** The dropdown is populated  
**Then:** It should include "All Categories" as the first option

### Test 4: CategoryFilter displays categories in alphabetical order
**Given:** Multiple categories are available  
**When:** The dropdown is populated  
**Then:** Categories should be sorted alphabetically (after "All Categories")

### Test 5: CategoryFilter handles empty product list
**Given:** An empty product list  
**When:** The CategoryFilter component is rendered  
**Then:** It should display only "All Categories" or a "No categories" message

### Test 6: CategoryFilter has proper Bootstrap styling
**Given:** The CategoryFilter component is rendered  
**When:** CSS classes are applied  
**Then:** It should use Bootstrap form control classes

## Acceptance Criteria
- [ ] CategoryFilter component created in `src/components/CategoryFilter.tsx`
- [ ] Dropdown populated with unique categories from product data
- [ ] "All Categories" option included as default
- [ ] Categories sorted alphabetically
- [ ] Handles empty/loading states gracefully
- [ ] Uses Bootstrap styling for consistency
- [ ] All tests pass
