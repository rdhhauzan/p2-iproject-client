import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

// import './assets/main.css'

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(VueSweetalert2);

app.use(pinia);
app.use(router);

app.mount("#app");
