import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import TodoApp from './TodoApp.vue'
import RemoteTodoApp from './RemoteTodoApp.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/local', component: TodoApp },
    { path: '/remote', component: RemoteTodoApp },
  ]
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
