import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import Impressum from './views/Impressum.vue'
import Privacy from './views/Privacy.vue'

// PROJECTS
import Projects from './views/Projects.vue'
import Project01 from './views/projects/Project01.vue'
import Project02 from './views/projects/Project02.vue'
import Project03 from './views/projects/Project03.vue'
import Project04 from './views/projects/Project04.vue'

// WORKSHOP
import Workshop from './views/Workshop.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // PROJECTS //
    { path: '/', redirect: '/projects' },  
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/projects/project01',
      name: 'project01',
      component: Project01
    },
    {
      path: '/projects/project02',
      name: 'project02',
      component: Project02
    },
    {
      path: '/projects/project03',
      name: 'project03',
      component: Project03
    },
    {
      path: '/projects/project04',
      name: 'project04',
      component: Project04
    },

    // ABOUT //
    {
      path: '/about',
      name: 'about',
      component: About
    },

    // WORKSHOP //
    {
      path: '/workshop',
      name: 'workshop',
      component: Workshop
    },

    // Impressum //
    {
      path: '/impressum',
      name: 'impressum',
      component: Impressum
    },

    // Datenschutz //
    {
      path: '/privacy',
      name: 'privacy',
      component: Privacy
    },

    // 404 PAGE //
    { path: '/404', component: NotFound },
    { path: '*', redirect: '/404' },  
  ],
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 300)
    })
  }
});
