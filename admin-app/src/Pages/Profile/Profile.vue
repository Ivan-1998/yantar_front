<template>
  <div class="container box-shadow">
    <h1 class="container-title">Мой профиль</h1>

    <ProfileForm v-model="user" @submit="updateUser" />
  </div>
</template>

<script>
import ProfileForm from "./Components/ProfileForm";
import MixinCommonMethods from "../../mixins/MixinCommonMethods";

export default {
  name: 'Profile',
  mixins: [MixinCommonMethods],
  components: {
    ProfileForm
  },
  computed: {
    user() {
      return JSON.parse(JSON.stringify(this.$store.state.user));
    }
  },
  data() {
    return {

    };
  },
  methods: {
    updateUser() {
      this.$http.put('auth/updatedetails', this.user)
        .then(response => this.updateUserHandler(response))
        .catch(err => this.$_errorCatchHandler(err))
    },
    updateUserHandler() {
      this.showToast({ text: 'Информация обновлена', status: 'success' });
      this.$store.commit('setUserData', this.user);
    }
  }
}
</script>