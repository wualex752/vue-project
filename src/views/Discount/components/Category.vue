<template>
  <div class="category">
    <div class="row">
      <div class="container">
        <div class="category-item" v-for="(item,i) in list" :key="'category-' + i">
          <a href="#" 
            @click="setActive(item.link)"
            :class="{ active: activeItem == item.link }">
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
          img: 'https://static.0am08m.com//prod/activity/m_d01809c7741cc154254b6235015ef6ebb88b48a8.jpg'
        },
        {
          link: "#",
          img: 'https://static.0am08m.com//prod/activity/m_d01809c7741cc154254b6235015ef6ebb88b48a8.jpg'
        },
        {
          link: "#",
          img: 'https://static.0am08m.com//prod/activity/m_d01809c7741cc154254b6235015ef6ebb88b48a8.jpg'
        },
      ]
    };
  },
  computed: {
    activeItem() {
      return this.$store.state.changeCategoryMenu
    }
  },
  methods: {
    setActive(item) {
      this.$store.dispatch('category/changeCategoryMenu', item);
    }
  }
};
</script>

<style lang="scss" scoped>
.category {
  .category-item {
    position: relative;
    margin: 1.2rem;

    &__img {
    }

    &__date {
      position: absolute;
      background: rgba(white, 0.8);
      border-bottom-right-radius: 0.625rem;
      border-top-right-radius: 0.625rem;
      color: #333;
      bottom: 1.875rem;
      left: 0px;
      padding: 0.3125rem 1.875rem;
      font-size: 1.25rem;
      font-weight: bold;
    }
  }
}
</style>