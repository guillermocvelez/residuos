import Vue from "vue";
import VueRouter from "vue-router";
import Organicos from "../views/Organicos.vue";
import Inorganicos from "../views/Inorganicos.vue"
import Dashboards from "../views/Dashboards.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "organicos",
    component: Organicos,
  },
  {
    path: "/inorganicos",
    name: "Inorganicos",
    component: Inorganicos,   
  },
  {
    path: "/dashboards",
    name: "Dashboards",
    component: Dashboards,   
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
