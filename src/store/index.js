import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from "./modules/a"
import moduleB from "./modules/b"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    moduleA,
    moduleB
  }
})

// export default new Vuex.Store({
//   state: {
//     count: 100,
//   },
//   mutations: {
//     addCount(state) {
//       state.count++
//     },
//     reduceCount(state) {
//       state.count--
//     }
//   },
//   actions: {
//     // 通过 commit 操作 mutations
//     handelAdd: ({
//       commit // es6 解构赋值
//     }) => {
//       commit('addCount')
//     },
//     handelReduce: ({
//       commit
//     }) => {
//       commit('reduceCount')
//     }
//   },
//   modules: {

//   }
// })
