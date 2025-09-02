# Story 9: Add search input to Header

## Description
Add a search input field to the Header component with basic text filtering of product titles.

## TDD Test Plan

### Test 1: SearchInput component renders in Header
**Given:** The Header component is updated  
**When:** The Header is rendered  
**Then:** It should display a search input field

### Test 2: SearchInput has proper placeholder text
**Given:** The SearchInput component is rendered  
**When:** The input is displayed  
**Then:** It should show placeholder text like "Search products..."

### Test 3: SearchInput triggers callback on text change
**Given:** A SearchInput with an onChange callback  
**When:** A user types in the search field  
**Then:** The callback should be triggered with the search text

### Test 4: Product list filters by search text in titles
**Given:** Products with various titles and a search input  
**When:** A search term is entered  
**Then:** Only products with titles containing the search term should be displayed

### Test 5: Search is case-insensitive
**Given:** Products with mixed case titles  
**When:** A search term is entered in any case  
**Then:** Matching should be case-insensitive

### Test 6: Search handles empty/whitespace input
**Given:** A search input field  
**When:** Empty text or only whitespace is entered  
**Then:** All products should be displayed

### Test 7: Search works with category filter
**Given:** Both search and category filters are applied  
**When:** Both filters have values  
**Then:** Products should match both the category AND search criteria

## Acceptance Criteria
- [ ] Search input added to Header component
- [ ] Search input has appropriate placeholder text
- [ ] Search filtering implemented for product titles
- [ ] Case-insensitive search matching
- [ ] Empty search shows all products
- [ ] Search works in combination with category filter
- [ ] Bootstrap styling applied to search input
- [ ] All tests pass
