import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../../src/components/Header';

describe('Header Component', () => {
    describe('Test 1.1: Header Component Renders', () => {
        it('renders without crashing', () => {
            // Test: Header component renders successfully
            // Expected: Component mounts without errors
            expect(() => {
                render(<Header />);
            }).not.toThrow();
        });

        it('renders header element', () => {
            render(<Header />);
            const headerElement = screen.getByRole('banner');
            expect(headerElement).toBeInTheDocument();
        });
    });

    describe('Test 1.2: Header Contains Store Name', () => {
        it('displays the store name', () => {
            // Test: Header displays "OurFakeStore" text
            // Expected: Text content is visible in the component
            render(<Header />);
            const storeName = screen.getByText('OurFakeStore');
            expect(storeName).toBeInTheDocument();
        });

        it('store name has proper brand styling', () => {
            render(<Header />);
            const brandLink = screen.getByRole('link', { name: 'OurFakeStore' });
            expect(brandLink).toHaveTextContent('OurFakeStore');
        });
    });

    describe('Test 1.3: Header Contains Navigation Elements', () => {
        it('contains a nav element', () => {
            // Test: Header contains a nav element
            // Expected: nav HTML element exists in the component
            render(<Header />);
            const navElement = screen.getByRole('navigation');
            expect(navElement).toBeInTheDocument();
        });

        it('nav element is properly structured', () => {
            render(<Header />);
            const header = screen.getByRole('banner');
            const nav = screen.getByRole('navigation');
            expect(header).toContainElement(nav);
        });
    });

    describe('Test 2.1: Header Has Bootstrap Classes', () => {
        it('header element has Bootstrap navbar classes', () => {
            // Test: Header element has Bootstrap navbar classes
            // Expected: Component contains 'navbar' and related classes
            render(<Header />);
            const headerElement = screen.getByRole('banner');
            expect(headerElement).toHaveClass('navbar');
        });

        it('header has Bootstrap navbar theme classes', () => {
            render(<Header />);
            const headerElement = screen.getByRole('banner');
            expect(headerElement).toHaveClass('navbar-expand-lg');
        });
    });

    describe('Test 2.2: Header Has Proper Brand Styling', () => {
        it('store name has navbar-brand class', () => {
            // Test: Brand element has 'navbar-brand' class
            // Expected: Store name uses Bootstrap navbar-brand styling
            render(<Header />);
            const brandElement = screen.getByText('OurFakeStore');
            expect(brandElement).toHaveClass('navbar-brand');
        });

        it('brand element is properly structured', () => {
            render(<Header />);
            const brandElement = screen.getByText('OurFakeStore');
            expect(brandElement.tagName.toLowerCase()).toBe('a');
        });
    });

    describe('Test 2.3: Header Is Responsive', () => {
        it('header contains responsive navbar classes', () => {
            // Test: Header contains responsive classes (navbar-expand-*)
            // Expected: Component adapts to different screen sizes
            render(<Header />);
            const headerElement = screen.getByRole('banner');
            expect(headerElement).toHaveClass('navbar-expand-lg');
        });

        it('header has collapsible button for mobile', () => {
            render(<Header />);
            const collapseButton = screen.getByRole('button');
            expect(collapseButton).toHaveAttribute('data-bs-toggle', 'collapse');
        });

        it('collapsible content has proper Bootstrap classes', () => {
            render(<Header />);
            const collapseContent = screen.getByTestId('navbar-collapse');
            expect(collapseContent).toHaveClass('collapse');
            expect(collapseContent).toHaveClass('navbar-collapse');
        });
    });

    describe('Test 2.4: Header Has Professional Appearance', () => {
        it('header has proper background styling', () => {
            // Test: Header has proper padding and background styling
            // Expected: Component looks professional with proper spacing
            render(<Header />);
            const headerElement = screen.getByRole('banner');
            expect(headerElement).toHaveClass('navbar-dark');
            expect(headerElement).toHaveClass('bg-dark');
        });

        it('header has proper padding and spacing', () => {
            render(<Header />);
            const headerElement = screen.getByRole('banner');
            expect(headerElement).toHaveClass('px-3');
        });

        it('brand link has proper styling', () => {
            render(<Header />);
            const brandElement = screen.getByText('OurFakeStore');
            expect(brandElement).toHaveClass('navbar-brand');
        });
    });

    describe('Test 2.5: Header Styling Does Not Break Layout', () => {
        it('should not interfere with overall layout structure', () => {
            render(<Header />);

            // Verify header element exists and is accessible
            const headerElement = screen.getByRole('banner');
            expect(headerElement.tagName).toBe('HEADER');

            // Verify proper Bootstrap navbar structure
            expect(headerElement.className).toContain('navbar');
            expect(headerElement.className).toContain('navbar-expand-lg');
        });
    });
});

describe('Header Component - Story 3: Search Bar UI Scaffolding', () => {
    describe('Test 3.1: Search Input Element Exists', () => {
        it('should contain a search input field', () => {
            render(<Header />);
            const searchInput = screen.getByRole('textbox');
            expect(searchInput).toBeTruthy();
            expect(searchInput.getAttribute('type')).toBe('text');
        });
    });

    describe('Test 3.2: Search Input Has Placeholder Text', () => {
        it('should have placeholder text "Search products..."', () => {
            render(<Header />);
            const searchInput = screen.getByPlaceholderText('Search products...');
            expect(searchInput).toBeTruthy();
        });
    });

    describe('Test 3.3: Search Input Has Bootstrap Styling', () => {
        it('should have Bootstrap form-control class', () => {
            render(<Header />);
            const searchInput = screen.getByRole('textbox');
            expect(searchInput.className).toContain('form-control');
        });
    });

    describe('Test 3.4: Search Input Is Non-Functional', () => {
        it('should accept text input but not trigger search functionality', () => {
            render(<Header />);
            const searchInput = screen.getByRole('textbox');

            // Should be able to type in the input (not disabled)
            expect(searchInput.hasAttribute('disabled')).toBe(false);

            // Should not have any event handlers (non-functional scaffolding)
            expect(searchInput.getAttribute('onchange')).toBeNull();
            expect(searchInput.getAttribute('oninput')).toBeNull();
            expect(searchInput.getAttribute('onkeydown')).toBeNull();
        });
    });

    describe('Test 3.5: Search Input Has Search Icon', () => {
        it('should display a search icon near the input', () => {
            render(<Header />);
            // Look for search icon (could be Bootstrap icon, emoji, or text)
            const searchIcon = screen.getByText('🔍') || screen.getByLabelText(/search/i);
            expect(searchIcon).toBeTruthy();
        });
    });

    describe('Test 3.6: Search Layout Is Responsive', () => {
        it('should have responsive input-group structure', () => {
            const { container } = render(<Header />);

            // Check for Bootstrap input-group class for responsive design
            const inputGroup = container.querySelector('.input-group');
            expect(inputGroup).toBeTruthy();

            // Check for responsive positioning (ms-auto class)
            const searchContainer = container.querySelector('.d-flex.ms-auto');
            expect(searchContainer).toBeTruthy();
        });
    });
});
