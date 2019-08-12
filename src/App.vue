<template>
  <div id="app">
    <Header />

    <router-view></router-view>
    
    <Feedback />
    <Footer />
  </div>
</template>

<script>
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Feedback from './Components/Feedback/Feedback';

export default {
  name: 'app',
  components: {
    Header, Footer, Feedback
  }
}
</script>


<style lang="scss">
  @import './assets/styles/index.scss';
</style>