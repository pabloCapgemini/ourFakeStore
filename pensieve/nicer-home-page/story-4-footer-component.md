# Story 4: Add Footer component

## Description
Add a Footer component with typical e-commerce links and styling.

## TDD Test Plan

### Test 1: Footer component renders with company name
**Given:** The Footer component is imported  
**When:** The component is rendered  
**Then:** It should display "OurFakeStore" company name

### Test 2: Footer component renders customer service links
**Given:** The Footer component is rendered  
**When:** The component mounts  
**Then:** It should display links for "Contact Us", "Help", and "FAQ"

### Test 3: Footer component renders legal links
**Given:** The Footer component is rendered  
**When:** The component mounts  
**Then:** It should display "Privacy Policy" and "Terms of Service" links

### Test 4: Footer component renders social media placeholders
**Given:** The Footer component is rendered  
**When:** The component mounts  
**Then:** It should display placeholder social media icons

### Test 5: Footer component is positioned at bottom of page
**Given:** The app is loaded  
**When:** The page renders  
**Then:** The Footer should appear at the bottom of the page

### Test 6: Footer component uses Bootstrap styling
**Given:** The Footer component is rendered  
**When:** CSS classes are applied  
**Then:** It should use Bootstrap classes for proper layout and styling

## Acceptance Criteria
- [ ] Footer component created in `src/components/Footer.tsx`
- [ ] Footer displays company name and copyright
- [ ] Footer includes customer service links (Contact Us, Help, FAQ)
- [ ] Footer includes legal links (Privacy Policy, Terms of Service)
- [ ] Footer includes social media icon placeholders
- [ ] Footer positioned at bottom of page
- [ ] Uses Bootstrap styling
- [ ] All tests pass
