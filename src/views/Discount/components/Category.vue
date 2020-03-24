<template>
  <div class="category">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="category-item" v-for="(item,i) in type[activeItem]" :key="'category-' + i">
        <a :href="item.link">
          <!-- 新人Tag -->
          <div v-if="item.newbie" class="category-item__tag category-item__tag__newbie"></div>
          <!-- 最新Tag -->
          <div v-if="item.isNew" class="category-item__tag category-item__tag__news"></div>
          <!-- 日常Tag -->
          <div v-if="item.daily" class="category-item__tag category-item__tag__daily"></div>

          <div class="category-item__img">
            <img class="img-fluid border--radius" :src="item.img" alt />
          </div>
          <div class="category-item__date">
            <i></i>
            <span>{{item.date}}</span>
          </div>
        </a>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  name: "category",
  computed: {
    activeItem() {
      return this.$store.state.category.categoryMenu;
    },
    content() {
      return this.type[this.activeItem];
    }
  },
  data() {
    return {
      isLoading: false,
      type: {
        // 全部體育真人彩票墊子
        all: [],
        sport: [
          {
            link: "#",
            img:
              "https://static.0am08m.com//prod/activity/m_6ef9ef9caf6cb1d79af0478c8b28a878f49c4284.jpg",
            isNew: true,
            date: "2020-03-27 至 2020-04-09"
          },
          {
            link: "#",
            img:
              "https://static.0am08m.com//prod/activity/m_9881662c441f26b486e3d2666f7083041413f405.jpg",
            isNew: true,
            date: "2020-03-20 至 2020-03-26"
          },
          {
            link: "#",
            img:
              "https://static.0am08m.com//prod/activity/m_026a3ff94eb976e16a889e2aca3e864dd5bcbf60.jpg",
            isNew: true,
            date: "2020-03-27 至 2020-04-09"
          },
          {
            link: "#",
            img:
              "https://static.0am08m.com//prod/activity/m_51b684d459d9fb2a7c56738d4777467e24e4916b.jpg",
            isNew: true,
            date: "2020-03-27 至 2020-04-09"
          },
          {
            link: "#",
            img:
              "https://static.0am08m.com//prod/activity/m_c4c5e2f05c3c995372316581da931ebec096fcdd.jpg",
            isNew: false,
            daily: true,
            date: "2020-03-27 至 2020-04-09"
          },
          {
            link: "#",
            img:
              "https://static.0am08m.com//prod/activity/m_161d5812c9e2f204207d445e58a56f6f2c6d1c74.jpg",
            isNew: false,
            daily: true,
            date: "长期活动"
          },
          {
            link: "#",
            img:
              "https://static.0am08m.com//prod/activity/f32d42bfecc30d2aabdf1a5d2f4ca571ef64ed31.png",
            isNew: false,
            daily: false,
            newbie: true,
            date: "长期活动"
          }
        ],
        live: [
          {
            link: "#",
            img:
              "https://static.0am08m.com//prod/activity/m_9881662c441f26b486e3d2666f7083041413f405.jpg",
            isNew: true,
            date: "2020-04-01 至 2020-04-19"
          },
          {
            link: "#",
            img:
              "https://static.0am08m.com//prod/activity/m_6ef9ef9caf6cb1d79af0478c8b28a878f49c4284.jpg",
            isNew: true,
            date: "2020-03-27 至 2020-04-09"
          }
        ],
        lottery: [
          {
            link: "#",
            img:
              "https://static.0am08m.com//prod/activity/m_6ef9ef9caf6cb1d79af0478c8b28a878f49c4284.jpg",
            isNew: true,
            date: "2020-04-01 至 2020-04-19"
          },
          {
            link: "#",
            img:
              "https://static.0am08m.com//prod/activity/m_9881662c441f26b486e3d2666f7083041413f405.jpg",
            isNew: true,
            date: "2020-04-01 至 2020-04-19"
          }
        ],
        eGame: [
          {
            link: "#",
            img:
              "https://static.0am08m.com//prod/activity/m_5c6ae452dae1603d784f5548b8d8cf23a50becae.jpg",
            isNew: false,
            newbie: true,
            date: "2020-04-01 至 2020-04-30"
          },
          {
            link: "#",
            img:
              "https://static.0am08m.com//prod/activity/m_9881662c441f26b486e3d2666f7083041413f405.jpg",
            isNew: true,
            date: "2020-04-01 至 2020-04-19"
          },
          {
            link: "#",
            img:
              "https://static.0am08m.com//prod/activity/m_6e8459f0d473242a02efa527ee96b30657b536c9.jpg",
            isNew: false,
            daily: true,
            date: "2020-04-01 至 2020-04-19"
          },
          {
            link: "#",
            img:
              "https://static.0am08m.com//prod/activity/m_660a5528fd21f9b3dabc5571ce76514f80787b96.jpg",
            isNew: false,
            daily: true,
            date: "2020-04-01 至 2020-04-19"
          }
        ]
      }
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 1000);
    }
  },
  created() {
    this.type.all = this.type[this.activeItem];
  }
};
</script>

<style lang="scss" scoped>
.category {
  background-color: #fff;
  padding-top: 0.04rem;
  margin-top: 0.2rem;

  .category-item {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-top: 1.2rem;
    margin: 0.2rem 0.28rem 0;
    position: relative;
    height: 2.8rem;
    width: calc(100% - 0.56rem);

    &__tag {
      // 最新 Tag
      position: absolute;
      top: 0.2rem;
      left: -0.06rem;
      z-index: 99;
      width: 0.96rem;
      height: 0.42rem;
      background-image: url(https://h5static.0am08m.com/assets/v4_mine/user_discount/out/img/sprite.png);
      background-repeat: no-repeat;
      background-size: 4.12rem 0.42rem;

      &__news {
        // 最新 Tag
        background-position: 0;
      }

      &__daily {
        // 日常 Tag
        background-position: -0.98rem;
      }

      &__newbie {
        // 新人 Tag
        background-position: -1.96rem;
      }
    }

    &__img {
      position: absolute;
      left: 0;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      border: none;
      width: 100%;
      z-index: 1;
    }

    &__date {
      display: flex;
      position: absolute;
      padding: 0 0.3rem 0 0.2rem;
      left: 0;
      bottom: 0.16rem;
      height: 0.4rem;
      font-size: 0.2rem;
      background: hsla(0, 0%, 100%, 0.9);
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      border-bottom-right-radius: 0.24rem;
      border-top-right-radius: 0.24rem;
      color: #333;
      font-family: "DinPro-Medium";
      z-index: 2;
    }
  }
}
</style>