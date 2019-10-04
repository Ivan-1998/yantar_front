<template>
  <div>
    <img v-for="(image, index) in images"
         :src="image.src"
         :alt="image.alt"
         :key="index"
         @click="openLightBox(index)"
    />

    <transition name="fade">
      <div class="lightbox" v-if="isLightboxVisible">
        <div class="lightbox-content" v-click-outside="toggleIsLighboxVisible">
          <img :src="currentImage.src" :alt="currentImage.alt">
        </div>
      </div>
    </transition>
    
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside';

export default {
  name: 'imgLightbox',
  directives: {
    clickOutside: vClickOutside.directive
  },
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isLightboxVisible: false,
      currentImage: {}
    };
  },
  methods: {
    openLightBox(index) {
      this.currentImage = this.images[index];
      this.toggleIsLighboxVisible();
    },
    toggleIsLighboxVisible() {
      this.isLightboxVisible = !this.isLightboxVisible;
    }
  }
}
</script>

<style lang="scss" scoped>
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 30;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: auto;
      height: 60vh;
    }
  }
</style>