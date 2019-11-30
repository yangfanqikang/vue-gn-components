import Vue from "vue";
import VueRouter from "vue-router";
import Magnifier from "../views/magnifier";
import Home from "../views/home";
import CheckIn from '../views/checkIn';
import ImgLabel from '../views/img-label';
import SlideCheck from '../views/slide-check';
import Watemark from '../views/watermark';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/magnifier",
    component: Magnifier
  },
  {
    path: "/checkIn",
    component: CheckIn
  },
  {
    path: "/ImgLabel",
    component: ImgLabel
  },
  {
    path: '/slide-check',
    component: SlideCheck
  }, {
    path: '/watemark',
    component: Watemark
  }
];

const router = new VueRouter({
  routes
});

export default router;
