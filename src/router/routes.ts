import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "MainLayout",
    redirect: "/registration",
    component: () =>
      import(/* webpackChunkName: "landing" */ "../layouts/MainLayout.vue"),
    children: [
      {
        path: "/login",
        name: "Login",
        component: () =>
          import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
      },
      {
        path: "/registration",
        name: "Registration",
        component: () =>
          import(
            /* webpackChunkName: "registration" */ "../views/RegistrationView.vue"
          ),
      },
    ],
  },
];

export default routes;
