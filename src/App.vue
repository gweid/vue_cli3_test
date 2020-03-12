<template>
  <div id="app">
    <div class="app-tab-page">
      <transition>
        <router-view></router-view>
      </transition>
    </div>
    <div v-if="$route.path!='/login'">
      <cube-tab-bar v-model="selectedLabel" :data="tabs" @click="clickHandler"></cube-tab-bar>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      selectedLabel: "/home",
      tabs: [
        {
          label: "Home",
          value: "/home",
          icon: "cubeic-home"
        },
        {
          label: "News",
          value: "/news",
          icon: "cubeic-like"
        },
        {
          label: "Mine",
          value: "/mine",
          icon: "cubeic-person"
        }
      ]
    };
  },
  created() {
    // 主要是刷新的时候让下面对应的的选中
    this.selectedLabel = this.$route.path;
  },
  watch: {
    $route(route) {
      // 主要是刷新的时候让下面对应的的选中
      this.selectedLabel = route.path;
    }
  },
  methods: {
    clickHandler(val) {
      this.$router.push(val);
    }
  }
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.app-tab-page {
  flex: 1;
}
.cube-tab-bar {
  background-color: #f5f5f5;
}
</style>
