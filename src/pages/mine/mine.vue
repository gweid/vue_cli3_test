<template>
  <div class>
    <p>我的页面</p>
    <p>{{txt | formatLen(5)}}</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  components: {},
  data() {
    return {
      txt: "测试过滤器啊啊啊啊啊啊啊"
    };
  },
  mounted() {
    // 路由中设置了 props: true, 可以直接通过在 props 中接收 :id
    console.log(this.id);
    console.log(this.$route);
  },
  methods: {}
};
</script>

<style lang="" scoped>
</style>
