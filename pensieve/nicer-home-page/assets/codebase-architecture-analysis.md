# OurFakeStore - Codebase Architecture Analysis

## Visual Component Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                      ELECTRON APPLICATION                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────┐                ┌─────────────────────────┐  │
│  │   MAIN PROCESS  │                │   RENDERER PROCESS      │  │
│  │   (Node.js)     │                │   (Chromium + React)    │  │
│  │                 │                │                         │  │
│  │ ┌─────────────┐ │    IPC         │ ┌─────────────────────┐ │  │
│  │ │  index.ts   │ │◄──────────────►│ │   renderer.tsx      │ │  │
│  │ │             │ │                │ │                     │ │  │
│  │ │ - Window    │ │                │ │ - React Components  │ │  │
│  │ │ - IPC       │ │                │ │ - DOM Management    │ │  │
│  │ │ - Store     │ │                │ │ - Event Handling    │ │  │
│  │ │   Init      │ │                │ │                     │ │  │
│  │ └─────────────┘ │                │ └─────────────────────┘ │  │
│  │                 │                │                         │  │
│  │ ┌─────────────┐ │                │ ┌─────────────────────┐ │  │
│  │ │StoreRepo    │ │                │ │   preload.ts        │ │  │
│  │ │             │ │                │ │                     │ │  │
│  │ │ - API Calls │ │                │ │ - Context Bridge    │ │  │
│  │ │ - Data      │ │                │ │ - Store API         │ │  │
│  │ │   Transform │ │                │ │                     │ │  │
│  │ └─────────────┘ │                │ └─────────────────────┘ │  │
│  └─────────────────┘                └─────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

## Component Layer Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        RENDERER LAYER                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────┐    ┌───────────────────────────────────┐   │
│  │   REACT LAYER   │    │        VANILLA DOM LAYER           │   │
│  │   (Modern)      │    │        (Legacy)                   │   │
│  │                 │    │                                   │   │
│  │ ┌─────────────┐ │    │ ┌───────────────────────────────┐ │   │
│  │ │SimpleProduct│ │    │ │   Direct DOM Manipulation     │ │   │
│  │ │List.tsx     │ │◄───┤►│                               │ │   │
│  │ │             │ │    │ │ - innerHTML updates           │ │   │
│  │ │ - TypeScript│ │    │ │ - Event listeners             │ │   │
│  │ │ - Props     │ │    │ │ - Manual state management     │ │   │
│  │ │ - JSX       │ │    │ └───────────────────────────────┘ │   │
│  │ └─────────────┘ │    │                                   │   │
│  │                 │    │                                   │   │
│  │ ┌─────────────┐ │    │        Feature Flag Control:     │   │
│  │ │ProductList  │ │    │        USE_REACT_PRODUCTLIST     │   │
│  │ │.tsx         │ │    │                                   │   │
│  │ │             │ │    │                                   │   │
│  │ │ - Bootstrap │ │    └───────────────────────────────────┘   │
│  │ │ - Enhanced  │ │                                           │
│  │ │   Styling   │ │                                           │
│  │ └─────────────┘ │                                           │
│  └─────────────────┘                                           │
└─────────────────────────────────────────────────────────────────┘
```

## Data Flow Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        DATA FLOW PATTERN                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────────────┐  │
│  │   API       │    │ REPOSITORY  │    │    ADAPTERS         │  │
│  │             │    │   LAYER     │    │                     │  │
│  │ FakeStore   │◄───┤             │◄───┤                     │  │
│  │ API         │    │             │    │ - StoreAdapter      │  │
│  │             │    │StoreRepo    │    │ - EmptyStoreAdapter │  │
│  │ - Products  │    │.ts          │    │ - ErrorStoreAdapter │  │
│  │ - JSON      │    │             │    │                     │  │
│  │ - HTTP      │    │ - Error     │    │ (Strategy Pattern)  │  │
│  └─────────────┘    │   Handling  │    └─────────────────────┘  │
│                     │ - Transform │                             │
│                     └─────────────┘                             │
│                           │                                     │
│                           │ IPC Communication                   │
│                           ▼                                     │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                   UI COMPONENTS                         │   │
│  │                                                         │   │
│  │  Products[] | Error ──► React Component ──► JSX/DOM    │   │
│  │                                                         │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

## Domain Model Structure

```
┌─────────────────────────────────────────────────────────────────┐
│                        DOMAIN MODELS                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────┐              ┌─────────────────────────┐    │
│  │    Product      │              │        Cart             │    │
│  │                 │              │                         │    │
│  │ - id: number    │              │ - userId: number        │    │
│  │ - title: string │              │ - date: string          │    │
│  │ - price: number │              │ - products: Array<{     │    │
│  │ - description   │              │     productId: number   │    │
│  │ - category      │              │     quantity: number    │    │
│  │ - image: string │              │   }>                    │    │
│  └─────────────────┘              └─────────────────────────┘    │
│                                                                 │
│  TypeScript Interfaces - Strong Typing Throughout Application   │
└─────────────────────────────────────────────────────────────────┘
```

## Testing Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                      TESTING LAYERS                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────┐    ┌─────────────────┐    ┌─────────────┐  │
│  │  UNIT TESTS     │    │ INTEGRATION     │    │    E2E      │  │
│  │   (Jest)        │    │    TESTS        │    │ (Playwright)│  │
│  │                 │    │   (Jest)        │    │             │  │
│  │ - Component     │    │                 │    │ - Full App  │  │
│  │   Testing       │    │ - React +       │    │   Testing   │  │
│  │ - Domain Logic  │    │   IPC           │    │ - User      │  │
│  │ - Mocking       │    │ - Store         │    │   Flows     │  │
│  │                 │    │   Repository    │    │ - Visual    │  │
│  │ @testing-       │    │                 │    │   Testing   │  │
│  │ library/react   │    └─────────────────┘    │             │  │
│  └─────────────────┘                           └─────────────┘  │
│                                                                 │
│  Test Files: jest-tests/, tests/, test-results/                │
└─────────────────────────────────────────────────────────────────┘
```

## Build & Package Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    BUILD PIPELINE                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────────────┐  │
│  │ TypeScript  │    │   Webpack   │    │  Electron Forge     │  │
│  │ Compilation │───►│   Bundling  │───►│                     │  │
│  │             │    │             │    │ - Package           │  │
│  │ - .ts/.tsx  │    │ - Main      │    │ - Make Installers   │  │
│  │ - Type      │    │ - Renderer  │    │ - Multi-platform    │  │
│  │   Checking  │    │ - Preload   │    │   Support           │  │
│  │ - JSX       │    │ - Assets    │    │                     │  │
│  └─────────────┘    │ - CSS       │    │ Makers:             │  │
│                     └─────────────┘    │ - ZIP (macOS)       │  │
│                                        │ - Squirrel (Win)    │  │
│                                        │ - DEB/RPM (Linux)   │  │
│                                        └─────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

## Key Technology Stack

- **Frontend**: React 18.2 + TypeScript + Bootstrap 5.3
- **Desktop**: Electron 34.3 (Node.js + Chromium)
- **Build**: Webpack + Electron Forge
- **Testing**: Jest + React Testing Library + Playwright
- **API**: Axios + Fake Store API
- **Styling**: Bootstrap + Bootstrap Icons

## Migration Status: Dual Implementation

- **Current State**: Hybrid vanilla DOM + React with feature flags
- **Target State**: Full React architecture with modern patterns
- **Strategy**: Incremental migration maintaining test coverage
