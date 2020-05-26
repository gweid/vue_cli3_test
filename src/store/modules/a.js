import mutations from "../mutations/a"
import actions from "../actions/a"

const state = {
    count: 100
}

export default {
    namespaced: true, // 分出来一定要开启命名空间
    state,
    mutations,
    actions
}