import WaveButton from './src/main.vue'

WaveButton.install = function (Vue) {
    Vue.component(WaveButton.name, WaveButton);
}

export default WaveButton