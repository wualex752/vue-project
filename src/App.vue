<template>
  <div id="app">
    <router-view />

    <RegisterModal />
  </div>
</template>

<script>
import RegisterModal from '@/views/register.vue'
export default {
  data() {
    return {
    }
  },
  components: {
    RegisterModal
  },
  methods: {
    
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
