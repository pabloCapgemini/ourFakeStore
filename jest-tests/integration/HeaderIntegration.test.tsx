import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../../src/components/Header';

describe('Header Integration', () => {
    describe('Test 1.4: Header Renders in App Integration', () => {
        it('header component can be used in app layout', () => {
            // Test: Header component renders when used in renderer
            // Expected: Header appears above product list content
            const TestApp = () => (
                <div>
                    <Header />
                    <main>
                        <h2>FakeStore Products</h2>
                        <ul id="product-list">
                            <li>Test Product</li>
                        </ul>
                    </main>
                </div>
            );

            render(<TestApp />);

            const header = screen.getByRole('banner');
            const main = screen.getByRole('main');
            const productHeading = screen.getByText('FakeStore Products');

            expect(header).toBeInTheDocument();
            expect(main).toBeInTheDocument();
            expect(productHeading).toBeInTheDocument();
        });

        it('header appears above main content', () => {
            const TestApp = () => (
                <div>
                    <Header />
                    <main>
                        <h2>FakeStore Products</h2>
                    </main>
                </div>
            );

            const { container } = render(<TestApp />);
            const header = container.querySelector('header');
            const main = container.querySelector('main');

            // Header should come before main in DOM order
            expect(header?.compareDocumentPosition(main!)).toBe(
                Node.DOCUMENT_POSITION_FOLLOWING
            );
        });
    });
});
