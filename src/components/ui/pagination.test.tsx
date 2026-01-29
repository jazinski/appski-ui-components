import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Pagination } from './pagination';

describe('Pagination', () => {
  it('renders page numbers correctly', () => {
    render(<Pagination currentPage={1} totalPages={5} onPageChange={vi.fn()} />);

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('disables previous button on first page', () => {
    render(<Pagination currentPage={1} totalPages={5} onPageChange={vi.fn()} />);

    const prevButton = screen.getByLabelText('Go to previous page');
    expect(prevButton).toBeDisabled();
  });

  it('disables next button on last page', () => {
    render(<Pagination currentPage={5} totalPages={5} onPageChange={vi.fn()} />);

    const nextButton = screen.getByLabelText('Go to next page');
    expect(nextButton).toBeDisabled();
  });

  it('calls onPageChange when page number is clicked', async () => {
    const handlePageChange = vi.fn();
    const user = userEvent.setup();

    render(<Pagination currentPage={1} totalPages={5} onPageChange={handlePageChange} />);

    await user.click(screen.getByText('3'));
    expect(handlePageChange).toHaveBeenCalledWith(3);
  });

  it('calls onPageChange when next button is clicked', async () => {
    const handlePageChange = vi.fn();
    const user = userEvent.setup();

    render(<Pagination currentPage={2} totalPages={5} onPageChange={handlePageChange} />);

    await user.click(screen.getByLabelText('Go to next page'));
    expect(handlePageChange).toHaveBeenCalledWith(3);
  });

  it('calls onPageChange when previous button is clicked', async () => {
    const handlePageChange = vi.fn();
    const user = userEvent.setup();

    render(<Pagination currentPage={3} totalPages={5} onPageChange={handlePageChange} />);

    await user.click(screen.getByLabelText('Go to previous page'));
    expect(handlePageChange).toHaveBeenCalledWith(2);
  });

  it('highlights current page', () => {
    render(<Pagination currentPage={3} totalPages={5} onPageChange={vi.fn()} />);

    const currentPageButton = screen.getByText('3');
    expect(currentPageButton).toHaveAttribute('aria-current', 'page');
  });

  it('shows ellipsis for many pages', () => {
    render(<Pagination currentPage={5} totalPages={20} onPageChange={vi.fn()} />);

    // Ellipsis is rendered as MoreHorizontal icon from lucide-react
    const ellipsisIcons = document.querySelectorAll('.lucide-ellipsis');
    expect(ellipsisIcons.length).toBeGreaterThan(0);
  });

  it('handles single page', () => {
    render(<Pagination currentPage={1} totalPages={1} onPageChange={vi.fn()} />);

    const prevButton = screen.getByLabelText('Go to previous page');
    const nextButton = screen.getByLabelText('Go to next page');

    expect(prevButton).toBeDisabled();
    expect(nextButton).toBeDisabled();
  });
});
