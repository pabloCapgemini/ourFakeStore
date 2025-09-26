# Story 6: Product Card Rating & Price Enhancement

**Goal:** Add star ratings (hardcoded 4-5 stars) and properly formatted pricing display to each product card with currency symbols.

## 🧪 Test-Driven Development Approach

### Test 6.1: Product Cards Display Star Rating
**Description:** Test that each product card shows a star rating display.
```typescript
// Test: Each product card contains star rating elements
// Expected: Star rating (using Bootstrap icons) is visible
// File: jest-tests/components/ProductList.test.tsx
```

### Test 6.2: Star Rating Uses Bootstrap Icons
**Description:** Test that star ratings use Bootstrap star icons (filled and empty).
```typescript
// Test: Rating uses 'bi-star-fill' and 'bi-star' classes
// Expected: Proper Bootstrap star icons are displayed
// File: jest-tests/components/ProductList.test.tsx
```

### Test 6.3: Star Rating Shows Hardcoded Values
**Description:** Test that star ratings display realistic hardcoded values (4-5 stars).
```typescript
// Test: Products show 4 or 5 filled stars consistently
// Expected: Rating displays appropriate number of filled stars
// File: jest-tests/components/ProductList.test.tsx
```

### Test 6.4: Price Has Currency Formatting
**Description:** Test that product prices are displayed with proper currency formatting.
```typescript
// Test: Prices display with dollar sign and proper decimal format
// Expected: Price shows as "$19.99" format
// File: jest-tests/components/ProductList.test.tsx
```

### Test 6.5: Price Has Prominent Styling
**Description:** Test that product prices have prominent visual styling.
```typescript
// Test: Price text has distinctive styling (color, weight, size)
// Expected: Price stands out visually in the card
// File: jest-tests/components/ProductList.test.tsx
```

### Test 6.6: Rating and Price Layout
**Description:** Test that rating and price are properly positioned in the card layout.
```typescript
// Test: Rating and price are positioned logically within card
// Expected: Good visual hierarchy with title, rating, price
// File: jest-tests/components/ProductList.test.tsx
```

### Test 6.7: Enhanced Cards Maintain Responsiveness
**Description:** Test that enhanced cards with ratings/prices remain responsive.
```typescript
// Test: Cards with new elements still work on all screen sizes
// Expected: Layout adapts properly on mobile/tablet/desktop
// File: jest-tests/components/ProductList.test.tsx
```

## ✅ **Success Criteria:**
- [x] Star ratings displayed on all product cards
- [x] Bootstrap star icons used for ratings
- [x] Realistic hardcoded rating values (4-5 stars)
- [x] Prices formatted with currency symbol
- [x] Price has prominent visual styling
- [x] Good visual hierarchy in card layout
- [x] Responsive design maintained
- [x] All tests pass

## 📝 **Implementation Notes:**
- Use Bootstrap Icons for star ratings (bi-star-fill, bi-star)
- Create helper function for price formatting ($XX.XX)
- Use hardcoded ratings (randomly 4 or 5 stars per product)
- Apply proper Bootstrap typography classes for price styling
- Ensure consistent spacing and alignment within cards
- Consider using text-warning for star colors
