module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'airbnb-base',
	],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	rules: {
		'prettier/prettier': 'off',
		'no-console': 'off',
		'spaced-comment': 'off',
		'no-else-return': 'off',
		indent: 'off',
    "no-tabs": 'off',
	quotes: 'off',
	"linebreak-style": 'off',
	},
	env: {
		browser: true,
	},
};
