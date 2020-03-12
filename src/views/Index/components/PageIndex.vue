<template>
  <div class="pageIndex">
    <div class="recommend" v-if="showApp" @click="closeApp">
      <div class="recommend-wrapper">
        <div class="recommend-wrapper__close">
          <span></span>
        </div>
        <div class="recommend-wrapper__content">
          <picture>
            <source
              class="img"
              srcset="https://h5static.0am08m.com/assets/home/full_site_logo.png.webp?version=1583773880435"
              type="image/webp"
            />
            <img class="img" src="https://h5static.0am08m.com/assets/home/full_site_logo.png" alt />
          </picture>

          <div>
            <h2>亚博APP</h2>
            <h6>真人娱乐，体育投注，电子游艺等尽在一手掌握</h6>
          </div>
        </div>
        <div class="recommend-wrapper__download">
          <button>立即下载</button>
        </div>
      </div>
    </div>

    <header>
      <pictrue class="picture">
        <source
          class="img-fluid"
          srcset="https://h5static.0am08m.com/assets/v4_home/homeLogo.png.webp?version=1583111633321"
          type="image/webp"
        />
        <img class="img-fluid" src="https://h5static.0am08m.com/assets/v4_home/homeLogo.png" alt />
      </pictrue>
      <div class="header-right"></div>
    </header>

    <div class="slick-custom">
      <VueSlickCarousel v-bind="settings">
        <div class="slick-container" v-for="n in 3" :key="n">
          <div class="border-radius">
            <div class="slick-custom-item">
              <img
                class="border-radius img-fluid"
                src="https://static.0am08m.com//prod/banner/m_bab6a299f356ff9b176b7e29f86b9721aa53f399.jpg"
                alt
              />
            </div>
          </div>
        </div>
      </VueSlickCarousel>
    </div>

    <!-- 跑馬燈 -->
    <div class="notice-container">
      <div class="noticebar">
        <van-notice-bar
          color="#9aa4c2"
          background="#fff"
          right-icon="https://h5static.0am08m.com/assets/v4_home/iconHotEvents.png.webp?version=1583111633321"
          left-icon="https://h5static.0am08m.com/assets/v4_home/iconNoitce.png.webp?version=1583111633321
        "
        >
          <a
            v-for="(item, i) in noticeBar"
            :key="i"
            :href="item.link"
            @click="openDialogModal(item)"
          >{{item.content}}</a>
        </van-notice-bar>

        <div class="noticebar__right">
          <picture>
            <source
              srcset="https://h5static.0am08m.com/assets/v4_home/iconHotEvents.png.webp?version=1583773880435"
              type="image/webp"
            />
            <img src="https://h5static.0am08m.com/assets/v4_home/iconHotEvents.png" alt />
          </picture>
        </div>
      </div>
    </div>

    <div class="features">
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
    <!-- 登入/轉帳/提款 Icon -->

    <section>
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
    </section>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import { Dialog } from "vant";

export default {
  name: "pageIndex",
  components: { VueSlickCarousel, [Dialog.Component.name]: Dialog.Component },
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
      ],
      noticeBar: [
        {
          title: "系统例行维护",
          content:
            "尊敬的客户：我司BBIN真人于2020年3月4日（周三）09:00-11:25进行系统例行维护，届时BBIN真人场馆将无法进行游戏和转账，其他场馆正常运行，请维护前将场馆内的余额转出，给您带来不便还请谅解。谢谢！",
          link: "#"
        },
        {
          title: "绿茵逐鹿 点球成金",
          content:
            "尊敬的客户：【绿茵逐鹿 点球成金】优惠 【3月11号 布里斯托流浪vs桑德兰 】布里斯托流浪共产生(1)粒点球得分，彩金已经发放完毕，活动详情请至优惠活动页面了解！",
          link: "#"
        },
        {
          title: "欧冠返现666",
          content:
            "尊敬的客户：【欧冠返现666】在3月10日至3月19日期间，投注欧冠，累计有效投注达到指定金额，即可获得随机最高666元红包！仅需一倍流水即可提款！",
          link: "#"
        }
      ],
      showApp: true
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
    },
    openDialogModal(item) {
      Dialog.confirm({
        title: item.title,
        message: item.content,
        confirmButtonText: "查看全部",
        cancelButtonText: "关闭",
        cancelButtonColor: "#000",
        confirmButtonColor: "#d2b79c"
      })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
    },
    closeApp(){
      this.showApp = false;
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  height: 0.88rem;
  padding: 0 0.28rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;

  .picture {
    img {
      pointer-events: none;
      width: 1.36rem;
      height: 0.54rem;
    }
  }

  .header-right {
    width: 0.42rem;
    height: 0.42rem;
    background: url(https://h5static.0am08m.com/assets/v4_common/common_2/out/img/sprite.png?version=1583773880435)
      no-repeat -10.23rem 0;
    background-size: 14.3rem 0.48rem;
    position: relative;
  }
}

.slider {
  width: 100%;
  height: 100%;
}

.slick-custom-item {
  height: 2.88rem;
  overflow: hidden;
  border-radius: 0.1rem;
  margin: 0 0.28rem;
}
.border-radius {
  border-radius: 0.1rem;
}

.slick-dots {
  bottom: 0rem;
}

.noticebar {
  width: 100%;
  height: 100%;
  position: relative;
  &__left {
    width: 0.32rem;
    height: 0.32rem;
    pointer-events: none;
  }
  &__right {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    top: 0;

    margin-left: 1rem;

    img {
      width: 1.2rem;
      height: 0.36rem;
    }
  }
  a {
    color: $text-color;
    font-size: 0.24rem;
    margin-right: 1rem;
  }
  .van-notice-bar {
    height: 0.34rem;
    margin: 0 0.1rem;
  }
}

.features {
  position: relative;
  z-index: 1;
  background-color: #fff;
  padding: 0 0.28rem;
  min-height: 1rem;
  margin-top: 0.2rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;

  .feature {
    &__left,
    &__right {
      display: inline-block;
    }
    &__left {
      width: 40%;
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h1 {
        color: $title;
        color: #414655;
        font-weight: 400;
        font-size: 0.28rem;
        letter-spacing: -1px;
        margin-top: 0.1rem;
      }
      p {
        color: $desc;
        color: #a5a9b3;
        font-size: 0.24rem;
      }
    }

    &__right {
      width: 4.08rem;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      padding-left: 0.4rem;

      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;

      &__item {
        width: 0.72rem;
        height: 100%;
        text-align: center;

        div {
          width: 0.72rem;
          height: 0.72rem;
          background: url(https://h5static.0am08m.com/assets/v4_mine/user_home_icon/out/img/sprite.png?version=1583773880435)
            no-repeat -0.2rem 0;
          background-size: 8.68rem 1.28rem;
        }

        span {
          color: #b1987f;
          font-size: 0.24rem;
          font-weight: 400;
        }
      }

      &__item:first-child div {
        background-position: 0 0;
      }
      &__item:nth-child(2) div {
        background-position: -0.76rem 0;
      }
      &__item:nth-child(3) div {
        background-position: -1.52rem 0;
      }
      &__item:nth-child(4) div {
        background-position: -2.28rem 0;
      }
    }
  }
}

.game {
  &__left {
    &__list {
      li {
        background-image: url(https://h5static.0am08m.com/assets/v4_home/tabSelected.png?version=1583773880435);
        background-repeat: no-repeat;
        background-size: cover;
        border-bottom: 1px solid #bd9f7f;
        -webkit-box-shadow: 0 0.08rem 0.12rem 0 rgba(168, 135, 102, 0.5);
        box-shadow: 0 0.08rem 0.12rem 0 rgba(168, 135, 102, 0.5);
        border-bottom-left-radius: 0.24rem;
        border-bottom-right-radius: 0.24rem;
        width: 1.2rem;
        height: 0.8rem;
        margin-bottom: 0.2rem;
        border-radius: 0.2rem;
        -webkit-box-shadow: 0 0.08rem 0.12rem 0 rgba(65, 70, 92, 0.3);
        box-shadow: 0 0.08rem 0.12rem 0 rgba(65, 70, 92, 0.3);
        background-image: url(https://h5static.0am08m.com/assets/v4_home/tabNormal.png?version=1583773880435);
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: 100% 100%;
        align-items: center;
        position: relative;
        display: flex;
        justify-self: space-between;
        -webkit-box-pack: justify;

        &:first-child div {
          background-position: -0.04rem -0.04rem;
        }
        &:nth-child(2) div {
          background-position: -0.04rem -1rem;
        }
        &:nth-child(3) div {
          background-position: -0.04rem -1.96rem;
        }
        &:nth-child(4) div {
          background-position: -0.04rem -2.92rem;
        }
        &:nth-child(5) div {
          background-position: -0.04rem -3.88rem;
        }
        &:nth-child(6) div {
          background-position: -0.04rem -4.84rem;
        }
      }

      * > div {
        display: flex;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        width: 0.88rem;
        height: 0.88rem;
        position: absolute;
        left: -0.08rem;
        background-image: url(https://h5static.0am08m.com/assets/v4_home/home_tabs.png?version=1583773880435);
        background-repeat: no-repeat;
        background-size: 0.98rem 11.52rem;
      }

      &__link {
        padding-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        span {
          display: inline-block;
          width: 0.52rem;
          text-align: center;
          font-size: 0.2rem;
          position: absolute;
          right: 0.04rem;
          top: 0.26rem;
          color: $text-color;
        }
      }
    }
  }

  &__right {
    flex: 1;
    position: relative;
    z-index: 0;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding-left: 0.22rem;
  }
}

.recommend {
  width: 100%;
  .recommend-wrapper {
    height: 1.12rem;
    background-color: #fff;
    -webkit-box-shadow: inset 0 -0.5px 0 0 #eee;
    box-shadow: inset 0 -0.5px 0 0 #eee;
    padding: 0 0.28rem;
    display: flex;
    align-items: center;

    &__close {
      width: 0.32rem;
      height: 0.32rem;
      position: relative;

      span {
        position: relative;
        width: 1px;
        height: 0.37rem;
        background: #a5a9b3;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        display: inline-block;
        left: 0rem;
        top: 0;

        &:after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 1px;
          height: 5.92px;
          height: 0.37rem;
          background: #a5a9b3;
          -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
        }
      }
    }

    &__content {
      display: flex;
      flex: 1;
      margin: 0 0.2rem;
      text-align: left;

      .img {
        flex-shrink: 0;
        width: 0.74rem;
        height: 0.74rem;
        vertical-align: middle;
        margin-right: 0.12rem;
      }

      div {
        height: 0.74rem;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: 0.04rem 0;
        box-sizing: border-box;

        h2 {
          color: #414655;
          font-size: 0.28rem;
          font-weight: 600;
        }

        h6 {
          color: #9aa4c2;
          font-size: 0.178rem;
          font-weight: 400;
        }
      }
    }

    &__download {
      width: 1.48rem;
      height: 0.52rem;

      button {
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, #dccab8, #d2b496, #d2b79c);
        border: none;
        outline: none;
        color: #fff;
        font-size: 0.24rem;
        border-radius: 0.1rem;
      }
    }
  }
}
</style>