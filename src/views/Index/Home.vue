<template>
  <div class="home">
    <router-view />

    <footer>
      <ul>
        <li @click="setActive('index')" :class="{ active: activeItem == 'index' }">
          <router-link :to="{ name: 'game', params: {vendor: 'sport'} }">
            <div class="webp"></div>
            首頁
          </router-link>
        </li>
        <li @click="setActive('discount')" :class="{ active: activeItem == 'discount' }">
          <router-link :to="{ name: 'discount', params: {category: 'all'} }">
            <div class="webp"></div>優惠
          </router-link>
        </li>
        <li @click="setActive('customer')" :class="{ active: activeItem == 'customer' }">
          <router-link :to="{ name: 'customer' }">
            <div class="webp"></div>客服
          </router-link>
        </li>
        <li @click="setActive('myCenter')" :class="{ active: activeItem == 'myCenter' }">
          <router-link :to="{ name: 'myCenter' }">
            <div class="webp"></div>我的
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
      activeItem: "index"
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
      if (this.switchRegisterModal) {
        this.closeModal();
      }
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
  width: 100%;
  height: 0.96rem;
  left: 0;
  bottom: 0;
  z-index: 800;

  ul {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
    backdrop-filter: blur(0.2rem);
    box-shadow: 0 0 0.1rem 0 rgba(0, 0, 0, 0.2);
    background-color: hsla(0, 0%, 100%, 0.9);
  }
  li {
    -webkit-box-flex: 0.2;
    -webkit-flex: 0.2;
    -ms-flex: 0.2;
    flex: 0.2;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    position: relative;

    &:first-child div {
      background-position: -.04rem -.04rem;
    }

    &:nth-child(2) div {
      background-position: -.6rem -.04rem;
    }
    &:nth-child(3) div {
      background-position: -1.16rem -.04rem;
    }
    &:nth-child(4) div {
      background-position: -2.28rem -.04rem;
    }

    &.active {
      &:first-child div {
        background-position: -2.84rem -.04rem;
      }
      &:nth-child(2) div {
        background-position: -3.4rem -.04rem;
      }
      &:nth-child(3) div {
        background-position: -3.96rem -.04rem;
      }
      &:nth-child(4) div {
        background-position: -64rem -0rem;
      }
      a {
        color: #d2b79c;
      }
    }

    div {
      width: 0.48rem;
      height: 0.48rem;
      background-image: url(https://h5static.0am08m.com/assets/v4_common/tabBar.png?version=1583773880435);
      background-repeat: no-repeat;
      background-size: 5.6rem 0.58rem;
    }

    a {
      margin-top: 0.04rem;
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
