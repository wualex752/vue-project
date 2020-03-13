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
    this.restoreVuexData();
  },
  methods: {
    restoreVuexData() {
      let data = sessionStorage.getItem("vuex");
      if (data) {
        this.$store.replaceState(
          Object.assign({}, this.$store.state, JSON.parse(data))
        );
        sessionStorage.removeItem(data);
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
