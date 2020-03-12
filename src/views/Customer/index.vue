<template>
  <!-- 客服 -->
  <div class="customer">
    <div class="customer__header">
      <header>
        <h1>我的客服</h1>
        <span @click="switchRegisterModal">意见反馈</span>
      </header>

      <!-- 登入前顯示UI -->
      <div class="box" v-if="isLogin">
        <div class="box__img"></div>
        <div class="box__text">
          <h3>Hi，尊敬的用户</h3>
          <p>欢迎来到客服中心</p>
        </div>
      </div>

      <!-- 登入後顯示UI -->
      <div class="box" v-else>
        <div class="box__person"></div>
        <div class="box__text">
          <h3>Hi，{{account}}</h3>
          <p>欢迎来到客服中心</p>
        </div>
      </div>
    </div>

    <div class="customer__contact">
      <ul>
        <li v-for="item in list" :key="item.subtitle">
          <div class="customer__contact__title">
            <i></i>
            <h4>{{item.title}}</h4>
          </div>
          <p>{{item.subtitle}}</p>
          <span>{{item.desc}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "customer",
  computed: {
    isLogin() {
      return this.$store.state.user.isLogin;
    },
    account() {
      return this.$store.state.user.account;
    }
  },
  data() {
    return {
      list: [
        {
          title: "在线客服1",
          subtitle: "Main Customer Support",
          desc: "7*24小时专线服务 贴心至上"
        },
        {
          title: "在线客服2",
          subtitle: "Reserve Customer Support",
          desc: "7*24小时专线服务 贴心至上"
        }
      ],
      switchModal: false,
    };
  },
  components: {},
  methods: {
    switchRegisterModal() {
      this.switchModal = !this.switchModal;
      this.$store.dispatch("pageIndex/switchRegisterModal", this.switchModal);
    },
  }
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  color: white;

  h1 {
    width: 100%;
    font-size: 34px;
  }

  span {
    position: absolute;
    right: 0;
    font-size: 26px;
    padding-right: 2rem;
  }
}

.box {
  position: relative;
  display: flex;
  align-items: center;

  background: white;
  padding: 1.125rem 1.125rem 1.125rem 2.5rem;
  margin: 2.25rem;
  border-radius: 16px;
  justify-content: flex-start;

  &__img {
    background: url("https://h5static.0am08m.com/assets/v4_mine/avatar_nologin.png");
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    overflow: hidden;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
  }

  &__person {
    background: url(https://static.0am08m.com//prod/userprofile/image-avatar-05.png) center no-repeat;
    background-size: cover;
    width: 10rem;
    height: 10rem;
  }

  &__text {
    padding-left: 2rem;
    font-size: 2rem;
    h3 {
      text-align: left;
      color: #333;
    }
    p {
      color: #a5a9b3;
    }
  }
}

.customer {
  background: #f8f8f8;

  &__header {
    background-image: url(https://h5static.0am08m.com/assets/v4_customer/header_bg.png.webp?version=1583111633321);
    background-size: 100% auto;
    background-position: 0 -7.5rem;
    background-repeat: no-repeat;
  }

  &__contact {
    background: whtie;

    &__title {
      position: relative;
      i {
        position: absolute;
        left: 0;
        top: 0;
        width: 3.6rem;
        height: 4.3rem;
        display: block;
        background: url(https://h5static.0am08m.com/assets/v4_common/common_1/out/img/sprite.png?version=1583111633321)
          no-repeat -26.5rem 0;
        background-size: cover;
        float: left;
      }
      h4 {
        margin: 0;
        padding: 0;
        padding-left: 5rem;
        font-size: 3rem;
      }
    }

    ul {
      padding: 2rem;

      li {
        &:first-child {
          background-image: linear-gradient(254deg, #f8d5c0, #ce8a70);
        }

        &:nth-child(2) {
          background-image: linear-gradient(74deg, #8ab3e2, #b5d0ef);
        }

        border-radius: 15px;
        height: 18rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 1rem 3.2rem;
        margin-bottom: 3.2rem;
        color: white;
        box-shadow: 0 5px 7px rgba(0, 0, 0, 0.2);

        p,
        span {
          font-size: 1.875rem;
        }

        p {
          margin-top: 5px;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
