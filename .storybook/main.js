module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
		"@storybook/addon-a11y",
		"@storybook/addon-docs",
		"@storybook/addon-viewport",
  ],
  webpackFinal: async (config, { configType }) => {
		// `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
		// You can change the configuration based on that.
		// 'PRODUCTION' is used when building the static version of storybook.

		// Make whatever fine-grained changes you need
		config.module.rules.push({
			test: /\.njk$/,
			use: [
				{
					loader: 'simple-nunjucks-loader',
					options: {
						searchPaths: 'components'
					}
				}
			]
		});

		// Return the altered config
		return config;
	}
}
