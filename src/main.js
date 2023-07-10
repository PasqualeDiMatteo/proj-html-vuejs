import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

library.add(faCartShopping);

createApp(App).component("FontAwesomeIcon", FontAwesomeIcon).mount("#app");
