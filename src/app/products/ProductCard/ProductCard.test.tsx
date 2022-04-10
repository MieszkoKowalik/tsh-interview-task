import React from 'react';

import { render, screen, fireEvent } from 'tests';

import { ProductCard } from './ProductCard';

const mockPromoActiveProduct = {
  id: 1,
  name: 'Incredible Plastic Pizza',
  description: 'Molestiae iure eum voluptas culpa et ut quasi.',
  rating: 2,
  image: 'https://picsum.photos/640/480?random=1074',
  promo: true,
  active: true,
};

const mockInactiveProduct = {
  id: 1,
  name: 'Incredible Plastic Pizza',
  description: 'Molestiae iure eum voluptas culpa et ut quasi.',
  rating: 2,
  image: 'https://picsum.photos/640/480?random=1074',
  promo: false,
  active: false,
};

describe('ProductCard', () => {
  it('Displays promo badge when promo property is true', () => {
    render(<ProductCard product={mockPromoActiveProduct} />);
    expect(screen.getByText('Promo')).toBeInTheDocument();
  });

  it("Doesn't display promo badge when promo proprty is false", () => {
    render(<ProductCard product={mockInactiveProduct} />);
    expect(screen.queryByText('Promo')).not.toBeInTheDocument();
  });

  it('Corectly displays inactive ProductCard', () => {
    render(<ProductCard product={mockInactiveProduct} />);
    expect(screen.getByText('Unavailable')).toBeDisabled();
    expect(screen.getByRole('img')).toHaveStyle('opacity: 0.5');
  });

  it('Corectly displays active ProductCard', () => {
    render(<ProductCard product={mockPromoActiveProduct} />);
    expect(screen.getByText('Show details')).toBeEnabled();
    expect(screen.getByRole('img')).toHaveStyle('opacity: 1');
  });

  it('Opens, displays and closes "Show details" modal', () => {
    render(<ProductCard product={mockPromoActiveProduct} />);
    fireEvent.click(screen.getByText('Show details'));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText('Close'));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
