# Story 4: Shopping Cart Icon Scaffolding

**Goal:** Add a Bootstrap cart icon with badge to the Header component that displays a hardcoded "0" items but doesn't perform any cart operations.

## 🧪 Test-Driven Development Approach

### Test 4.1: Cart Icon Exists
**Description:** Test that the Header component contains a shopping cart icon.
```typescript
// Test: Header contains Bootstrap cart icon (bi-cart or similar)
// Expected: Cart icon is rendered in the component
// File: jest-tests/components/Header.test.tsx
```

### Test 4.2: Cart Badge Shows Item Count
**Description:** Test that the cart icon has a badge displaying item count.
```typescript
// Test: Cart icon has a badge element with "0" text
// Expected: Badge element displays "0" next to cart icon
// File: jest-tests/components/Header.test.tsx
```

### Test 4.3: Cart Badge Has Bootstrap Styling
**Description:** Test that the cart badge uses proper Bootstrap badge classes.
```typescript
// Test: Cart badge has 'badge' and 'bg-*' classes
// Expected: Badge uses Bootstrap styling (bg-danger, bg-primary, etc.)
// File: jest-tests/components/Header.test.tsx
```

### Test 4.4: Cart Icon Is Non-Functional
**Description:** Test that clicking the cart icon doesn't trigger cart functionality.
```typescript
// Test: Clicking cart icon doesn't open cart or navigate
// Expected: Click event is handled but no cart operations occur
// File: jest-tests/components/Header.test.tsx
```

### Test 4.5: Cart Icon Has Proper Positioning
**Description:** Test that the cart icon is positioned correctly in the header layout.
```typescript
// Test: Cart icon is positioned on the right side of header
// Expected: Icon appears in appropriate header position
// File: jest-tests/components/Header.test.tsx
```

### Test 4.6: Cart Icon Is Responsive
**Description:** Test that the cart icon displays properly on all screen sizes.
```typescript
// Test: Cart icon maintains proper size/position on mobile/desktop
// Expected: Icon is visible and properly sized on all devices
// File: jest-tests/components/Header.test.tsx
```

## ✅ **Success Criteria:**
- [x] Shopping cart icon displayed in Header
- [x] Badge with "0" count is visible
- [x] Bootstrap icon and badge styling applied
- [x] Proper positioning in header layout
- [x] Responsive on all screen sizes
- [x] Non-functional (scaffolded only)
- [x] All tests pass

## 📝 **Implementation Notes:**
- Use Bootstrap Icons cart icon (bi-cart3)
- Position cart icon in header navbar (typically right side)
- Use Bootstrap badge component for item count
- Ensure icon is visible but non-interactive
- Maintain consistent styling with other header elements
