// import { createApp } from "vue";
// import App from "./App.vue";
// import store from "./store";
// import router from "./router";
// import "./assets/css/nucleo-icons.css";
// import "./assets/css/nucleo-svg.css";
// import ArgonDashboard from "./argon-dashboard";

// const appInstance = createApp(App);
// appInstance.use(store);
// appInstance.use(router);
// appInstance.use(ArgonDashboard);
// appInstance.mount("#app");


// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import ArgonDashboard from "./argon-dashboard.js";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useAppStore } from "@/store/index.js";

import App from './App.vue'
import router from './router'

const app = createApp(App)
// const appStore = useAppStore();

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
// app.use(useAppStore())
app.use(router)
app.use(ArgonDashboard)

app.mount('#app')
