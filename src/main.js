import Vue from "vue";
import App from "./RemoteApp.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
