import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/reset.css";
import "@/assets/bootstrap/css/bootstrap.min.css";
// import jQuery from "jquery";
// import jQuery from "@/assets/jq/jQuery3.6.0"
// import "@/assets/bootstrap/js/bootstrap";
import "@/assets/bootstrap/js/bootstrap.min";
import router from "./router";
const app = createApp(App);
app.use(router);
app.mount("#app");
