<template>
  <div class="top-menu"
       @mouseenter="toggleShowSubmenu"
       @mouseleave="toggleShowSubmenu"
  >
    <div class="top-menu-content">
      <div class="top-menu__left">
        <p class="text-green">{{user.email}}</p> 
        <p>{{translateRole(user.role)}}</p>
      </div>
      <div class="top-menu__right flex-row flex-align-center">
        <div class="user-photo"></div>
        <span class="chevron" :class="{'chevron-top': isSubmenuShow}"></span>
      </div>

      <ul v-if="isSubmenuShow" class="top-menu__sub">
        <router-link tag="li" :to="{}" class="text-green">Мой профиль</router-link>
        <li class="text-green">Выйти из аккаунта</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopMenu',
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  data() {
    return {
      isSubmenuShow: false
    };
  },
  methods: {
    toggleShowSubmenu() {
      this.isSubmenuShow = !this.isSubmenuShow;
    },

    translateRole(role) {
      const roles = {
        admin: 'Администратор'
      };

      return roles[role];
    }
  }
}
</script>

<style lang="scss" scoped>
  .top-menu {
    width: 100%;
    height: 80px;
    padding: 0 60px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-radius: 3px 3px 3px 0;
    background-color: #fff;
    box-shadow: 10px 4px 10px #E5E5E5;

    &-content {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      cursor: pointer;
    }

    &__left {
      margin-right: 15px;
    }

    &__right {
      .user-photo {
        width: 62px;
        height: 62px;
        margin-right: 5px;
        background-color: #E5E5E5;
        border-radius: 50%;
      }
    }

    // submenu
    &__sub {
      width: 100%;
      position: absolute;
      top: 80px;
      right: 0;
      padding: 10px 15px 20px 15px;

      background-color: #fff;
      box-shadow: 1px 10px 10px #E5E5E5;
      border-radius: 3px;

      li {
        cursor: pointer;
        &:not(:last-child) {
          margin-bottom: 7px;
        }
      }
    }
  }
</style>