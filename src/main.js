import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faFacebookF,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";

library.add(faCartShopping, faInstagram, faTwitter, faFacebookF, faPinterestP);

createApp(App).component("FontAwesomeIcon", FontAwesomeIcon).mount("#app");
