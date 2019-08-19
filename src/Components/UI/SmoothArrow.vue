<template>
  <router-link :to="to"
               class="smooth-arrow"
               :class="className"
               @click.native="clickHandler"> 

    <div class="arrow"><span></span></div>
    {{text}}
  </router-link>
</template>

<script>
export default {
  name: 'SmoothArrow',
  props: {
    to: {
      type: Object
    },
    text: {
      type: String,
      default: () => 'Перейти'
    },
    className: {
      type: String,
      default: () => 'smooth-arrow__black'
    },
    linkModal: {
      type: Boolean,
      default: () => false
    }
  },
  methods: {
    clickHandler() {
      if (this.linkModal) {
        return false;
      } else return true;
    }
  }
}
</script>