import Demo from './demo';
import Card from './card';
import WaveButton from './waveButton';

const components = {
    Demo,
    Card,
    WaveButton,
}

const install = function (Vue) {
    if (install.installed) return;
    Object.keys(components).forEach(key => {
        Vue.component(components[key].name, components[key]);
    });
}
const API = {
    install,
};

export default API;