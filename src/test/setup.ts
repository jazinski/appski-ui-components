import '@testing-library/jest-dom';
import { vi, beforeEach } from 'vitest';

// Create a mock function for clipboard writeText
const writeTextMock = vi.fn().mockResolvedValue(undefined);

// Mock clipboard API globally for tests
Object.defineProperty(navigator, 'clipboard', {
  value: {
    writeText: writeTextMock,
  },
  writable: true,
  configurable: true,
});

// Mock ResizeObserver for tests (required by Radix UI components like Slider)
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

// Clear mock calls before each test
beforeEach(() => {
  writeTextMock.mockClear();
});

// Export for test access
export { writeTextMock };
