import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Optional: Import Bootstrap JS (for modals, dropdowns, etc.)
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 

import 'bootstrap-icons/font/bootstrap-icons.css';

createApp(App)
  .use(router)
  .mount('#app')






