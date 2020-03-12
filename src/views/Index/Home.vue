<template>
  <div class="home">
    <router-view />

    <footer>
      <ul>
        <li 
          @click="setActive('index')"
          :class="{ active: activeItem == 'index' }">
          <router-link :to="{ name: 'game', params: {vendor: 'sport'} }">
            <div class="webp"></div>
            首頁
          </router-link>
        </li>
        <li
          @click="setActive('discount')"
          :class="{ active: activeItem == 'discount' }">
          <router-link :to="{ name: 'discount', params: {category: 'all'} }">
            <div class="webp"></div>
            優惠
          </router-link>
        </li>
        <li
          @click="setActive('customer')"
          :class="{ active: activeItem == 'customer' }">
          <router-link :to="{ name: 'customer' }">
            <div class="webp"></div>
            客服
          </router-link>
        </li>
        <li
          @click="setActive('myCenter')"
          :class="{ active: activeItem == 'myCenter' }">
          <router-link :to="{ name: 'myCenter' }">
            <div class="webp"></div>
            我的
          </router-link>
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
      active: 0,
      activeItem: 'index',
    };
  },
  computed: {
    switchRegisterModal() {
      return this.$store.state.pageIndex.switchRegisterModal;
    }
  },
  methods: {
    setActive(item) {
      // 若註冊燈箱開啟，且切換選單，就關閉註冊燈箱。
      if (this.switchRegisterModal) { this.closeModal(); }
      this.activeItem = item;
    },
    closeModal() {
      this.$store.dispatch("pageIndex/switchRegisterModal", this.switchModal);
    }
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
    border-top-left-radius: 6.4rem;
    border-top-right-radius: 6.4rem;
    box-shadow: 0 0 1.2rem 0 rgba(0, 0, 0, 0.2);
    background: hsla(0, 0%, 100%, 0.9);
    backdrop-filter: blur(0.2rem);
    width: 100%;
    height: 100%;
  }
  li {
    flex: 1;
    position: relative;
    font-size: 2.8rem;
    transition: all .3s;

    &:first-child div {
      background-position: -1rem -1rem;
    }

    &:nth-child(2) div {
      background-position: -12rem -1rem;
    }
    &:nth-child(3) div {
      background-position: -24rem -1rem;
    }
    &:nth-child(4) div {
      background-position: -45rem -1rem;
    }

    &.active {

      &:first-child div {
        background-position: -56rem -1rem;
      }
      &:nth-child(2) div {
        background-position: -68rem -1rem;
      }
      &:nth-child(3) div {
        background-position: -79rem -1rem;
      }
      &:nth-child(4) div {
        background-position: -90rem -1rem;
      }
      a {
        color: #d2b79c;
      }

    }

    div {
      background-image: url("hhttps://h5static.0am08m.com/assets/v4_common/tabBar.png");
      background-image: url("https://h5static.0am08m.com/assets/v4_common/tabBar.png.webp?version=1583773880435");
      background-repeat: no-repeat;
      width: 9rem;
      height: 9rem;
      margin: 0 auto;
      background-size: 111rem;
    }

    a {
      font-size: 3.6rem;
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
