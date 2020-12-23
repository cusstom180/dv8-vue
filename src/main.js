import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router'


createApp(App).use(router).mount('#app')

// import Vue from 'vue';
// import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
// import App from './App.vue';

// // Import the styles directly. (Or you could add them via script tags.)
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';

// Vue.use(BootstrapVue);

// new Vue({
//   el: '#app',
//   render: h => h(App)
// });

