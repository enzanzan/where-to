import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import fastclick from "fastclick";
import store from "./store";
import './assets/styles/reset.css';
import './assets/styles/border.css';

Vue.config.productionTip = false;
fastclick.attach(document.body);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
