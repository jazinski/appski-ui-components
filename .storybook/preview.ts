import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
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
      ],
    },
    docs: {
      theme: themes.dark, // Use Storybook's built-in dark theme for docs
    },
    layout: 'padded',
  },
};

export default preview;
