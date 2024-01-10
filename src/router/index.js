import {createRouter, createWebHistory} from "vue-router";
import SuspenseView from "@/views/SuspenseView.vue"
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
      {
        path: '/',
        name: 'home',
        component: SuspenseView
      }      
  ]
  })
  export default router