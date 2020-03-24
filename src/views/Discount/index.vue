<template>
  <div class="discount">
    <header>
      <van-nav-bar title="优惠活动" />
      <div class="nav-wrapper">
        <ul class="nav-list">
          <router-link :to=" {name: 'discount', params: {category: 'all'}} ">
            <li @click="setActive('all')" :class="{ active: activeItem == 'all' }" class="nav-item">
              <a>全部</a>
            </li>
          </router-link>
          <router-link :to=" {name: 'discount', params: {category: 'sport'}} ">
            <li
              @click="setActive('sport')"
              :class="{ active: activeItem == 'sport' }"
              class="nav-item"
            >
              <a>体育</a>
            </li>
          </router-link>
          <router-link :to=" {name: 'discount', params: {category: 'live'}} ">
            <li
              @click="setActive('live')"
              :class="{ active: activeItem == 'live' }"
              class="nav-item"
            >
              <a>真人</a>
            </li>
          </router-link>
          <router-link :to=" {name: 'discount', params: {category: 'lottery'}} ">
            <li
              @click="setActive('lottery')"
              :class="{ active: activeItem == 'lottery' }"
              class="nav-item"
            >
              <a>彩票</a>
            </li>
          </router-link>
          <router-link :to=" {name: 'discount', params: {category: 'eGame'}} ">
            <li
              @click="setActive('eGame')"
              :class="{ active: activeItem == 'eGame' }"
              class="nav-item"
            >
              <a>电子</a>
            </li>
          </router-link>
        </ul>
      </div>
    </header>

    <div class="discount-content">
      <transition name="slide-fade">
        <Category />
      </transition>
    </div>
  </div>
</template>

<script>
import Category from "./components/Category";
export default {
  name: "Discount",
  components: {
    Category
  },
  computed: {
    activeItem() {
      return this.$store.state.category.categoryMenu;
    }
  },
  data() {
    return {
      tabList: [
        {
          value: "all",
          name: "全部"
        },
        {
          value: "sport",
          name: "体育"
        },
        {
          value: "live",
          name: "真人"
        },
        {
          value: "lottery",
          name: "彩票"
        },
        {
          value: "slot",
          name: "电子"
        }
      ]
    };
  },
  methods: {
    setActive(item) {
      this.$store.dispatch("category/changeCategoryMenu", item);
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  box-shadow: 0px -3px 12px rgba(0, 0, 0, 0.3);

  .van-nav-bar__title {
    font-size: 0.36rem;
    width: 7.5rem;
    text-align: center;
    height: 0.88rem;
    line-height: 0.88rem;
    color: #414655;
    background-color: #fff;
    font-weight: 600;
  }
}

.nav-wrapper {
  box-shadow: 0 3rem 8rem rgba(0, 0, 0, 0.05);

  .nav-list {
    display: flex;
    justify-content: space-around;
    /* height: 46px; */
    align-items: center;
    width: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    height: 1rem !important;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.05);

    .nav-item a {
      cursor: pointer;
      text-align: center;
      height: 1rem;
      width: 1.6rem;
      line-height: 1rem;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      float: left;
      position: relative;
      font-size: 0.32rem;
      color: #4a4a4a;
      opacity: 0.5;
      &.active {
        opacity: 1;
      }

      &.active {
        a {
          color: #4a4a4a;

          &:after {
            opacity: 1;
          }
        }
      }

      a {
        position: relative;
        display: block;
        color: #aeafae;

        &:after {
          content: "";
          display: block;
          position: absolute;
          background-color: #d2b79c;
          left: 50%;
          bottom: 0;
          transform: translate(-50%);
          opacity: 0;
          transition: all 0.3s;
          width: 0.8rem;
          height: 2px;
        }
      }
    }
  }
}

.discount-content {
  position: relative;
  -webkit-box-flex: 1;
  -webkit-flex: auto;
  -ms-flex: auto;
  flex: auto;
  width: 100%;
}
</style>