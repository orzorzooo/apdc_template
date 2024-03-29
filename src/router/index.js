import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import landing from "@/views/landing/index.vue";
import project from "@/views/projects/project.vue";
import projects from "@/views/projects/index.vue";
import autoPartAR from "@/views/autoPartAR/index.vue";

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
    // component: () => import("@/views/projects/project.vue"),
    component: project,
    props: true,
  },
  {
    path: "/projects",
    name: "projects",
    // component: () => import("@/views/projects/project.vue"),
    component: projects,
    props: true,
    // meta: { disableNavEffect: true },
  },
  {
    path: "/panoProjects",
    name: "panoProjects",
    component: () => import("@/views/panoProjects/index.vue"),
    props: true,
  },
  {
    path: "/panoProjects/pano/:id/:index?",
    name: "pano",
    component: () => import("@/views/panoProjects/pano.vue"),
    props: true,
  },
  {
    path: "/autoPartVR",
    name: "autoPartVR",
    component: () => import("@/views/autoPartVR/index.vue"),
    meta: { hideFooter: true },
  },
  {
    path: "/autoPartAR",
    name: "autoPartAR",
    component: autoPartAR,
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
