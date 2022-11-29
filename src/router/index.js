import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import landing from "@/views/landing/index.vue";
import project from "@/views/project/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "landing",
    component: landing,
  },
  {
    path: "/projects/project/:id",
    name: "project",
    component: () => import("@/views/project/index.vue"),
    props: true,
  },
  {
    path: "/panoProjects",
    name: "panoProjects",
    component: () => import("@/views/panoProjects/index.vue"),
    props: true,
  },
  {
    path: "/autoPartVR",
    name: "autoPartVR",
    component: () => import("@/views/autoPartVR/index.vue"),
    meta: { hideFooter: true },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router;
