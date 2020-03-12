<template>
  <div>
    <header>
      <img
        src="https://h5static.0am08m.com/assets/v4_home/homeLogo.png.webp?version=1583111633321"
        alt
      />
      <div class="header-right"></div>
    </header>

    <div class="slick-custom">
      <VueSlickCarousel v-bind="settings">
        <div class="slick-container" v-for="n in 3" :key="n">
          <div>
            <img
              class="img-fluid"
              src="https://static.0am08m.com//prod/banner/m_bab6a299f356ff9b176b7e29f86b9721aa53f399.jpg"
              alt
            />
          </div>
        </div>
      </VueSlickCarousel>
    </div>

    <!-- 跑馬燈 -->
    <div class="noticebar">
      <van-notice-bar
        color="#9aa4c2"
        background="#fff"
        right-icon="https://h5static.0am08m.com/assets/v4_home/iconHotEvents.png.webp?version=1583111633321"
        left-icon="https://h5static.0am08m.com/assets/v4_home/iconNoitce.png.webp?version=1583111633321
      "
      >尊敬的客户：我司BBIN真人于2020年3月4日（周三）09:00-11:25进行系统例行维护，届时BBIN真人场馆将无法进行游戏和转账，其他场馆正常运行，请维护前将场馆内的余额转出，给您带来不便还请谅解。谢谢！</van-notice-bar>
      <!-- <div class="noticebar__right">
        <img
          src="https://h5static.0am08m.com/assets/v4_home/iconHotEvents.png.webp?version=1583111633321"
          alt
        />
      </div>-->
    </div>

    <div class="features">
      <div class="row">
        <div class="feature__left">
          <h1>您还未登录</h1>
          <p>请先登录/注册后查看</p>
        </div>

        <div class="feature__right">
          <div class="feature__right__item">
            <div></div>
            <span>存款</span>
          </div>
          <div class="feature__right__item">
            <div></div>
            <span>轉帳</span>
          </div>
          <div class="feature__right__item">
            <div></div>
            <span>取款</span>
          </div>
          <div class="feature__right__item">
            <div></div>
            <span>VIP</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 登入/轉帳/提款 Icon -->

    <div class="game">
      <div class="row align-items-start">
        <div class="game__left">
          <ul class="game__left__list">
            <li
              v-for="(item, i) in list"
              :key="i"
              :class="{ active: activeItem == item.link} "
              @click="setActive(item.link)"
            >
              <router-link
                class="game__left__list__link"
                :to=" {name: 'game', params: {vendor: item.link}}"
              >
                <div></div>
                <span>{{item.title}}</span>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="game__right">
          <transition name="slide-fade">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "pageIndex",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        arrows: true,
        dots: true,
        autoplay: true
      },
      list: [
        {
          title: "體育",
          link: "sport"
        },
        {
          title: "真人",
          link: "live"
        },
        {
          title: "彩票",
          link: "lottery"
        },
        {
          title: "電競",
          link: "eSport"
        },
        {
          title: "電子",
          link: "eGame"
        },
        {
          title: "棋牌",
          link: "boardgame"
        }
      ]
    };
  },
  computed: {
    activeItem() {
      return this.$store.state.pageIndex.gameMenu;
    }
  },
  created() {
    this.$store.dispatch("pageIndex/changeGameMenu", "sport");
  },
  methods: {
    setActive(item) {
      this.$store.dispatch("pageIndex/changeGameMenu", item);
    }
  }
};
</script>

<style lang="scss" scoped>
$title: #414655;
$desc: #a5a9b3;

@mixin flex-justify($j: center, $a: center) {
  display: flex;
  justify-content: $j;
  align-items: $a;
}

header {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  align-items: center;

  .header-right {
    background: url(https://h5static.0am08m.com/assets/v4_common/common_2/out/img/sprite.png?version=1583111633321)
      no-repeat;
    background-position: -1020px 0;
    height: 42px;
    width: 45px;
  }
}

.slider {
  width: 100%;
  height: 100%;
}
.slider-container {
  div {
    padding: 20px;

    img {
      border-radius: 20px;
    }
  }
}

.slick-dots {
  bottom: 30px;
}

.noticebar {
  width: 100%;
  height: 100%;
  font-size: .24rem;
  &__right {
    margin-left: 1rem;
    img {
      width: 7.625rem;
      height: 2.6875rem;
    }
  }
}

.features {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 0.9375rem;

  .feature {
    &__left,
    &__right {
      display: inline-block;
    }
    &__left {
      width: 40%;
      text-align: left;

      h1 {
        color: $title;
        padding: 0;
        font-size: 2.4rem;
        margin: 0;
      }
      p {
        margin: 0;
        padding: 0;
        color: $desc;
        font-size: 1.8rem;
      }
    }

    &__right {
      width: 60%;
      display: inline-flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;

      &__item {
        margin-right: 2rem;
        div {
          background: url(https://h5static.0am08m.com/assets/v4_mine/user_home_icon/out/img/sprite.png?version=1583111633321)
            no-repeat;
          /* background-position: 0 0; */
          width: 7.5rem;
          height: 7.5rem;

        }

        span {
          font-size: 1.5rem;
          color: #b1887f;
          display: inline-block;
          width: 0.52rem;
          text-align: center;
          font-size: 0.2rem;
          color: #9aa4c2;
          position: absolute;
          right: 0.04rem;
          top: 0.26rem;
        }
      }

      &__item:first-child div {
        background-position: 0 0;
      }
      &__item:nth-child(2) div {
        background-position: -74px 0;
      }
      &__item:nth-child(3) div {
        background-position: -148px 0;
      }
      &__item:nth-child(4) div {
        background-position: -222px 0;
      }
    }
  }
}

.game {
  margin-top: 1.6rem;
  margin-bottom: 5rem;
  &__left {
    &__list {
      li {
        width: 130px;
        height: 85px;
        margin-bottom: 0.8rem;
        background: url(https://h5static.0am08m.com/assets/v4_home/tabNormal.png.webp?version=1583111633321)
          no-repeat;
        background-position: 50% 50%;
        background-size: auto;

        &:first-child div {
          background-position: -20px -114px;
        }
        &:nth-child(2) div {
          background-position: -20px -209px;
        }
        &:nth-child(3) div {
          background-position: -20px -306px;
        }
        &:nth-child(4) div {
          background-position: -20px -306px;
        }
        &:nth-child(5) div {
          background-position: -20px -306px;
        }
        &:nth-child(6) div {
          background-position: -20px -306px;
        }
      }

      * > div {
        background: url(https://h5static.0am08m.com/assets/v4_home/home_tabs.png.webp?version=1583111633321)
          no-repeat;
        width: 60px;
        height: 60px;
        display: inline-block;
      }

      &__link {
        padding-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        span {
          font-size: 1.6rem;
          color: #9aa4c2;
        }
      }
    }
  }

  &__right {
    flex: 1;
    &__item {
      width: 100%;
    }
  }
}
</style>