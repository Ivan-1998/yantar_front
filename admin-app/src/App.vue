<template>
  <div id="app" class="flex-row">
    <Sidebar v-if="!isPublic" />
    <div :class="isPublic ? 'width-full' : 'main-content'">
      <TopMenu v-if="!isPublic" />
      <router-view></router-view>
    </div>  
  </div>
</template>


<script>
import Sidebar from "./Components/Sidebar";
import TopMenu from "./Components/TopMenu";

export default {
  name: 'app',
  computed: {
    isPublic() {
      return this.$route.meta.isPublic;
    }
  },
  components: {
    Sidebar, TopMenu
  }
}
</script>

<style lang="scss">
  @import "./assets/styles/index.scss";
</style>
