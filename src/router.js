import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import Impressum from './views/Impressum.vue'
import Privacy from './views/Privacy.vue'

// PROJECTS
import Projects from './views/Projects.vue'
import mediacamp from './views/projects/mediacamp.vue'
import meaningfulanimations from './views/projects/meaningfulanimations.vue'
import augsburginteilen from './views/projects/augsburginteilen.vue'
import sam from './views/projects/sam.vue'

// WORKSHOP
import Workshop from './views/Workshop.vue'
import braun from './views/workshop/braun.vue'

// DARKROOM
import Darkroom from './views/Darkroom.vue'

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
      path: '/projects/mediacamp',
      name: 'mediacamp',
      component: mediacamp
    },
    {
      path: '/projects/meaningfulanimations',
      name: 'meaningfulanimations',
      component: meaningfulanimations
    },
    {
      path: '/projects/augsburginteilen',
      name: 'augsburginteilen',
      component: augsburginteilen
    },
    {
      path: '/projects/sam',
      name: 'sam',
      component: sam
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
    {
      path: '/workshop/braun',
      name: 'braun',
      component: braun
    },

    // DARKROOM //
    {
      path: '/darkroom',
      name: 'darkroom',
      component: Darkroom
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
