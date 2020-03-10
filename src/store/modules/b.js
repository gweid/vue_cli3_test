const state = {
    price: 100
}

const mutations = {
    addPrice(state) {
        state.price++
    },
    reducePrice(state) {
        state.price--
    }
}

const actions = {
    handelPriceAdd: ({
        commit // es6 解构赋值
    }) => {
        commit('addPrice')
    },
    handelPriceReduce: ({
        commit
    }) => {
        commit('reducePrice')
    }
}

export default {
    namespaced: true, // 分出来一定要开启命名空间
    state,
    mutations,
    actions
}