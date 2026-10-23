import type { Preview } from '@storybook/react';
import { blancskiDarkTheme } from './theme';
import '../src/styles.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#0f172a', // slate-900
        },
        {
          name: 'light',
          value: '#ffffff', // white
        },
      ],
    },
    docs: {
      theme: blancskiDarkTheme, // Use our custom dark theme for docs
    },
    layout: 'padded',
  },
};

export default preview;
