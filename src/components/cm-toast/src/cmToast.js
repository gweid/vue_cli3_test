import Vue from "vue"
import cmToast from "./cmToast.vue"

const CmToastConstructor = Vue.extend(cmToast)

const toast = function (option = {}) {
    const cmToastInstance = new CmToastConstructor({
        data: option
    }).$mount()
    
    document.body.appendChild(cmToastInstance.$el)

    return cmToastInstance
}

export default toast