import Vue from 'vue'
import Router from 'vue-router'
// Views
import TemplateHome from './views/TemplateHome.vue'
import TemplateAbout from './views/TemplateAbout.vue'
import TemplateSheets from './views/TemplateSheets.vue'
import TemplateSheet from './views/TemplateSheet.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'TemplateHome', component: TemplateHome, },
    { path: '/sheets', name: 'TemplateSheets', component: TemplateSheets, },
    { path: '/sheet/:id', name: 'TemplateSheet', component: TemplateSheet, },
    { path: '/about', name: 'TemplateAbout', component: TemplateAbout, },
  ],
})
