import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {},
  staticDirs: ['../public'],
  viteFinal: async (config) => {
    // Get commit hash for injection
    const commitHash =
      process.env.STORYBOOK_COMMIT_HASH ||
      require('child_process').execSync('git rev-parse --short HEAD', { encoding: 'utf-8' }).trim();

    return {
      ...config,
      define: {
        ...config.define,
        __STORYBOOK_COMMIT_HASH__: JSON.stringify(commitHash),
      },
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          '@': '/src',
        },
      },
    };
  },
};

export default config;
