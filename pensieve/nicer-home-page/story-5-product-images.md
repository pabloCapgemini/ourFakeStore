# Story 5: Add product images to ProductCard

## Description
Add product images to each ProductCard component, with fallback handling for missing images from the API.

## TDD Test Plan

### Test 1: ProductCard displays product image when available
**Given:** A product with a valid image URL  
**When:** The ProductCard is rendered  
**Then:** It should display the product image

### Test 2: ProductCard shows fallback when image URL is missing
**Given:** A product without an image URL  
**When:** The ProductCard is rendered  
**Then:** It should display a placeholder image or icon

### Test 3: ProductCard handles broken image URLs gracefully
**Given:** A product with an invalid/broken image URL  
**When:** The ProductCard is rendered and image fails to load  
**Then:** It should display a fallback placeholder

### Test 4: Product image has proper sizing and aspect ratio
**Given:** A ProductCard with an image  
**When:** The card is rendered  
**Then:** The image should be properly sized and maintain aspect ratio

### Test 5: Product image is accessible
**Given:** A ProductCard with an image  
**When:** The card is rendered  
**Then:** The image should have appropriate alt text

### Test 6: Images load lazily for performance
**Given:** Multiple ProductCards with images  
**When:** The page is loaded  
**Then:** Images should load as they come into view

## Acceptance Criteria
- [ ] ProductCard displays product images from API
- [ ] Fallback placeholder for missing/broken images
- [ ] Images properly sized within card layout
- [ ] Images maintain aspect ratio
- [ ] Proper alt text for accessibility
- [ ] Lazy loading implemented for performance
- [ ] All tests pass
