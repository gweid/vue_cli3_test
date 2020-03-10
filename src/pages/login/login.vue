<template>
  <div class>
    <div class="title">
      <p class="title-txt">登录</p>
    </div>
    <div class="login-ipt">
      <cube-input v-model="username"></cube-input>
    </div>
    <div class="login-ipt">
      <cube-input v-model="password" type="password" eye="true"></cube-input>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      username: "",
      password: ""
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.title {
  width: 100%;
  margin-top: 30px;

  .title-txt {
    width: 100%;
    text-align: center;
    color: #333;
    font-size: 40px;
    font-weight: 700;
  }
}

.login-ipt {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.cube-input {
  width: 250px;
}
</style>