import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/bootstrap/css/bootstrap.min.css";
import "@/assets/reset.css";

// import jQuery from "jquery";
// import jQuery from "@/assets/jq/jQuery3.6.0"
// import "@/assets/bootstrap/js/bootstrap";
import "@/assets/bootstrap/js/bootstrap.min";
import router from "./router";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import fastClick from "fastclick";
fastClick.attach(document.body);

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount("#app");
