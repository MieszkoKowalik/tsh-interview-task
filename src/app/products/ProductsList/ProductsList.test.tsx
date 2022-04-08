import React from 'react';

import { render, screen } from 'tests';
import { ProductsList } from './ProductsList';

import { mockProducts } from 'mocks/products';

describe('ProductsList', () => {
  it('Displays empty list message if products array is empty', () => {
    render(<ProductsList products={[]} />);
    expect(screen.getByText("Ooops... It's empty here")).toBeInTheDocument();
  });

  it('Displays ProductCards with provided products', () => {
    render(<ProductsList products={mockProducts} />);
    expect(screen.getByText('Incredible Plastic Pizza')).toBeInTheDocument();
    expect(screen.getByText('Licensed Cotton Soap')).toBeInTheDocument();
    expect(screen.getByText('Tasty Rubber Car')).toBeInTheDocument();
  });
});
