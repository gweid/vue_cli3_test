<template>
  <div class="news-detail">
    <button @click="emitEvent">事件发布</button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {
    emitEvent() {
      this.$eventBus.emit("emitEvent", { type: "tip" });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>