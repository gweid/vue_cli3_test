import mutations from "../mutations/b"
import actions from "../actions/b"

const state = {
    price: 100
}

export default {
    namespaced: true, // 分出来一定要开启命名空间
    state,
    mutations,
    actions
}