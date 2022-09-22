const { description } = require("../../package");

module.exports = {
  base: "/kitchen-sune/",
  title: "Front-End Foxes Community Recipe Book",
  description: description,

  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
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
						{
							title: 'Breakfast',
							children:[
								'peanut-butter-overnight-oats',
								'baked-banana-oatmeal',
								'cereal-with-protein-powder',
								'healthy-granola',
								'turkish-menemen'
						
							]
						},
						{
							title: 'Soups & Salads',
							children:[
								'nigerian-unripe-plantain-porridge',
								'nigerian-oha-soup',
								'nigeria-okro-soup',
								'nigerian-melon-soup',
								'lebanese-tabbouleh'
							]
						},

						{
							title: 'Entrees',
							children:[
								'nigerian-jollof-rice',
								'ukrainian-varenyky',
								'orange-braised-pork-chops',
								'sweet-potato-lentil-curry',
								'nigerian-bean-pudding-moin-moin',
								'brazilian-chicken-strogonoff',
								'hungarian-nokedli-dumplings',
								'coconut-fish',
								'codfish-pastel',
								'beef-wet-fry',
								'turkish-kofte',
							]
						},
						{
							title: 'Desserts',
							children:[
								'pandemic-cookies',
								'strawberry-mush',
								'maple-syrup-candy',
								'gluten-free-chocolate-cupcakes',
								'chocolate-peanutbutter-pie',
								'holdacska-little-moon-biscuit',
								'nutella-cookies',
								'chocolate-salami',
								'vegan-chocolate-mousse',
								'sweet-rice',
								'apple-cake',
							]
						},
						{
							title: 'Everything Else',
							children:[
								'nigerian-puff-puff',
								'roasted-brussels-sprouts',
								'argentinian-chimichurri',
								'cranberry-relish',
								'jalebi-baby',
								'dalgona-coffee',
								'pb-banana-milkshake',
								'colombian-pan-de-bono',
						
							]
						},
           
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
