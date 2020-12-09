import { createRouter, createWebHistory } from "vue-router";

import Home from "/@/views/Home.vue";
import Index from "/@/views/Index/index.vue"
const routes = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "",
        name: "Index",
        component: Index,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory('/week3/'),
  routes,
});

export default router;
