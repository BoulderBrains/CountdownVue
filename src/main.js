import Vue from 'vue'
import App from './App.vue'
import VueCountdown from '@chenfengyuan/vue-countdown';

// while in dev mode keep productionTip set to false
Vue.config.productionTip = false

// adding vueCountdown to the Vue instance
Vue.component(VueCountdown.name, VueCountdown);

// render and mount the app
new Vue({render: h => h(App),}).$mount('#app');
