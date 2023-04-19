import Vue from "vue";
import Provider from "./components/Provider.vue";
import Actions from "./components/Actions.vue";
import List from "./components/List.vue";

import "./assets/main.css";

new Vue({
  components: {
    Provider,
    Actions,
    List,
  },
}).$mount("#app");
