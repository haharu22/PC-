import { createRouter, createWebHistory } from "vue-router";
import MainView from "../components/main.vue";
import Login from "@/components/login.vue";
import Register from "@/components/register.vue";
import Forgot from "@/components/forgot.vue";
import TopPage from "@/components/top_page.vue";
import Inquiry from "@/components/inquiry.vue";
import NoticeView from "@/components/NoticeView.vue";
import ChatView from "@/components/ChatView.vue";

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
    component: TopPage,
  },
  {
    path: "/inquiry",
    name: "inquiry",
    component: Inquiry,
  },
  {
    path: "/main",
    name: "main",
    component: MainView,
  },
  {
    path: "/notice",
    name: "notice",
    component: NoticeView,
  },
  {
    path: "/chat",
    name: "chat",
    component: ChatView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
