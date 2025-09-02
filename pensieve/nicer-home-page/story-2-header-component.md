# Story 2: Create basic Header component

## Description
Create a basic Header component with placeholder logo and title that renders above the product list.

## TDD Test Plan

### Test 1: Header component renders with title
**Given:** The Header component is imported  
**When:** The component is rendered  
**Then:** It should display a title "OurFakeStore"

### Test 2: Header component renders with logo placeholder
**Given:** The Header component is rendered  
**When:** The component mounts  
**Then:** It should display a logo placeholder or brand icon

### Test 3: Header component is positioned above product list
**Given:** The app is loaded  
**When:** The page renders  
**Then:** The Header should appear above the product list in the DOM

### Test 4: Header component uses Bootstrap styling
**Given:** The Header component is rendered  
**When:** CSS classes are applied  
**Then:** It should use Bootstrap classes for proper styling

### Test 5: Header component is responsive
**Given:** The Header component is rendered  
**When:** Viewed on different screen sizes  
**Then:** It should maintain proper layout and readability

## Acceptance Criteria
- [ ] Header component created in `src/components/Header.tsx`
- [ ] Header displays "OurFakeStore" title
- [ ] Header includes logo/brand placeholder
- [ ] Header appears above product list
- [ ] Uses Bootstrap styling for responsive design
- [ ] All tests pass
