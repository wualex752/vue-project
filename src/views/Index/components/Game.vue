<template>
  <div>
    <router-link class="game__right__item" to="#">
      <img
        class="img-fluid"
        src="https://h5static.0am08m.com/assets/v4_homeVenue/yaboSports.png.webp?version=1583111633321"
        alt
      />
    </router-link>
    <router-link class="game__right__item" to="#">
      <img
        class="img-fluid"
        src="https://h5static.0am08m.com/assets/v4_homeVenue/yaboSports.png.webp?version=1583111633321"
        alt
      />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Game",
  creadted() {
  }
};
</script>

<style lang="scss" scoped>
.game__right__item {
  display: block;
  padding-bottom: 1rem;
  img {
    height: 266px;
  }
}
</style>