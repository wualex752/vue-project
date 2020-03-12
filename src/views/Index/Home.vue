<template>
  <div class="home">
    <router-view />

    <footer>
      <ul>
        <li>
          <div></div>
          <router-link :to="{ name: 'game', params: {vendor: 'sport'} }">首頁</router-link>
        </li>
        <li>
          <div></div>
          <router-link :to="{ name: 'discount', params: {category: 'all'} }">優惠</router-link>
        </li>
        <li>
          <div></div>
          <router-link :to="{ name: 'customer' }">客服</router-link>
        </li>
        <li>
          <div></div>
          <router-link :to="{ name: 'myCenter' }">我的</router-link>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style lang="scss" scoped>
footer {
  position: fixed;
  right: 0;
  bottom: 0;
  width: 100%;
  background: white;
  height: 17.96rem;
  padding: 1.2rem 0rem;
  z-index: 100;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
    box-shadow: 0 0 0.1rem 0 rgba(0, 0, 0, 0.2);
    background: hsla(0, 0%, 100%, 0.9);
    backdrop-filter: blur(0.2rem);
    width: 100%;
    height: 100%;
  }
  li {
    flex: 1;
    position: relative;
    font-size: 2.8rem;
    div {
      background-image: url("https://h5static.0am08m.com/assets/v4_common/tabBar.png.webp?version=1583773880435");
      background-repeat: no-repeat;
      width: 9rem;
      height: 9rem;
      margin: 0 auto;
      background-size: 111rem;

      &:first-child {
        background-position: -1rem -1rem;
      }
      &:nth-child(2) {
        background-position: -1rem -1rem;
      }
      &:nth-child(3) {
        background-position: -1rem -1rem;
      }
      &:nth-child(4) {
        background-position: -1rem -1rem;
      }
    }
    a {
      font-size: 0.2rem;
    }
  }

  a {
    color: #333;
    &:hover,
    &:active {
      color: darken(#333, 30%);
    }
  }
}
</style>
