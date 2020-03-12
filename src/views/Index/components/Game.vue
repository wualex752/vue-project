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
  width: 100%;
  height: 2.8rem;
  border-radius: .12rem;
  margin-bottom: .2rem;
  box-shadow: 0 0.04rem 0.28rem 0 rgba(65,70,92,.3);

  &:last-child {
    margin-bottom: 0;
  }

  img {
    width: 100%;
    height: 100%;
  }
}
</style>