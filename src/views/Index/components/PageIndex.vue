<template>
  <div class="pageIndex">
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
        <div class="noticebar__left">
          <picture>
            <source
              type="image/webp"
              srcset="https://h5static.0am08m.com/assets/v4_home/iconNoitce.png.webp?version=1583773880435"
            />
            <img
              class="img-fluid"
              src="https://h5static.0am08m.com/assets/v4_home/iconNoitce.png"
              alt
            />
          </picture>
        </div>
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

.pageIndex {
  margin: 3rem;
}

header {
  display: flex;
  justify-content: space-between;
  padding: 2rem 3.7rem;
  align-items: center;

  .picture {
    width: 17.81rem;
    img {
      pointer-events: none;
    }
  }

  .header-right {
    background: url(https://h5static.0am08m.com/assets/v4_common/common_2/out/img/sprite.png);
    background: url(https://h5static.0am08m.com/assets/v4_common/common_2/out/img/sprite.png?version=1583111633321)
      no-repeat;
    background-position: -157.5rem 0;
    background-size: 220rem;
    width: 6.1rem;
    height: 6.1rem;
  }
}

.slider {
  width: 100%;
  height: 100%;
}
.slider-container {
  div {
    padding: 20px;
    border-radius: 2rem;

    img {
      border-radius: 20px;
    }
  }
}
.border-radius {
  border-radius: 2rem;
}

.slick-dots {
  bottom: 0rem;
}

.noticebar {
  width: 100%;
  height: 100%;
  font-size: 3.2rem;
  position: relative;
  &__left {
    display: inline-block;
    position: absolute;
    left: 2rem;
    top: 2.8rem;
    width: 4.3rem;
    z-index: 3;
  }
  &__right {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 10.5rem;
    right: 0;
    top: 0;

    margin-left: 1rem;

    img {
      width: 15.7rem;
      height: 5.45rem;
    }
  }
  a {
    font-size: 3.2rem;
    color: #9aa4c2;
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
        font-size: 3.6rem;
      }
      p {
        color: $desc;
        font-size: 3rem;
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
        cursor: pointer;


        div {
          background: url(https://h5static.0am08m.com/assets/v4_mine/user_home_icon/out/img/sprite.png?version=1583111633321)
            no-repeat;
          background-size: 101rem;
          width: 9.4rem;
          height: 9.4rem;
        }

        span {
          font-size: 3.4rem;
          color: #b1887f;
          font-weight: 400;
          display: inline-block;
          text-align: center;
        }
      }

      &__item:first-child div {
        background-position: 1rem 0;
      }
      &__item:nth-child(2) div {
        background-position: -8rem 0;
      }
      &__item:nth-child(3) div {
        background-position: -17rem 0;
      }
      &__item:nth-child(4) div {
        background-position: -26rem 0;
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