import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo, {
  container: "body",
  duration: 10,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
//MODAL
import { ModalPlugin } from 'bootstrap-vue'
Vue.use(ModalPlugin)
import { ButtonPlugin } from 'bootstrap-vue'
//BUTTON
Vue.use(ButtonPlugin)
// Collapse
import { CollapsePlugin } from 'bootstrap-vue'
Vue.use(CollapsePlugin)
//Card
import { CardPlugin } from 'bootstrap-vue'
Vue.use(CardPlugin)
// SIDEBAR
import { SidebarPlugin } from 'bootstrap-vue'
Vue.use(SidebarPlugin)
// PROGRESS
import { ProgressPlugin } from 'bootstrap-vue'
Vue.use(ProgressPlugin)
// TABS
import { TabsPlugin } from 'bootstrap-vue'
Vue.use(TabsPlugin)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  BootstrapVue,
  IconsPlugin,
  render: (h) => h(App),
}).$mount("#app");
