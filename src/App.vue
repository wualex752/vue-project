<template>
  <div id="app">
    <router-view />

    <RegisterModal />
  </div>
</template>

<script>
import RegisterModal from "@/views/register.vue";
export default {
  data() {
    return {};
  },
  components: {
    RegisterModal
  },
  created() {
    this.detectWebp();
  },
  methods: {
    detectWebp() {
      var canvas, supportCanvas;

      canvas = document.createElement("canvas");
      supportCanvas = canvas.getContext && canvas.getContext("2d");

      if (supportCanvas) {
        canvas.width = canvas.height = 1;
        return canvas.toDataURL("image/webp", 0.01).indexOf("image/webp") != -1;
      } else {
        alert('不支援webp')
        return false;
      }
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
</style>
