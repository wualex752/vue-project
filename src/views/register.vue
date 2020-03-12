<template>
  <div class="register" v-if="isActive">
    <div class="register__container">
      <div class="register__header">
        <span @click="closeModal"></span>
        <h1>注册</h1>
      </div>
      <div class="register__logo">{{formType}}</div>

      <div class="register__form" v-if="formType ==='register'">
        <!-- <input type="password" style="display:none;" readonly /> -->
        <div>
          <div class="register__form__item" :class="{ 'form-group--error': $v.account.$error }">
            <picture>
              <source
                srcset="https://h5static.0am08m.com/assets/entry/entry_user_icon.png.webp?version=1583111633321"
                type="image/webp"
              />
              <img class="mr-15" src="https://h5static.0am08m.com/assets/entry/entry_user_icon.png" />
            </picture>
            <div class="form-group">
              <div class="form-group__control">
                <input type="search" class="form__input" v-model.trim="$v.account.$model" />
              </div>
              <div class="form-placeholder">用户名</div>
            </div>

            <div @click="clear('account')">
              <picture>
                <source
                  srcset="https://h5static.0am08m.com/assets/entry/entry_clear_icon.png.webp?version=1583111633321"
                  type="image/webp"
                />
                <img
                  class="mr-15"
                  src="https://h5static.0am08m.com/assets/entry/entry_clear_icon.png"
                />
              </picture>
            </div>

            <!-- 帳號驗證錯誤，出現的錯誤訊息 -->
            <div class="error" v-if="!$v.account.required">請輸入6-12位字母或數字</div>
          </div>

          <div class="register__form__item" :class="{ 'form-group--error': $v.password.$error }">
            <picture>
              <source
                srcset="https://h5static.0am08m.com/assets/entry/entry_password_icon.png.webp?version=1583111633321"
                type="image/webp"
              />
              <img
                class="mr-15"
                src="https://h5static.0am08m.com/assets/entry/entry_password_icon.png"
              />
            </picture>

            <div class="form-group">
              <div class="form-group__control">
                <input v-if="passwordType" v-model.trim="$v.password.$model" type="text" />
                <input v-else v-model.trim="$v.password.$model" type="password" />
              </div>
              <div class="form-placeholder">密码</div>
            </div>

            <!-- 小眼睛切換圖片 -->
            <div @click="passwordType = !passwordType">
              <picture v-if="passwordType">
                <source
                  srcset="https://h5static.0am08m.com/assets/entry/entry_hide_password.png.webp?version=1583111633321"
                  type="image/webp"
                />
                <img
                  class="mr-15"
                  src="https://h5static.0am08m.com/assets/entry/entry_hide_password.png"
                />
              </picture>

              <picture v-else>
                <source
                  srcset="https://h5static.0am08m.com/assets/entry/entry_display_password.png.webp?version=1583111633321"
                  type="image/webp"
                />
                <img
                  class="mr-15"
                  src="https://h5static.0am08m.com/assets/entry/entry_display_password.png"
                />
              </picture>
            </div>

            <!-- 密碼驗證錯誤，出現的錯誤訊息 -->
            <div class="error" v-if="!$v.password.required">
              <IconBase icon-name="info" width="18" height="18">
                <IconInfo />
              </IconBase>请输入6-12位字母或数字！
            </div>
            <div
              class="error"
              v-if="!$v.password.minLength"
            >密码至少要有6位{{ $v.password.$params.minLength.min }} 字母或数字！</div>
          </div>

          <div
            class="register__form__item"
            :class="{ 'form-group--error': $v.repeatPassword.$error }"
          >
            <picture>
              <source
                srcset="https://h5static.0am08m.com/assets/entry/entry_password_icon.png.webp?version=1583773880435"
                type="image/webp"
              />
              <img
                class="mr-15"
                src="https://h5static.0am08m.com/assets/entry/entry_password_icon.png"
              />
            </picture>

            <div class="form-group">
              <div class="form-group__control">
                <input
                  v-if="repeatPasswordType"
                  v-model.trim="$v.repeatPassword.$model"
                  type="text"
                />
                <input v-else v-model.trim="$v.repeatPassword.$model" type="password" />
              </div>
              <div class="form-placeholder">确认密码</div>
            </div>

            <!-- 小眼睛切換圖片 -->
            <div @click="repeatPasswordType = !repeatPasswordType">
              <!-- 小眼睛切換圖片 -->
              <picture v-if="passwordType">
                <source
                  srcset="https://h5static.0am08m.com/assets/entry/entry_hide_password.png.webp?version=1583111633321"
                  type="image/webp"
                />
                <img
                  class="mr-15"
                  src="https://h5static.0am08m.com/assets/entry/entry_hide_password.png"
                />
              </picture>

              <picture v-else>
                <source
                  srcset="https://h5static.0am08m.com/assets/entry/entry_display_password.png.webp?version=1583111633321"
                  type="image/webp"
                />
                <img
                  class="mr-15"
                  src="https://h5static.0am08m.com/assets/entry/entry_display_password.png"
                />
              </picture>
            </div>

            <!-- 確認密碼 驗證錯誤，出現的錯誤訊息 -->
            <div class="error" v-if="!$v.repeatPassword.sameAsPassword">输入的密码不一致</div>
          </div>

          <!-- 驗證碼 -->
          <div class="register__form__item">
            <picture>
              <source
                srcset="https://h5static.0am08m.com/assets/entry/entry_verify_icon.png.webp?version=1583111633321"
                type="image/webp"
              />
              <img
                class="mr-15"
                src="https://h5static.0am08m.com/assets/entry/entry_verify_icon.png"
              />
            </picture>

            <div class="form-group">
              <div class="form-group__control">
                <input v-model.trim="$v.verify.$model" type="text" value />
              </div>
              <div class="form-placeholder">验证码</div>
            </div>

            <div>
              
              <img
                data-analytics="button"
                data-label="验证码图片"
                class="_13dCS2eBtf2ngAqfNlH0N2"
                src="blob:https://www.yabo334.com/1986180a-8939-46c1-b587-a73e3d4709c8"
              />
            </div>

            <!-- 驗證碼沒有輸入 驗證錯誤，出現的錯誤訊息 -->
            <div class="error" v-if="!$v.verify.required">请输入验证码</div>
          </div>
        </div>
        <div>
          <button @click="submit" class="submit-btn" type="button">注册</button>
        </div>
        <div class="have-account">
          <span @click="switchLogin">已有亚博账号</span>
        </div>
      </div>

      <Login v-else :switchRegister="formType" />
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, sameAs } from "vuelidate/lib/validators";

import IconBase from "@/assets/Icon/IconBase";
import IconInfo from "@/assets/Icon/IconInfo";

import Login from "./login";

export default {
  name: "register",
  mixins: [validationMixin],
  components: {
    IconBase,
    IconInfo,
    Login
  },
  computed: {
    isActive() {
      return this.$store.state.pageIndex.switchRegisterModal;
    }
  },
  data() {
    return {
      name: "",
      account: "",
      password: "",
      repeatPassword: "",
      verify: "",
      submitStatus: "",
      passwordType: false,
      repeatPasswordType: false,
      formType: "register"
    };
  },
  methods: {
    clear(item) {
      this[item] = "";
    },
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    },
    closeModal() {
      this.$store.dispatch("pageIndex/switchRegisterModal", false);
    },
    switchLogin() {
      this.formType = "login";
    }
  },
  validations: {
    account: {
      required,
      minLength: minLength(6)
    },
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      sameAsPassword: sameAs("password")
    },
    verify: {
      required
    }
  }
};
</script>

<style lang="scss">
.register {
  background-image: url(https://h5static.0am08m.com/assets/v4_entry/quickRegister_bg.jpg.webp?version=1583111633321);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  overflow-x: hidden;

  &__container {
    padding: 0 1.5rem;
    width: 100%;
    height: 100%;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
  }

  &__header {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 5rem;
    padding: 0 3.3rem;
    margin: 6rem 0 9.2rem;
    h1 {
      font-size: 3.6rem;
      color: white;
      margin: 0;
    }
    span {
      background-image: url(https://h5static.0am08m.com/assets/entry/register_icon_close.png.webp?version=1583773880435);
      background-repeat: no-repeat;
      background-position: 50%;
      background-size: contain;
      width: 4rem;
      height: 4rem;
      position: absolute;
      top: 6rem;
      left: 3rem;
    }
  }

  &__logo {
    background-image: url(https://h5static.0am08m.com/assets/v4_entry/quickRegister_logo.png.webp?version=1583111633321);
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: contain;
    width: 102px;
    min-height: 151px;
    margin-bottom: 40px;
  }

  &__form {
    height: 545px;
    width: 80vw;
    margin-bottom: 18px;

    &__item {
      display: flex;
      flex-flow: row nowrap;
      justify-self: flex-start;
      align-items: center;
      width: 100%;
      height: 76.5px;
      border-radius: 45px;
      margin-bottom: 30px;
      padding: 0 25px;
      background: rgba(255, 255, 255, 0.3);
      position: relative;

      .form-group {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        min-width: 80%;
        background: transparent;

        &__control {
          width: 100%;
          input {
            background: transparent;
            border: none;
            font-size: 2.8rem;
            width: 100%;
            height: 100%;
            color: white;
            line-height: 1;
          }
        }

        &__line {
        }
      }

      .form-placeholder {
        color: #fff;
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        left: 0;
        z-index: -1;
        font-size: 2.8rem;
        opacity: 0;
      }
    }
  }
}

.mr-15 {
  margin-right: 1.5rem;
}

.submit-btn {
  width: 100%;
  height: 7.7rem;
  line-height: 7.7rem;
  border: none;
  border-radius: 4rem;
  font-size: 2.8rem;
  color: #fff;
  opacity: 0.5;
  background-image: linear-gradient(90deg, #dccab8, #d2b496);
}

.have-account {
  margin-top: 3rem;
  span {
    font-size: 2rem;
    color: #fff;
  }
}

.error {
  position: absolute;
  left: 82px;
  bottom: -26px;
  color: white;
  font-size: 1.6rem;
}

// Css Trick:覆蓋 AutoComplete webkit瀏覽器套上的樣式
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-text-fill-color: white;
  -webkit-box-shadow: 0 0 0px 1000px transparent inset;
  transition: background-color 5000s ease-in-out 0s;
}

svg {
  margin-right: 0.3rem;
}

.error {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>