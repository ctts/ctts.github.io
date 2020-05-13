import Alert from './vue-common-alert.vue'
const alert = {};
alert.install = function (Vue) {
    const vueCommonAlert = Vue.extend(Alert);
    const instance = new vueCommonAlert({
        el: document.createElement('div')
    });
    document.body.appendChild(instance.$el);

    Vue.prototype.$vcAlert = (options) => {
        return instance.showAlert(options)
    }
};
export default alert