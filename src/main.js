import Vue from "vue";
import App from "./App.vue";
import Home from "./components/Home";

Vue.component("app-servers", Home);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
