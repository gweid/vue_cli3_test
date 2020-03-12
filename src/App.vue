<template>
  <div id="app">
    <div class="app-tab-page">
      <transition name="route-move">
        <router-view></router-view>
      </transition>
    </div>
    <div v-if="showTabBar">
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
          label: "首页",
          value: "/home",
          icon: "cubeic-home"
        },
        {
          label: "新闻",
          value: "/news",
          icon: "cubeic-like"
        },
        {
          label: "我的",
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
  computed: {
    showTabBar() {
      return this.tabs.some(item => {
        if (this.$route.path == item.value) {
          return true;
        }
      });
    }
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

/* 路由动画 */
.route-move-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.route-move-leave-to {
  opacity: 0;
  position: absolute; /**解决路由切换动画位置错乱 */
  transform: translate3d(-100%, 0, 0);
}
.route-move-enter-active,
.route-move-leave-active {
  transition: all 0.3s ease;
}

.app-tab-page {
  flex: 1;
  overflow-x: hidden; /**解决路由切换动画有滚动条 */
}
.cube-tab-bar {
  background-color: #f5f5f5;
}
</style>
