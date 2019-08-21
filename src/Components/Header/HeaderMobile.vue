<template>
  <div class="header-mobile">
    <ul class="header-mobile__links">
      <li v-for="(link, index) in links" :key="index">
        <router-link :to="{name: link.routerName}">{{link.text}}</router-link>
      </li>
    </ul> 
  </div>
</template>

<script>
export default {
  name: 'HeaderMobile',
  props: {
    links: {
      type: Array,
      default: () => []
    }
  }
}
</script>