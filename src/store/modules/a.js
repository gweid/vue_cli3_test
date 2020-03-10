const state = {
    count: 100
}

const mutations = {
    addCount(state) {
        state.count++
    },
    reduceCount(state) {
        state.count--
    }
}

const actions = {
    handelAdd: ({
        commit // es6 解构赋值
    }) => {
        commit('addCount')
    },
    handelReduce: ({
        commit
    }) => {
        commit('reduceCount')
    }
}

export default {
    namespaced: true, // 分出来一定要开启命名空间
    state,
    mutations,
    actions
}