<template>
  <div class>
    <p>新闻页</p>
    <div>
      <button @click="reduce">-</button>
      <span>{{$store.state.count}}</span>
      <button @click="add">+</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from "vuex"; // vuex 的 action 高级用法， 映射

export default {
  components: {},
  data() {
    return {};
  },
  // ---------------------组件内部路由守卫
  beforeRouteEnter(to, from, next) {
    console.log("进来", this); // 这个获取不到 this
    next();
  },
  beforeRouteLeave(to, from, next) {
    // 主要用来在一些需要存储信息的页面，错误离开数据丢失
    console.log("离开", this); // 这个能获取到 this
    next();
  },
  mounted() {},
  methods: {
    // add() {
    //   // this.$store.dispatch("handelAdd");  // dispatch 操作 action
    //   this.$store.commit("addCount"); // commit 操作 mutations
    // },
    // reduce() {
    //   this.$store.commit("reduceCount");
    // },
    ...mapActions({
      add: "handelAdd",  // add 方法映射 vuex 的 action 的 handelAdd
      reduce: "handelReduce"
    })
  }
};
</script>

<style lang="" scoped>
</style>