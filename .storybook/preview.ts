import type { Preview } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';
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
      theme: undefined, // Will use dark theme from manager
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        dark: 'dark',
        light: '', // Keep light mode option but default to dark
      },
      defaultTheme: 'dark', // DEFAULT TO DARK MODE
    }),
  ],
  globalTypes: {
    // Override the theme toolbar to default to dark
    theme: {
      defaultValue: 'dark',
    },
  },
};

export default preview;
