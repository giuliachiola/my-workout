import Vue from 'vue'
import Router from 'vue-router'
// Views
import TemplateHome from './views/TemplateHome.vue'
import TemplateSummary from './views/TemplateSummary.vue'
import TemplateAbout from './views/TemplateAbout.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'TemplateHome', component: TemplateHome, },
    { path: '/summary', name: 'TemplateSummary', component: TemplateSummary, },
    { path: '/about', name: 'TemplateAbout', component: TemplateAbout, },
  ],
})
