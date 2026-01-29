import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './pagination';
import { useState } from 'react';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A pagination component for navigating through pages with smart ellipsis display.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: { type: 'number', min: 1 },
      description: 'Current page number',
    },
    totalPages: {
      control: { type: 'number', min: 1 },
      description: 'Total number of pages',
    },
    siblingCount: {
      control: { type: 'number', min: 0, max: 3 },
      description: 'Number of siblings to show on each side',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    onPageChange: (page) => console.log('Page:', page),
  },
};

export const MiddlePage: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    onPageChange: (page) => console.log('Page:', page),
  },
};

export const LastPage: Story = {
  args: {
    currentPage: 10,
    totalPages: 10,
    onPageChange: (page) => console.log('Page:', page),
  },
};

export const FewPages: Story = {
  args: {
    currentPage: 2,
    totalPages: 5,
    onPageChange: (page) => console.log('Page:', page),
  },
};

export const ManyPages: Story = {
  args: {
    currentPage: 10,
    totalPages: 50,
    onPageChange: (page) => console.log('Page:', page),
  },
};

export const SinglePage: Story = {
  args: {
    currentPage: 1,
    totalPages: 1,
    onPageChange: (page) => console.log('Page:', page),
  },
};

export const WithMoreSiblings: Story = {
  args: {
    currentPage: 10,
    totalPages: 20,
    siblingCount: 2,
    onPageChange: (page) => console.log('Page:', page),
  },
};

export const Controlled: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return (
      <div className="space-y-4">
        <div className="text-sm">
          Current Page: <strong>{page}</strong> of <strong>15</strong>
        </div>
        <Pagination currentPage={page} totalPages={15} onPageChange={setPage} />
      </div>
    );
  },
};

export const WithContent: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);
    const itemsPerPage = 10;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex);

    return (
      <div className="w-full max-w-2xl space-y-4">
        <div className="divide-y rounded-lg border">
          {currentItems.map((item) => (
            <div key={item} className="p-4">
              {item}
            </div>
          ))}
        </div>
        <Pagination
          currentPage={page}
          totalPages={Math.ceil(items.length / itemsPerPage)}
          onPageChange={setPage}
        />
      </div>
    );
  },
};
