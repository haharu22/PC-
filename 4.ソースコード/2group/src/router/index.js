import { createRouter, createWebHistory } from "vue-router";
import MainView from "../components/main.vue";
import Login from "@/components/login.vue";
import Register from "@/components/register.vue";
import Forgot from "@/components/forgot.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/forgot",
    name: "forgot",
    component: Forgot,
  },
  {
    path: "/top",
    name: "top",
    component: MainView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
