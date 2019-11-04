<template>
  <div class="main">
    <MainSlider class="main-slider" />
    <MainCartLinks class="main-links" />   
  </div>
</template>

<script>
import MainSlider from './Components/MainSlider';
import MainCartLinks from './Components/MainCartLinks';

export default ({
  name: 'Main',
  components: {
    MainSlider, MainCartLinks
  }
});
</script>