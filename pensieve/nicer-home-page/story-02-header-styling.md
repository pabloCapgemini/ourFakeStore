# Story 2: Header Styling & Layout

**Goal:** Style the Header component with Bootstrap to look professional with proper spacing, typography, and responsive behavior across screen sizes.

## 🧪 Test-Driven Development Approach

### Test 2.1: Header Has Bootstrap Classes
**Description:** Test that the Header component uses Bootstrap CSS classes for styling.
```typescript
// Test: Header element has Bootstrap navbar classes
// Expected: Component contains 'navbar' and related classes
// File: jest-tests/components/Header.test.tsx
```

### Test 2.2: Header Has Proper Brand Styling
**Description:** Test that the store name/logo has proper Bootstrap brand styling.
```typescript
// Test: Brand element has 'navbar-brand' class
// Expected: Store name uses Bootstrap navbar-brand styling
// File: jest-tests/components/Header.test.tsx
```

### Test 2.3: Header Is Responsive
**Description:** Test that the Header component has responsive Bootstrap classes.
```typescript
// Test: Header contains responsive classes (navbar-expand-*)
// Expected: Component adapts to different screen sizes
// File: jest-tests/components/Header.test.tsx
```

### Test 2.4: Header Has Professional Appearance
**Description:** Test that the Header has proper spacing and professional styling.
```typescript
// Test: Header has proper padding and background styling
// Expected: Component looks professional with proper spacing
// File: jest-tests/components/Header.test.tsx
```

### Test 2.5: Header Styling Doesn't Break Layout
**Description:** Test that styled Header doesn't interfere with existing product list layout.
```typescript
// Test: Styled Header maintains proper page layout
// Expected: Product list still renders correctly below header
// File: jest-tests/integration/HeaderStyling.test.tsx
```

## ✅ **Success Criteria:**
- [x] Header uses Bootstrap navbar classes
- [x] Professional appearance with proper typography
- [x] Responsive behavior across mobile/tablet/desktop
- [x] Proper spacing and padding
- [x] Doesn't break existing layout
- [x] All tests pass

## 📝 **Implementation Notes:**
- Apply Bootstrap 5.3 navbar classes
- Use Bootstrap typography utilities
- Ensure responsive breakpoints work correctly
- Maintain consistent brand styling
