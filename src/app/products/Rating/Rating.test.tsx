import React from 'react';

import { render, screen } from 'tests';

import { Rating } from './Rating';

describe('Rating', () => {
  it('Displays correct number of stars when rating = 0', () => {
    render(<Rating rating={0} />);
    expect(screen.queryByTestId('full-star')).not.toBeInTheDocument();
    expect(screen.getAllByTestId('border-star')).toHaveLength(5);
  });

  it('Displays correct number of stars when rating = 1', () => {
    render(<Rating rating={1} />);
    expect(screen.getAllByTestId('full-star')).toHaveLength(1);
    expect(screen.getAllByTestId('border-star')).toHaveLength(4);
  });

  it('Displays correct number of stars when rating = 2', () => {
    render(<Rating rating={2} />);
    expect(screen.getAllByTestId('full-star')).toHaveLength(2);
    expect(screen.getAllByTestId('border-star')).toHaveLength(3);
  });

  it('Displays correct number of stars when rating = 3', () => {
    render(<Rating rating={3} />);
    expect(screen.getAllByTestId('full-star')).toHaveLength(3);
    expect(screen.getAllByTestId('border-star')).toHaveLength(2);
  });

  it('Displays correct number of stars when rating = 4', () => {
    render(<Rating rating={4} />);
    expect(screen.getAllByTestId('full-star')).toHaveLength(4);
    expect(screen.getAllByTestId('border-star')).toHaveLength(1);
  });

  it('Displays correct number of stars when rating = 5', () => {
    render(<Rating rating={5} />);
    expect(screen.getAllByTestId('full-star')).toHaveLength(5);
    expect(screen.queryByTestId('border-star')).not.toBeInTheDocument();
  });
});
