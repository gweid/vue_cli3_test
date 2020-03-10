<template>
  <div class>
    <p>新闻页</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  // ---------------------组件内部路由守卫
  beforeRouteEnter(to, from, next) {
    console.log("进来", this);  // 这个获取不到 this
    next();
  },
  beforeRouteLeave(to, from, next) {
    // 主要用来在一些需要存储信息的页面，错误离开数据丢失
    console.log("离开", this);  // 这个能获取到 this
    next();
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="" scoped>
</style>