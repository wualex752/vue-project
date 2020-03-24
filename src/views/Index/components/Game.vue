<template>
  <div>
    <!-- 根據 gameMenu 傳入的值，切換不同的資料 -->
    <!-- {{length}} -->
    <div class="row flex-wrap">
      <div
        class="game__right__item col"
        :class="['layout-' + length]"
        v-for="(item,i) in type[gameMenu]"
        :key="i+'-sport'"
      >
        <router-link :to="item.link">
          <img class="img-fluid" :src="item.img" alt />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Game",
  computed: {
    gameMenu() {
      return this.$store.state.pageIndex.gameMenu;
    },
    length() {
      return this.type[this.gameMenu].length;
    }
  },
  data() {
    return {
      type: {
        sport: [
          {
            img:
              "https://h5static.0am08m.com/assets/v4_homeVenue/yaboSports.png.webp?version=1583111633321",
            link: "#"
          },
          {
            img:
              "https://h5static.0am08m.com/assets/v4_homeVenue/yaboSports.png.webp?version=1583111633321",
            link: "#"
          }
        ],
        live: [
          {
            img:
              "https://h5static.0am08m.com/assets/v4_homeVenue/agLiveCasino.png.webp?version=1584615755214",
            link: "#"
          },
          {
            img:
              "https://h5static.0am08m.com/assets/v4_homeVenue/eBetLiveCasino.png.webp?version=1584615755214",
            link: "#"
          },
          {
            img:
              "https://h5static.0am08m.com/assets/v4_homeVenue/ogLiveCasino.png.webp?version=1584615755214",
            link: "#"
          },
          {
            img:
              "https://h5static.0am08m.com/assets/v4_homeVenue/gdLiveCasino.png.webp?version=1584615755214",
            link: "#"
          },
          {
            img:
              "https://h5static.0am08m.com/assets/v4_homeVenue/bBinLiveCasino.png.webp?version=1584615755214",
            link: "#"
          }
        ],
        lottery: [
          {
            img:
              "https://h5static.0am08m.com/assets/v4_homeVenue/yaboLottery.png.webp?version=1584615755214",
            link: "#"
          },
          {
            img:
              "https://h5static.0am08m.com/assets/v4_homeVenue/sgLottery.png.webp?version=1584615755214",
            link: "#"
          },
          {
            img:
              "https://h5static.0am08m.com/assets/v4_homeVenue/lbLottery.png.webp?version=1584615755214",
            link: "#"
          },
          {
            img:
              "https://h5static.0am08m.com/assets/v4_homeVenue/kgLottery.png.webp?version=1584615755214",
            link: "#"
          },
          {
            img:
              "https://h5static.0am08m.com/assets/v4_homeVenue/bBinLottery.png.webp?version=1584615755214",
            link: "#"
          },
          {
            img:
              "https://h5static.0am08m.com/assets/v4_homeVenue/tcgLottery.png.webp?version=1584615755214",
            link: "#"
          }
        ],
        eSport: [
          {
            img:
              "https://h5static.0am08m.com/assets/v4_homeVenue/imESports.png.webp?version=1584615755214.webp?version=1584615755214",
            link: "#"
          },
          {
            img:
              "https://h5static.0am08m.com/assets/v4_homeVenue/aviaESports.png.webp?version=1584615755214.webp?version=1584615755214",
            link: "#"
          }
        ],
        eGame: [
          {
            img:
              "https://h5static.0am08m.com/assets/v4_homeVenue/pgSlotgame.png.webp?version=1584615755214",
            link: "#"
          },
          {
            img:
              "https://h5static.0am08m.com/assets/v4_homeVenue/agSlotgame.png.webp?version=1584615755214",
            link: "#"
          },
          {
            img:
              "https://h5static.0am08m.com/assets/v4_homeVenue/ptSlotgame.png.webp?version=1584615755214",
            link: "#"
          },
          {
            img:
              "https://h5static.0am08m.com/assets/v4_homeVenue/mgSlotgame.png.webp?version=1584615755214",
            link: "#"
          },
          {
            img:
              "https://h5static.0am08m.com/assets/v4_homeVenue/ppSlotgame.png.webp?version=1584615755214",
            link: "#"
          },
          {
            img:
              "https://h5static.0am08m.com/assets/v4_homeVenue/dtSlotgame.png.webp?version=1584615755214",
            link: "#"
          }
        ],
        card: [
          {
            img:
              "https://h5static.0am08m.com/assets/v4_homeVenue/yaboBoardgame.png.webp?version=1584615755214",
            link: "#"
          },
          {
            img:
              "https://h5static.0am08m.com/assets/v4_homeVenue/goldenBoardgame.png.webp?version=1584615755214",
            link: "#"
          },
          {
            img:
              "https://h5static.0am08m.com/assets/v4_homeVenue/sgBoardgame.png.webp?version=1584615755214",
            link: "#"
          }
        ]
      }
    };
  },
  creadted() {}
};
</script>

<style lang="scss" scoped>
.game__right__item {
  display: block;
  width: 100%;
  height: 2.8rem;
  border-radius: 0.12rem;
  margin-bottom: 0.2rem;
  box-shadow: 0 0.04rem 0.28rem 0 rgba(65, 70, 92, 0.3);

  &.layout-5,
  &.layout-6 {
    width: 48%;
    height: 1.8rem;
  }

  &.layout-3 {
    &:first-child {
      width: 100%;
      margin-bottom: 0.2rem;
    }
    width: 48%;
    height: 2.8rem;
    margin-bottom: 0;
  }

  &.layout-5 {
    &:nth-of-type(odd) {
      margin-left: 4%;
    }
    &:first-child {
      width: 100%;
      margin-left: 0;
    }
    margin-top: 0.2rem;
  }

  &.layout-6 {
    margin-bottom: 0.2rem;

    &:nth-of-type(2n) {
      margin-left: 4%;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }

  img {
    width: 100%;
    height: 100%;
  }
}
</style>