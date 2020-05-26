<template>
  <div class="cm-toast" v-if="isShow">
    <div class="toast-b">
      <span class="toast-txt">{{title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isShow: false
    };
  },
  computed: {},
  mounted() {
    this.isShow = true;
    const duration = this.duration || 1000;
    setTimeout(() => {
      this.isShow = false;
    }, duration);
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.cm-toast {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  left: 0;
  z-index: 99999;

  .toast-b {
    width: 90%;
    height: 36px;
    border-radius: 4px;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;

    .toast-txt {
      font-size: 14px;
      color: #333;
    }
  }
}
</style>