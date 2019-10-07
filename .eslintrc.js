module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaFeatures: { legacyDecorators: true }
	},
	extends: [
		'@nuxtjs/eslint-config-typescript',
		'plugin:nuxt/recommended',
		'airbnb-base',
		'plugin:eslint-comments/recommended',
		'plugin:prettier/recommended',
		'prettier/vue',
		'prettier/@typescript-eslint'
	],
	plugins: ['prettier', '@typescript-eslint', 'json'],
	settings: {
		'import/core-modules': ['vue', 'vuex'],
		'import/resolver': {
			nuxt: {
				nuxtSrcDir: 'src',
				extensions: ['.js', '.ts', '.json', '.vue']
			}
		}
	},
	// add your custom rules here
	rules: {
		//'class-methods-use-this': 0,
		'prettier/prettier': 'error',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
		'node/no-unsupported-features/es-syntax': 0,
		'@typescript-eslint/explicit-function-return-type': 0,
		'vue/component-name-in-template-casing': [
			'error',
			'PascalCase',
			{
				ignores: [
					'nuxt',
					'nuxt-link',
					'n-link',
					'nuxt-child',
					'no-ssr',
					'svg-icon'
				]
			}
		]
	},
	overrides: [
		{
			files: ['*.d.ts'],
			rules: {
				'import/no-extraneous-dependencies': 0
			}
		}
	]
}
