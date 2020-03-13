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
      switchModal: false
    };
  },
  components: {},
  methods: {
    switchRegisterModal() {
      this.switchModal = !this.switchModal;
      this.$store.dispatch("pageIndex/switchRegisterModal", this.switchModal);
    }
  }
};
</script>

<style lang="scss" scoped>
.customer {
  background-color: #f8f8f8;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  /* bottom: 0.96rem; */
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  background-image: url(https://h5static.0am08m.com/assets/v4_customer/header_bg.png?version=1583773880435);
  background-size: 100% auto;
  background-position: 0 -1.5rem;
  background-repeat: no-repeat;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}
header {
  /* display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  color: white; */
  height: 0.88rem;
  position: relative;
  padding: 0 0.28rem;

  h1 {
    /* font-size: 34px; */
    width: 3.98rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.36rem;
    color: #fff;
    line-height: 0.88rem;
    margin: 0 auto;
    text-align: center;
    font-family: DINPro;
  }

  span {
    /* position: absolute;
    right: 0;
    font-size: 26px; */
    /* padding-right: 2rem; */
    line-height: 0.88rem;
    position: absolute;
    font-size: 0.32rem;
    color: #fff;
    right: 0.28rem;
    top: 0;
  }
}

.box {
  /* position: relative;
  display: flex;
  align-items: center;

  background: white;
  padding: 1.125rem 1.125rem 1.125rem 2.5rem;
  margin: 2.25rem;
  border-radius: 16px;
  justify-content: flex-start; */
  height: 1.8rem;
  padding: 0.4rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 0.1rem;
  margin: 0.2rem 0.42rem;
  background-color: #fff;

  &__img {
    /* background: url("https://h5static.0am08m.com/assets/v4_mine/avatar_nologin.png"); */
    /* width: 10rem;
    height: 10rem; */
    /* border-radius: 50%;
    overflow: hidden;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover; */

    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    overflow: hidden;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("https://h5static.0am08m.com/assets/v4_mine/avatar_nologin.png");
  }

  &__person {
    background: url(https://static.0am08m.com//prod/userprofile/image-avatar-05.png)
      center no-repeat;
    background-size: cover;
    /* width: 10rem;
    height: 10rem; */
  }

  &__text {
    padding-left: 0.2rem;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: left;

    h3 {
      font-size: 0.32rem;
      margin-bottom: 0.1rem;
      line-height: 0.44rem;
      color: #333;
      font-weight: 600;
      font-family: DinPro;
    }

    p {
      font-size: 0.24rem;
      color: #a5a9b3;
      line-height: 0.34rem;
    }
  }
}

.customer {
  padding: 0.4rem 0.28rem;
  background-color: #fff;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;

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
        height: 0.46rem;
        width: 0.48rem;
        display: block;
        background: url(https://h5static.0am08m.com/assets/v4_common/common_1/out/img/sprite.png?version=1583773880435)
          no-repeat -4.52rem 0;
        background-size: 13.06rem 0.72rem;
        float: left;
      }
      h4 {
        font-size: .4rem;
    font-weight: 700;
    line-height: .56rem;
    margin-left: .1rem;
      }
    }

    ul {
      padding: 0.4rem 0.28rem;
      background-color: #fff;
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;

      li {
        height: 2rem;
        -webkit-box-shadow: 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.2);
        box-shadow: 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.2);
        margin-bottom: 0.4rem;
        border-radius: 0.2rem;
        color: #fff;

        &:first-child {
          background-image: linear-gradient(254deg, #f8d5c0, #ce8a70);
        }

        &:nth-child(2) {
          background-image: linear-gradient(74deg, #8ab3e2, #b5d0ef);
        }

        p,
        span {
          font-size: 0.4rem;
          font-weight: 700;
          line-height: 0.56rem;
          margin-left: 0.1rem;
        }

        p {
          font-size: 0.28rem;
          line-height: 0.34rem;
          margin: 0.06rem 0 0.18rem;
          color: hsla(0, 0%, 100%, 0.5);
        }

        span {
          font-size: 0.28rem;
          line-height: 0.4rem;
          font-family: DinPro;
        }
      }
    }
  }
}
</style>
