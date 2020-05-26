<template>
  <div class>
    <cm-header title="首页"></cm-header>
    <p class="title">首页</p>
    <cube-button @click="showPicker">Picker</cube-button>
    <p class="text">哈哈哈哈哈哈哈哈哈奥哈哈或哈或哈或或或或或哈哈哈哈哈哈哈哈哈哈哈哈哈哈或哈或啊就就安静安静啊就家啊啊就就安静安静啊就就安静安静啊</p>
  </div>
</template>

<script>
import { login } from "@/api/base-api";
import cmHeader from "@/components/cm-header/cmHeader";

export default {
  components: {
    cmHeader
  },
  data() {
    return {
      column1: [
        { text: "剧毒", value: "剧毒" },
        { text: "蚂蚁", value: "蚂蚁" },
        { text: "幽鬼", value: "幽鬼" }
      ]
    };
  },
  async mounted() {},
  methods: {
    showPicker() {
      if (!this.picker) {
        this.picker = this.$createPicker({
          title: "Picker",
          data: [this.column1],
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        });
      }
      this.picker.show();
    },
    selectHandle(selectedVal, selectedIndex, selectedText) {
      console.log(selectedVal);
    },
    cancelHandle() {}
  }
};
</script>

<style lang="scss" scoped>
.title {
  color: red;
  font-size: 20px;
}

.text {
  width: 100%;
  @include ell2(1);
}
</style>