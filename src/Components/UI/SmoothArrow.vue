<template>
  <router-link :to="{name: to}" class="smooth-arrow" :class="className"> 
    <div class="arrow"><span></span></div>
    {{text}}
  </router-link>
</template>

<script>
export default {
  name: 'SmoothArrow',
  props: {
    to: {
      type: String,
      default: () => ''
    },
    text: {
      type: String,
      default: () => 'Перейти'
    },
    className: {
      type: String,
      default: () => 'smooth-arrow__black'
    }
  }
}
</script>