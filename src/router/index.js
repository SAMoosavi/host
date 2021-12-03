import Vue from "vue";
import VueRouter from "vue-router";
import EmailVerify from "../views/EmailVerify.vue";
import Home from "../views/Home.vue";
import LoginRegister from "../views/LoginRegister.vue";
import ForgotPassword from "../views/ForgotPassword.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login-register",
    name: "login",
    component: LoginRegister,
  },
  {
    path: "/email-verify",
    name: "emailVerify",
    component: EmailVerify,
  },
  {
    path: "/forgot-password",
    name: "forgotPassword",
    component: ForgotPassword,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
