import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-grid.css'
import 'bootstrap/dist/css/bootstrap-reboot.css'

// Import components
import Overview from './components/Overview'
import NoteEditor from './components/NoteEditor'

// Add components to router
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Overview, name: 'Overview' },
    { path: '/addNote', component: NoteEditor, name: 'AddNote' },
    { path: '/editNote/:id', component: NoteEditor, name: 'EditNote' }
  ]
})

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
