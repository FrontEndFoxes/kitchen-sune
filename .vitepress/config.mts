import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kitchen-Sune",
  description: "curated by Front-End Foxes, Inc.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Recipes', link: '/recipes' },
      { text: 'Front-End Foxes', link: 'https://ff-school.jenlooper.com/' }
    ],
    logo: '/ff-logo.svg',
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: 'Recipes',
        items: [
          {
            text: 'Breakfast',
            items: [
              { text: 'Peanut Butter Overnight Oats', link: '/recipes/peanut-butter-overnight-oats' },
              { text: 'Baked Banana Oatmeal', link: '/recipes/baked-banana-oatmeal' },
              { text: 'Cereal with Protein Powder', link: '/recipes/cereal-with-protein-powder' },
              { text: 'Healthy Granola', link: '/recipes/healthy-granola' },
              { text: 'Turkish Menemen', link: '/recipes/turkish-menemen' },      
              { text: 'Egg Noodles', link: '/recipes/egg-noodles' }
            ]
            },
            {
              text: 'Soups & Salads',
              items: [
								{ text: 'Nigerian Oha Soup', link: '/recipes/nigerian-oha-soup' },
								{ text: 'Nigerian Okro Soup', link: '/recipes/nigeria-okro-soup' },
								{ text: 'Nigerian Melon Soup', link: '/recipes/nigerian-melon-soup' },
								{ text: 'Lebanese Tabbouleh', link: '/recipes/lebanese-tabbouleh' },
                { text: 'Nigerian Unripe Plantain Porridge', link: '/recipes/nigerian-unripe-plantain-porridge' },
              ]
              },
              {
                text: 'Entrees',
                items: [
                { text: 'Nigerian Jollof Rice', link: '/recipes/nigerian-jollof-rice'},
								{ text: 'Ukrainian Varenyky', link: '/recipes/ukrainian-varenyky'},
								{ text: 'Orange Braised Pork Chops', link: '/recipes/orange-braised-pork-chops'},
								{ text: 'Sweet Potato Lentil Curry', link: '/recipes/sweet-potato-lentil-curry'},
								{ text: 'Nigerian Bean Pudding Moin Moin', link: '/recipes/nigerian-bean-pudding-moin-moin'},
								{ text: 'Brazilian Chicken Stroganoff', link: '/recipes/brazilian-chicken-strogonoff'},
								{ text: 'Hungarian Nokedli Dumplings', link: '/recipes/hungarian-nokedli-dumplings'},
								{ text: 'Coconut Fish', link: '/recipes/coconut-fish'},
								{ text: 'Codfish Pastel', link: '/recipes/codfish-pastel'},
								{ text: 'Beef Wet Fry', link: '/recipes/beef-wet-fry'},
								{ text: 'Turkish Kofte', link: '/recipes/turkish-kofte'},
								{ text: 'Ceviche with Shrimp', link: '/recipes/ceviche-with-shrimp'},
								{ text: 'Paneer Butter Masala', link: '/recipes/paneer-butter-masala'}
                ]
                },
                {
                  text: 'Desserts',
                  items: [
                    { text: 'Pandemic Cookies', link: '/recipes/pandemic-cookies'},
                    { text: 'Strawberry Mush', link: '/recipes/strawberry-mush'},
                    { text: 'Maple Syrup Candy', link: '/recipes/maple-syrup-candy'},
                    { text: 'Gluten Free Chocolate Cupcakes', link: '/recipes/gluten-free-chocolate-cupcakes'},
                    { text: 'Chocolate Peanut Butter Pie', link: '/recipes/chocolate-peanutbutter-pie'},
                    { text: 'Holdacska Little Moon Biscuits', link: '/recipes/holdacska-little-moon-biscuit'},
                    { text: 'Nutella Cookies', link: '/recipes/nutella-cookies'},
                    { text: 'Chocolate Salami', link: '/recipes/chocolate-salami'},
                    { text: 'Vegan Chocolate Mousse', link: '/recipes/vegan-chocolate-mousse'},
                    { text: 'Sweet Rice', link: '/recipes/sweet-rice'},
                    { text: 'Banana Oatmeal Cookies', link: '/recipes/banana-oatmeal-cookies'},
                    { text: 'Apple Cake', link: '/recipes/apple-cake'},
                    { text: 'Zucchini Bread', link: '/recipes/zucchini-bread'},
                    { text: 'Brazilian Chocolate Truffles', link: '/recipes/brazilian-chocolate-truffle'}                    
                  ]
                  },
                  {
                    text: 'Everything Else',
                    items: [
                       { text: 'Nigerian Puff Puff', link: '/recipes/nigerian-puff-puff'},
                       { text: 'Roasted Brussels Sprouts', link: '/recipes/roasted-brussels-sprouts'},
                       { text: 'Argentinian Chimichurri', link: '/recipes/argentinian-chimichurri'},
                       { text: 'Cranberry Relish', link: '/recipes/cranberry-relish'},
                       { text: 'Jalebi Baby', link: '/recipes/jalebi-baby'},
                       { text: 'Dalgona Coffee', link: '/recipes/dalgona-coffee'},
                       { text: 'Peanut Butter Banana Milkshake', link: '/recipes/pb-banana-milkshake'},
                       { text: 'Colombian Pan de Bono', link: '/recipes/colombian-pan-de-bono'}
                      

                    ]
                  }
          
                ]
          },
        ],
      
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2017-present Front-End Foxes, Inc.'
    },
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/frontendfoxes/' }
    ]
  }
})
