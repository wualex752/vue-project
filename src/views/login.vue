<template>
  <div>
    <!-- 登入 -->
    <div class="register__form">
      <!--  -->

      <div class="register__form" v-if="formType ==='register'">
        <!-- <input type="password" style="display:none;" readonly /> -->
        <div>
          <div class="register__form__item" :class="{ 'form-group--error': $v.account.$error }">
            <img
              class="mr-15"
              src="https://h5static.0am08m.com/assets/entry/entry_user_icon.png.webp?version=1583111633321"
            />
            <div class="form-group">
              <div class="form-group__control">
                <input type="search" class="form__input" v-model.trim="$v.account.$model" />
              </div>
              <div class="form-placeholder">用户名</div>
            </div>

            <div @click="clear('account')">
              <img
                src="https://h5static.0am08m.com/assets/entry/entry_clear_icon.png.webp?version=1583111633321"
              />
            </div>

            <!-- 帳號驗證錯誤，出現的錯誤訊息 -->
            <div class="error" v-if="!$v.account.required">請輸入6-12位字母或數字</div>
          </div>

          <div class="register__form__item" :class="{ 'form-group--error': $v.password.$error }">
            <img
              class="mr-15"
              src="https://h5static.0am08m.com/assets/entry/entry_password_icon.png.webp?version=1583111633321"
            />
            <div class="form-group">
              <div class="form-group__control">
                <input v-if="passwordType" v-model.trim="$v.password.$model" type="text" />
                <input v-else v-model.trim="$v.password.$model" type="password" />
              </div>
              <div class="form-placeholder">密码</div>
            </div>

            <!-- 小眼睛切換圖片 -->
            <div @click="passwordType = !passwordType">
              <img
                v-if="passwordType"
                src="https://h5static.0am08m.com/assets/entry/entry_hide_password.png.webp?version=1583111633321"
              />
              <img
                v-else
                src="https://h5static.0am08m.com/assets/entry/entry_display_password.png.webp?version=1583111633321"
              />
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

          
        </div>
        <div>
          <button @click="submit" class="submit-btn" type="button">注册</button>
        </div>
        
      </div>

      <!--  -->
      <div class="have-account">
        <span @click="switchRegister">注册新账号</span>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "login",
  mixins: [validationMixin],
  data() {
    return {
      account: "",
      password: "",
      passwordType: false
    };
  },
  validations: {
    account: {
      required,
      minLength: minLength(6)
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },
  methods: {
    clear(item) {
      this[item] = "";
    },
    switchRegister() {
      this.$emit("switchRegister", "register");
    }
    
  }
};
</script>

<style>
</style>