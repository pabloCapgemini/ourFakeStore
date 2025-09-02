# Story 3: Transform list to Bootstrap grid layout

## Description
Transform the current list display into a responsive Bootstrap grid layout using ProductCard components that show title and price.

## TDD Test Plan

### Test 1: ProductCard component renders product title
**Given:** A ProductCard component receives a product  
**When:** The component is rendered  
**Then:** It should display the product title

### Test 2: ProductCard component renders product price
**Given:** A ProductCard component receives a product  
**When:** The component is rendered  
**Then:** It should display the product price formatted as currency

### Test 3: ProductCard component uses Bootstrap card styling
**Given:** A ProductCard component is rendered  
**When:** CSS classes are applied  
**Then:** It should use Bootstrap card classes

### Test 4: Product grid layout displays multiple columns
**Given:** Multiple products are available  
**When:** The product list is rendered  
**Then:** Products should be displayed in a responsive grid layout

### Test 5: Grid layout is responsive
**Given:** The product grid is rendered  
**When:** Viewed on different screen sizes  
**Then:** The number of columns should adjust appropriately

### Test 6: ProductCard handles missing data gracefully
**Given:** A product with missing title or price  
**When:** The ProductCard is rendered  
**Then:** It should display fallback text or handle the missing data

## Acceptance Criteria
- [ ] ProductCard component created in `src/components/ProductCard.tsx`
- [ ] Product list uses Bootstrap grid system
- [ ] Each product displays as a card with title and price
- [ ] Grid is responsive (adjusts columns based on screen size)
- [ ] Replaces existing simple list format
- [ ] All tests pass
