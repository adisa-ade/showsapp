import {createRouter, createWebHistory} from "vue-router";
import SuspenseView from "@/views/SuspenseView.vue"
import CardSuspenseView from "@/views/CardSuspense.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
      {
        path: '/',
        name: 'home',
        component: SuspenseView
      },
      {
      path: '/character/:id',
      name: 'card',
      component:CardSuspenseView
    },
  ]
  })
  export default router