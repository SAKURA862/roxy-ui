import Vue from 'vue';
import App from './App.vue';

import '../components/css/waveButton.css';
import WaveButton from '../components/lib/waveButton/index'

Vue.use(WaveButton);

// import 'roxy-ui/dist/css/index.css';
// import RUI from 'roxy-ui';
// Vue.use(RUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
