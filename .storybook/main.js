module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/react',
  viteFinal: (config, { configType }) => {
    if (configType == 'PRODUCTION') {
      config.base = '/dpme-ui/'
    }

    return config
  },
}
