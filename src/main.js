import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.component("alert", require("./components/alert.vue").default);
Vue.component("button-counter", {
  data: function() {
    return {
      count: 0
    };
  },
  template:
    '<button v-on:click="count++">You licked me {{ count }} times.</button>'
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
