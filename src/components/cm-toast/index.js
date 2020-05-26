import cmToast from "./src/cmToast"

const install = function (Vue) {
    if (install.installed) return

    install.installed = true;

    Vue.prototype.$toast = cmToast;
}

export default {
    install
}