<template>
  <div class>
    <p class="title">首页</p>
    <cube-button @click="showPicker">Picker</cube-button>
  </div>
</template>

<script>
import { login } from "@/api/base-api";

export default {
  components: {},
  data() {
    return {
      username: "15571204261",
      password: "123456",
      column1: [
        { text: "剧毒", value: "剧毒" },
        { text: "蚂蚁", value: "蚂蚁" },
        { text: "幽鬼", value: "幽鬼" }
      ]
    };
  },
  async mounted() {
    let ret = await login({
      mobile: this.username,
      password: this.password
    });
  },
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
</style>