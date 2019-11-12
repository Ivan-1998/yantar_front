<template>
  <div class="flex-row flex-align-center flex-justify-center width-full login">
    <ValidationObserver tag="form"
                        ref="login"
                        class="box-shadow login-form"
                        @submit.prevent="login"
    >
      <img src="../../assets/images/logo.png" alt="Logo" class="login-form__logo" />

      <ValidationProvider tag="div"
                          class="form-group form-group-big mb-40"
                          rules="required|email"
                          v-slot="{ errors }"
      >
        <label for="email">Email</label>
        <input v-model="user.email"
               type="email"
               id="email"
               :class="{'input-error' : errors[0]}"
        />
      </ValidationProvider>

      <ValidationProvider tag="div"
                          class="form-group form-group-big mb-40"
                          rules="required"
                          v-slot="{ errors }"
      >
        <label for="password">Пароль</label>
        <input v-model="user.password"
               type="password"
               id="password"
               :class="{'input-error' : errors[0]}"
        />
      </ValidationProvider>

      <div class="form-group">
        <button type="submit" class="width-full btn btn-big btn-green">Войти</button>
      </div>
    </ValidationObserver>

  </div>
</template>

<script>
import MixinCommonMethods from "../../mixins/MixinCommonMethods";

export default {
  name: 'Auth',
  mixins: [MixinCommonMethods],
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    async login() {
      const isValid = await this.$refs.login.validate();

      if (isValid) {
        this.$http.post('auth/login', this.user)
          .then(response => this.loginHandler(response))
          .catch(err => this.$_errorCatchHandler(err))
      }
    },
    loginHandler(response) {
      const { data } = response;
      localStorage.setItem('token', data.token);
      
      this.$router.push({ name: 'productsList' });
    }
  }
}
</script>

<style lang="scss" scoped>
  .login {
    height: 100vh;

    &-form {
      width: 490px;
      padding: 28px 46px 74px 46px;
      box-sizing: border-box;
      text-align: center;

      &__logo {
        width: 130px;
        height: 115px;
        margin-bottom: 47px;
      }
    }
  }
</style>