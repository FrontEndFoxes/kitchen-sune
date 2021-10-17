const { description } = require('../../package');

module.exports = {
	base: '/kitchen-sune/',
	title: 'Front-End Foxes Community Recipe Book',
	description: description,

	head: [
		['meta', { name: 'theme-color', content: '#3eaf7c' }],
		['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
		[
			'meta',
			{ name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
		],
	],

	themeConfig: {
		repo: '',
		editLinks: true,
		lastUpdated: true,
		nav: [
			{
				text: 'Recipes',
				link: '/recipes/',
			},
			{
				text: 'Front-End Foxes',
				link: 'https://frontendfoxes.school',
			},
			{
				text: 'GitHub',
				link: 'https://github.com/frontendfoxes/kitchen-sune',
			},
		],
		sidebar: {
			'/recipes/': [
				{
					title: 'Recipes',
					collapsable: false,
					children: [
						'',
						'nigerian-puff-puff',
						'roasted-brussels-sprouts',
						'argentinian-chimichurri',
						'nigerian-jollof-rice',
						'cereal-with-protein-powder',
						'ukrainian-varenyky',
						'cranberry-relish',
						'pandemic-cookies',
						'orange-braised-pork-chops',
						'sweet-potato-lentil-curry',
						'nigerian-unripe-plantain-porridge',
						'strawberry-mush',
						'jalebi-baby',
						'dalgona-coffee',
						'maple-syrup-candy',
						'gluten-free-chocolate-cupcakes',
						'chocolate-peanutbutter-pie',
						'nigerian-bean-pudding-moin-moin',
						'healthy-granola',
						'pb-banana-milkshake'
					],
				},
			],
		},
	},

	/**
	 * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
	 */
	plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
};
