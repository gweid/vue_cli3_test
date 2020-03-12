<template>
  <div class>
    <div class="title">
      <p class="title-txt">登录</p>
    </div>
    <div class="login-ipt">
      <cube-input v-model="username"></cube-input>
    </div>
    <div class="login-ipt">
      <cube-input v-model="password" type="password" :eye="{open: false}"></cube-input>
    </div>
    <div class="login-btn">
      <cube-button @click="login">登录</cube-button>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/base-api";
import { lStorage } from "@/common/storage";

export default {
  components: {},
  data() {
    return {
      username: "15571204261",
      password: "123456"
    };
  },
  mounted() {},
  methods: {
    async login() {
      try {
        let ret = await login({
          mobile: this.username,
          password: this.password
        });

        lStorage.setItem("token", ret.data.token);

        const path = this.$route.query.redirect || "/"; // 在路由守卫配置了重定向的地址, 也可能直接就是登录页面进来，没有 redirect
        console.log(path);

        this.$router.push({ path: path });
      } catch (error) {}
    }
  }
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

.login-btn {
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.cube-input {
  width: 250px;
}
.cube-btn {
  width: 200px;
  padding: 0;
  height: 40px;
  line-height: 40px;
}
</style>