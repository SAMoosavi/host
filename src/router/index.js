import Vue from "vue";
import VueRouter from "vue-router";
import EmailVerify from "../views/EmailVerify.vue";
import Home from "../views/Home.vue";
import LoginRegister from "../views/LoginRegister.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import ResetPassword from "../views/ResetPassword.vue";

Vue.use(VueRouter);

//rout
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login-register",
    name: "loginRegister",
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
  {
    path: "/reset-password",
    name: "resetPassword",
    component: ResetPassword,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

//middleware
router.beforeEach((to, from, next) => {
  if (to.name == "Home") {
    if (!localStorage.token) {
      return next({ name: "loginRegister" });
    }
  }
  if (to.name != "Home") {
    if (localStorage.token) {
      return next({ name: "Home" });
    }
  }
  return next();
});

export default router;
