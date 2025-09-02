# Story 6: Add star ratings display

## Description
Add star ratings display to ProductCard components using the rating data from the FakeStore API.

## TDD Test Plan

### Test 1: ProductCard displays star rating when available
**Given:** A product with rating data from the API  
**When:** The ProductCard is rendered  
**Then:** It should display stars representing the rating

### Test 2: Rating component shows correct number of filled stars
**Given:** A product with a rating of 3.5  
**When:** The rating is displayed  
**Then:** It should show 3 full stars, 1 half star, and 1 empty star

### Test 3: Rating component displays rating count
**Given:** A product with rating data including count  
**When:** The ProductCard is rendered  
**Then:** It should display the number of reviews (e.g., "(124 reviews)")

### Test 4: Rating component handles missing rating data
**Given:** A product without rating data  
**When:** The ProductCard is rendered  
**Then:** It should display "No reviews yet" or similar placeholder

### Test 5: Rating stars use appropriate icons
**Given:** A rating component is rendered  
**When:** Stars are displayed  
**Then:** It should use Bootstrap Icons or similar for star icons

### Test 6: Rating component is accessible
**Given:** A rating component is rendered  
**When:** Screen readers access the content  
**Then:** It should provide appropriate ARIA labels and text alternatives

## Acceptance Criteria
- [ ] Rating component created (can be part of ProductCard or separate)
- [ ] Displays star rating using product.rating.rate from API
- [ ] Shows rating count using product.rating.count from API
- [ ] Handles products without rating data
- [ ] Uses appropriate star icons (filled, half, empty)
- [ ] Accessible with proper ARIA labels
- [ ] All tests pass
