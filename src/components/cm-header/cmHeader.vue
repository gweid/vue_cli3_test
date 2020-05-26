<template>
  <div class="cm-header" :style="{'background-color': bgColor}">
    <div class="left" @click="leftClick">
      <slot name="left"></slot>
    </div>
    <div class="title">{{title}}</div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    bgColor: {
      type: String,
      default: "#fff"
    }
  },
  data() {
    return {};
  },
  methods: {
    leftClick() {
      this.$emit("leftClick");
    }
  }
};
</script>

<style lang="scss" scoped>
.cm-header {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
}
.left {
  flex: 1;
  height: 50px;
}
.right {
  flex: 1;
  height: 50px;
}
.title {
  flex: 4;
  color: #333;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: center;
}
</style>