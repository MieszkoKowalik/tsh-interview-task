import React from 'react';

import { render, screen, fireEvent } from 'tests';

import { Pagination } from './Pagination';

const setPage = jest.fn();

describe('Pagination component', () => {
  it('Displays pagination when totalPages > 1', () => {
    render(<Pagination currentPage={1} totalPages={2} setPage={setPage} />);
    expect(screen.getByText('prev')).toBeInTheDocument();
  });

  it("Doesn't display pagination when totalPages < 2", () => {
    render(<Pagination currentPage={1} totalPages={1} setPage={setPage} />);
    expect(screen.queryByText('prev')).not.toBeInTheDocument();
  });

  it('Disables prev button when currentPage = 1', () => {
    render(<Pagination currentPage={1} totalPages={3} setPage={setPage} />);
    expect(screen.getByText('prev')).toBeDisabled();
  });

  it('Disables next button when currentPage = totalPages', () => {
    render(<Pagination currentPage={3} totalPages={3} setPage={setPage} />);
    expect(screen.getByText('next')).toBeDisabled();
  });

  it('Calls setPage function on numbered button click with button value', () => {
    render(<Pagination currentPage={3} totalPages={3} setPage={setPage} />);
    fireEvent.click(screen.getByText('1'));
    expect(setPage).toBeCalledWith(1);
  });

  it('Calls setPage function on "prev" button click with value = currentPage - 1', () => {
    render(<Pagination currentPage={2} totalPages={3} setPage={setPage} />);
    fireEvent.click(screen.getByText('prev'));
    expect(setPage).toBeCalledWith(1);
  });

  it('Calls setPage function on "next" button click with value = currentPage + 1', () => {
    render(<Pagination currentPage={2} totalPages={3} setPage={setPage} />);
    fireEvent.click(screen.getByText('next'));
    expect(setPage).toBeCalledWith(3);
  });
});
