import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/writing",
      name: "writing",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Writing.vue")
    },
    {
      path: "/projects",
      name: "projects",
      component: () =>
        import(/* webpackChunkName: "projects" */ "./views/Projects.vue")
    }
  ]
});
