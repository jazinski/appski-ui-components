import '@testing-library/jest-dom';

// Mock clipboard API globally for tests
const writeTextMock = vi.fn().mockResolvedValue(undefined);

Object.defineProperty(navigator, 'clipboard', {
  value: {
    writeText: writeTextMock,
  },
  writable: true,
  configurable: true,
});

// Mock ResizeObserver for tests (required by Radix UI components like Slider)
globalThis.ResizeObserver = class ResizeObserver {
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
