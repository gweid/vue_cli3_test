<template>
  <div class>
    <p>首页</p>
  </div>
</template>

<script>
import { login } from "@/api/base-api";

export default {
  components: {},
  data() {
    return {
      username: "15571204261",
      password: "123456"
    };
  },
  async mounted() {
    let ret = await login({
      mobile: this.username,
      password: this.password
    });
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>