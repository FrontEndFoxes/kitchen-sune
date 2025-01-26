import DefaultTheme from 'vitepress/theme'

import TagLinks from '../components/TagLinks.vue'
import './custom.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('TagLinks', TagLinks)
  }
}

