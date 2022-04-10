import React from 'react';

import { render, screen, fireEvent } from 'tests';

import { ProductModal } from './ProductModal';

const mockProduct = {
  id: 1,
  name: 'Incredible Plastic Pizza',
  description: 'Molestiae iure eum voluptas culpa et ut quasi.',
  rating: 2,
  image: 'https://picsum.photos/640/480?random=1074',
  promo: true,
  active: true,
};
const handleClose = jest.fn();

describe('ProductCard', () => {
  it('Renders the component', () => {
    render(
      <ProductModal
        isOpen={true}
        handleClose={handleClose}
        product={mockProduct}
      />
    );
    expect(screen.getByText('Incredible Plastic Pizza')).toBeInTheDocument();
  });

  it('Calls handleClose function on close button click', () => {
    render(
      <ProductModal
        isOpen={true}
        handleClose={handleClose}
        product={mockProduct}
      />
    );
    expect(screen.getByText('Incredible Plastic Pizza')).toBeInTheDocument();
    screen.getByLabelText('Close').click();
    expect(handleClose).toBeCalled();
  });

  it('Calls handleClose function on Escape key press', () => {
    render(
      <ProductModal
        isOpen={true}
        handleClose={handleClose}
        product={mockProduct}
      />
    );
    fireEvent.keyDown(screen.getByText('Incredible Plastic Pizza'), {
      key: 'Escape',
    });
    expect(handleClose).toBeCalled();
  });

  it('Calls handleClose function on Esc key press', () => {
    render(
      <ProductModal
        isOpen={true}
        handleClose={handleClose}
        product={mockProduct}
      />
    );
    fireEvent.keyDown(screen.getByText('Incredible Plastic Pizza'), {
      key: 'Escape',
    });
    expect(handleClose).toBeCalled();
  });

  it('Calls handleClose function on backdrop click', () => {
    render(
      <ProductModal
        isOpen={true}
        handleClose={handleClose}
        product={mockProduct}
      />
    );
    fireEvent.click(screen.getByTestId('backdrop'));
    expect(handleClose).toBeCalled();
  });
});
