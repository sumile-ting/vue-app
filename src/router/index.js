import Vue from 'vue';
import Router from 'vue-router';
//import store from "../store";
//登录
import Login from "../components/Login";
import Layout from "../views/layout";

//首页
import Home from "./modules/home";

Vue.use(Router);

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router =  new Router({
routes:[
  {
      path: '/',
      name: 'Login',
      component: Login
  },
  {
    path: "/Main",
    component: Layout,
    redirect: () => {
      return {path: '/myPortal/protal-self'};
    },
    children: [
      Home
    ]
  }
]})

export default router;
