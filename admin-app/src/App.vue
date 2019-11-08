<template>
  <div id="app">
    <Sidebar v-if="!$route.meta.isPublic" />
    <router-view></router-view>
  </div>
</template>

<script>
import Sidebar from "./Components/Sidebar";

export default {
  name: 'app',
  components: {
    Sidebar
  }
}
</script>

<style lang="scss">
  @import "./assets/styles/index.scss";
</style>
