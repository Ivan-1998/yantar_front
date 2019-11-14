<template>
  <div v-if="actions.length"
       class="actions-menu"
       @mouseleave="toggleMenuShow"
  >
    <button class="btn-transparent actions-menu__dots" @mouseenter="toggleMenuShow"></button>
    <ul v-if="isMenuShow" class="actions-menu__list box-shadow">
      <li v-for="(action, index) in actions"
          :key="index"
          @click="clickHandler(index)"
      >
        {{action.title || action.name}}
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: 'ActionsMenu',
  props: {
    target: {
      type: [Object, Array],
      default: () => {}
    },
    actions: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isMenuShow: false
    };
  },
  methods: {
    toggleMenuShow() {
      this.isMenuShow = !this.isMenuShow;
    },
    clickHandler(index) {
      const value = { index, target: this.target };
      this.$emit('clickHandler', value);
    }
  }
}
</script>

<style scoped lang="scss">
  .actions-menu {
    position: relative;

    &__dots {
      position: relative;
      display: inline-block;
      padding: 0;
      width: 20px;
      height: 20px;
      background-image: url('../assets/images/menu-dots.svg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: 90%;
      cursor: pointer;
      z-index: 5;
    }

    &__list {
      min-width: 175px;
      position: absolute;
      top: -7px;
      right: 0;
      z-index: 4;
      cursor: pointer;
      overflow: hidden;

      li {
        padding: 10px 0 10px 10px;
        &:hover {
          background-color: #E5E5E5;
        }
      }
    }
  }
</style>