# OurFakeStore - Codebase Architecture Visual

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              ELECTRON APP STRUCTURE                        │
└─────────────────────────────────────────────────────────────────────────────┘

┌─ MAIN PROCESS (Node.js) ─────────────────────────────────────────────────────┐
│                                                                             │
│  ┌─ index.ts ─────────────────────────────────────────────────────────────┐ │
│  │  • Creates BrowserWindow (800x600)                                    │ │
│  │  • Manages app lifecycle (ready, quit, activate)                      │ │
│  │  • IPC handlers for products & store state                            │ │
│  │  • Initializes StoreRepository                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                    │                                         │
│                                    ▼                                         │
│  ┌─ StoreRepository ──────────────────────────────────────────────────────┐ │
│  │  • Manages data fetching logic                                        │ │
│  │  • Uses adapter pattern for different store states                    │ │
│  │  • Returns Product[] | ApiError                                       │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                    │                                         │
│                                    ▼                                         │
│  ┌─ Store Adapters ──────────────────────────────────────────────────────┐ │
│  │  • StoreAdapter (real API calls)                                      │ │
│  │  • EmptyStoreAdapter (empty state testing)                            │ │
│  │  • ErrorStoreAdapter (error state testing)                            │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                    │                                         │
│                                    ▼                                         │
│  ┌─ fake-store-api-client.ts ────────────────────────────────────────────┐ │
│  │  • Axios HTTP client for FakeStore API                                │ │
│  │  • getProductsOrError(), getProductById(), addToCart()                │ │
│  │  • Error handling with ApiError class                                 │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────┘

                                     │ IPC Communication
                                     ▼

┌─ RENDERER PROCESS (Chromium + React) ───────────────────────────────────────┐
│                                                                             │
│  ┌─ renderer.tsx ────────────────────────────────────────────────────────┐ │
│  │  • Main entry point for UI                                            │ │
│  │  • Feature flag: USE_REACT_PRODUCTLIST (currently false)             │ │
│  │  • Handles IPC 'load-products' events                                 │ │
│  │  • Vanilla DOM OR React rendering                                     │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                    │                                         │
│                         ┌──────────┴──────────┐                            │
│                         ▼                     ▼                            │
│  ┌─ VANILLA DOM ──────────────┐  ┌─ REACT COMPONENTS ──────────────────────┐ │
│  │  • Direct DOM manipulation │  │                                        │ │
│  │  • innerHTML updates       │  │  ┌─ SimpleProductList.tsx ────────────┐ │ │
│  │  • Simple list rendering   │  │  │  • Mirrors vanilla DOM exactly     │ │ │
│  │  • Currently ACTIVE        │  │  │  • Handles loading/error/empty     │ │ │
│  └─────────────────────────────┘  │  │  • Maps products to <li> items     │ │ │
│                                   │  └─────────────────────────────────────┘ │ │
│                                   │                                        │ │
│                                   │  ┌─ Future Components ────────────────┐ │ │
│                                   │  │  • ProductCard (for grid layout)   │ │ │
│                                   │  │  • Header (nav, search, cart)      │ │ │
│                                   │  │  • CartSidebar (scaffolded)        │ │ │
│                                   │  │  • Footer (e-commerce links)       │ │ │
│                                   │  └─────────────────────────────────────┘ │ │
│                                   └────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────┘

┌─ DOMAIN MODELS ─────────────────────────────────────────────────────────────┐
│                                                                             │
│  ┌─ Product.ts ──────────────────────────────────────────────────────────┐ │
│  │  interface Product {                                                   │ │
│  │    id: number                                                          │ │
│  │    title: string                                                       │ │
│  │    price: number                                                       │ │
│  │    description: string                                                 │ │
│  │    category: string                                                    │ │
│  │    image: string                                                       │ │
│  │  }                                                                     │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│  ┌─ Cart.ts ─────────────────────────────────────────────────────────────┐ │
│  │  interface Cart {                                                      │ │
│  │    userId: number                                                      │ │
│  │    date: string                                                        │ │
│  │    products: { productId: number; quantity: number; }[]               │ │
│  │  }                                                                     │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────┘

┌─ TESTING ARCHITECTURE ──────────────────────────────────────────────────────┐
│                                                                             │
│  ┌─ Jest (Unit/Component Tests) ─────────────────────────────────────────┐ │
│  │  jest-tests/components/SimpleProductList.test.tsx                     │ │
│  │  • Tests React component behavior                                     │ │
│  │  • Loading, error, empty, and populated states                        │ │
│  │  • Matches vanilla DOM output exactly                                 │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│  ┌─ Playwright (E2E Tests) ───────────────────────────────────────────────┐ │
│  │  tests/storeUX.spec.ts                                                 │ │
│  │  • Full Electron app testing                                          │ │
│  │  • App launch, product display, error scenarios                       │ │
│  │  • Uses adapter pattern for different test states                     │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────┘

┌─ CURRENT UI STATE ──────────────────────────────────────────────────────────┐
│                                                                             │
│  ┌─ Current Simple UI ───────────────────────────────────────────────────┐ │
│  │                                                                        │ │
│  │  ┌─ FakeStore Products ─────────────────────────────────────────────┐  │ │
│  │  │                                                                  │  │ │
│  │  │  • Product 1 - $10.99                                           │  │ │
│  │  │  • Product 2 - $25.50                                           │  │ │
│  │  │  • Product 3 - $15.00                                           │  │ │
│  │  │  • ...                                                           │  │ │
│  │  │                                                                  │  │ │
│  │  └──────────────────────────────────────────────────────────────────┘  │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────┘

┌─ DATA FLOW ─────────────────────────────────────────────────────────────────┐
│                                                                             │
│  1. Electron App starts → index.ts                                        │
│  2. Creates BrowserWindow → loads renderer.tsx                             │
│  3. initializeStore() → StoreRepository.getProductsOrError()               │
│  4. StoreAdapter → HTTP call to fakestoreapi.com                           │
│  5. Products returned → sent via IPC to renderer                           │
│  6. Renderer receives → updates DOM (vanilla) or React component           │
│  7. User sees product list in simple <li> format                           │
│                                                                             │
│  Error States:                                                             │
│  • API fails → ErrorStoreAdapter → "Failed to fetch products"             │
│  • Empty response → EmptyStoreAdapter → "No products available..."         │
│  • Loading → null → "Loading products..." (React only)                     │
└─────────────────────────────────────────────────────────────────────────────┘

┌─ PLANNED ENHANCEMENTS (Nicer Home Page) ────────────────────────────────────┐
│                                                                             │
│  1. Switch to React components (flip USE_REACT_PRODUCTLIST flag)           │
│  2. Add Header component (logo, nav, search, cart icon)                    │
│  3. Replace list with ProductCard grid layout                              │
│  4. Add category filtering                                                 │
│  5. Add CartSidebar component (scaffolded UI only)                         │
│  6. Add Footer component (links, social, legal)                            │
│  7. Enhanced styling with Bootstrap (already included)                     │
└─────────────────────────────────────────────────────────────────────────────┘
```
