import Vue from "vue";
import VueRouter from "vue-router";

import store from "../store";

import Home from "../views/Home.vue";

import Login from "../views/Login.vue";

import Landing from "../views/Landing.vue";

import Error from "../views/Error.vue";


function isAuthenticated() {
  return store.getters.getIsAuthenticated;
}

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: false,
      title: "Luís Gomes",
    },
  },

  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      requiresAuth: false,
      title: "Luís Gomes",
    },
  },

  {
    path: "*",
    name: "Error",
    component: Error,
    meta: {
      requiresAuth: false,
      title: "Erro",
    },
  },
  {
    path: "/landing",
    name: "Landing",
    component: Landing,
    meta: {
      requiresAuth: false,
      title: "Landing",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next({ name: "Login" });
  } else {
    next();
  }
});

router.afterEach((to) => {
  document.title = to.meta.title;
});

export default router;
