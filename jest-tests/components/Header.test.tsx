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

        it('store name has proper heading role', () => {
            render(<Header />);
            const heading = screen.getByRole('heading', { level: 1 });
            expect(heading).toHaveTextContent('OurFakeStore');
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
});
