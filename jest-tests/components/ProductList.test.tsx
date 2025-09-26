import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProductList } from '../../src/components/ProductList';
import { Product } from '../../src/domain/Product';

const mockProducts: Product[] = [
    {
        id: 1,
        title: 'Test Product 1',
        price: 19.99,
        description: 'Test description 1',
        category: 'electronics',
        image: 'https://example.com/image1.jpg'
    },
    {
        id: 2,
        title: 'Test Product 2', 
        price: 29.99,
        description: 'Test description 2',
        category: 'clothing',
        image: 'https://example.com/image2.jpg'
    }
];

describe('ProductList Component', () => {
    describe('Test 4.1: Products Render as Bootstrap Cards', () => {
        it('should render products as Bootstrap cards instead of list items', () => {
            render(<ProductList products={mockProducts} isLoading={false} error={null} />);
            
            // Should not use list structure anymore
            expect(screen.queryByRole('list')).toBeNull();
            
            // Should use Bootstrap cards
            const cards = screen.getAllByTestId('product-card');
            expect(cards).toHaveLength(2);
            
            // Each card should have Bootstrap card class
            cards.forEach(card => {
                expect(card.className).toContain('card');
            });
        });
    });

    describe('Test 4.2: Card Has Product Image', () => {
        it('should display product image in each card', () => {
            render(<ProductList products={mockProducts} isLoading={false} error={null} />);
            
            // Should have images for each product
            const images = screen.getAllByRole('img');
            expect(images).toHaveLength(2);
            
            // Images should have correct sources
            expect(images[0].getAttribute('src')).toBe('https://example.com/image1.jpg');
            expect(images[1].getAttribute('src')).toBe('https://example.com/image2.jpg');
            
            // Images should have Bootstrap card-img-top class
            images.forEach(image => {
                expect(image.className).toContain('card-img-top');
            });
        });
    });

    describe('Test 4.3: Card Has Product Title', () => {
        it('should display product title in each card', () => {
            render(<ProductList products={mockProducts} isLoading={false} error={null} />);
            
            // Should display product titles
            expect(screen.getByText('Test Product 1')).toBeTruthy();
            expect(screen.getByText('Test Product 2')).toBeTruthy();
            
            // Titles should be in card-title elements
            const titles = screen.getAllByRole('heading');
            expect(titles).toHaveLength(2);
            titles.forEach(title => {
                expect(title.className).toContain('card-title');
            });
        });
    });

    describe('Test 4.4: Card Has Product Price', () => {
        it('should display product price in each card', () => {
            render(<ProductList products={mockProducts} isLoading={false} error={null} />);
            
            // Should display formatted prices
            expect(screen.getByText('$19.99')).toBeTruthy();
            expect(screen.getByText('$29.99')).toBeTruthy();
        });
    });

    describe('Test 4.5: Cards Use Proper Bootstrap Structure', () => {
        it('should have proper Bootstrap card structure', () => {
            const { container } = render(<ProductList products={mockProducts} isLoading={false} error={null} />);
            
            // Should have card-body elements
            const cardBodies = container.querySelectorAll('.card-body');
            expect(cardBodies).toHaveLength(2);
            
            // Should have card-img-top elements
            const cardImages = container.querySelectorAll('.card-img-top');
            expect(cardImages).toHaveLength(2);
            
            // Should have card-title elements
            const cardTitles = container.querySelectorAll('.card-title');
            expect(cardTitles).toHaveLength(2);
        });
    });

    describe('Test 4.6: Cards Are Responsive', () => {
        it('should use responsive grid classes', () => {
            const { container } = render(<ProductList products={mockProducts} isLoading={false} error={null} />);
            
            // Should have responsive column classes
            const columns = container.querySelectorAll('.col-md-4');
            expect(columns).toHaveLength(2);
            
            // Should have proper row structure
            const row = container.querySelector('.row');
            expect(row).toBeTruthy();
        });
    });

    describe('Test 4.7: Error and Loading States Still Work', () => {
        it('should display loading spinner when loading', () => {
            render(<ProductList products={[]} isLoading={true} error={null} />);
            
            const loadingSpinner = screen.getByRole('status');
            expect(loadingSpinner).toBeTruthy();
            expect(screen.getByText('Loading...')).toBeTruthy();
        });

        it('should display error message when error occurs', () => {
            const testError = new Error('Test error');
            render(<ProductList products={[]} isLoading={false} error={testError} />);
            
            const errorAlert = screen.getByRole('alert');
            expect(errorAlert).toBeTruthy();
            expect(screen.getByText(/Failed to fetch products/)).toBeTruthy();
        });

        it('should display empty state message when no products', () => {
            render(<ProductList products={[]} isLoading={false} error={null} />);
            
            const infoAlert = screen.getByRole('alert');
            expect(infoAlert).toBeTruthy();
            expect(screen.getByText(/No products available/)).toBeTruthy();
        });
    });
});
