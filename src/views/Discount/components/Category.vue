<template>
  <div class="category">
    <div class="category-item" v-for="(item,i) in list" :key="'category-' + i">
      <a href="#" @click="setActive(item.link)" :class="{ active: activeItem == item.link }">
        <div v-if="i%2 == 1" class="category-item__tag category-item__tag__news"></div>
        <div v-if="i%2 != 1" class="category-item__tag category-item__tag__daily"></div>
        <div class="category-item__img">
          <img
            class="img-fluid border--radius"
            src="https://static.0am08m.com//prod/activity/m_d01809c7741cc154254b6235015ef6ebb88b48a8.jpg"
            alt
          />
        </div>
        <div class="category-item__date">
          <i></i>
          <span>
            2020-03-07
            至
            2020-03-09
          </span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "category",
  data() {
    return {
      list: [
        {
          link: "#",
          img:
            "https://static.0am08m.com//prod/activity/m_d01809c7741cc154254b6235015ef6ebb88b48a8.jpg"
        },
        {
          link: "#",
          img:
            "https://static.0am08m.com//prod/activity/m_d01809c7741cc154254b6235015ef6ebb88b48a8.jpg"
        },
        {
          link: "#",
          img:
            "https://static.0am08m.com//prod/activity/m_d01809c7741cc154254b6235015ef6ebb88b48a8.jpg"
        }
      ]
    };
  },
  computed: {
    activeItem() {
      return this.$store.state.changeCategoryMenu;
    }
  },
  methods: {
    setActive(item) {
      this.$store.dispatch("category/changeCategoryMenu", item);
    }
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

    &__tag { // 最新 Tag
      position: absolute;
      top: 0.2rem;
      left: -0.06rem;
      z-index: 99;
      width: 0.96rem;
      height: 0.42rem;
      background-image: url(https://h5static.0am08m.com/assets/v4_mine/user_discount/out/img/sprite.png);
      background-repeat: no-repeat;
      background-size: 4.12rem 0.42rem;

      &__news { // 最新 Tag
        background-position: 0;
      }

      &__daily { // 日常 Tag
        background-position: -.98rem;
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