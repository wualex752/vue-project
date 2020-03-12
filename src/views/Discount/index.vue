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
          <router-link :to=" {name: 'discount', params: {category: 'sports'}} ">
            <li @click="setActive('sports')" :class="{ active: activeItem == 'sports' }" class="nav-item">
              <a>体育</a>
            </li>
          </router-link>
          <router-link :to=" {name: 'discount', params: {category: 'live'}} ">
            <li @click="setActive('live')" :class="{ active: activeItem == 'live' }" class="nav-item">
              <a>真人</a>
            </li>
          </router-link>
          <router-link :to=" {name: 'discount', params: {category: 'lottery'}} ">
            <li @click="setActive('lottery')" :class="{ active: activeItem == 'lottery' }" class="nav-item">
              <a>彩票</a>
            </li>
          </router-link>
          <router-link :to=" {name: 'discount', params: {category: 'slot'}} ">
            <li @click="setActive('slot')" :class="{ active: activeItem == 'slot' }" class="nav-item">
              <a>电子</a>
            </li>
          </router-link>
        </ul>
      </div>
    </header>

    <div class="discount-content">
      <Category />
    </div>
  </div>
</template>

<script>
import Category from './components/Category'
export default {
  name: "Discount",
  components: {
    Category
  },
  data() {
    return {
      activeItem: "all",
      tabList: [
        {
          value: "all",
          name: "全部"
        },
        {
          value: "sports",
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
      this.activeItem = item;
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  box-shadow: 0px -3px 12px rgba(0, 0, 0, 0.3);

  .van-nav-bar__title {
    font-size: 1.4125rem;
  }
}

.nav-wrapper {
  box-shadow: 0 3rem 8rem rgba(0, 0, 0, 0.05);

  .nav-list {
    display: flex;
    justify-content: space-around;
    height: 46px;
    align-items: center;

    .nav-item {
      font-size: 1.875rem;
      cursor: pointer;

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
          bottom: -10px;
          width: 6rem;
          height: 0.3rem;
          transform: translate(-50%);
          opacity: 0;
          transition: all 0.3s;
        }
      }
    }
  }
}

.discount-content {
  margin-top: .2rem;
  padding-top: .4rem;
}
</style>