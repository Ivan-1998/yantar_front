<template>
  <div>
    <slick :options="slickOptions" ref="slick">
      <div class="main-slider__slide main-slider__slide-bg">
        <div class="container">
          <div class="left">
             <h1>Мы запустили новый сайт!</h1>
          </div>
          <div class="right">
            <img src="../../../assets/images/main-slide__img1.png" alt="">
          </div>
        </div>
      </div>

      <div class="main-slider__slide">
        <div class="container">
          <div class="left">
             <h1>Просмотрите каталог нашей продукции!</h1>
             <router-link :to="{name: 'products'}" class="btn btn-lg btn-black">Перейти</router-link>
          </div>
          <div class="right">
            <img src="../../../assets/images/main-slide__img2.png" alt="">
          </div>
        </div>
      </div>

      <div class="main-slider__slide">
        <div class="container">
          <div class="left">
             <h1>По любым вопросам, обращайтесь через форму обратной связи</h1>
          </div>
          <div class="right">
            <img src="../../../assets/images/main-slide__img3.png" alt="">
          </div>
        </div>
      </div>

    </slick>

    <div class="slick-arrows">
      <button @click="toPrevSlide"><font-awesome-icon icon="chevron-left" size="lg" /></button>
      <button @click="toNextSlide"><font-awesome-icon icon="chevron-right" size="lg" /></button>
    </div>
  </div>
</template>

<script>
import Slick from 'vue-slick';

export default {
  name: 'MainSlider',
  components: {
    Slick
  },
  data() {
    return {
      slickOptions: {
        dots: true,
        prevArrow: false,
        nextArrow: false,
        responsive: [
          {
            breakpoint: 721,
            settings: {
              dots: true
            }
          }
        ]
      }
    };
  },
  methods: {
    toNextSlide() {
      this.$refs.slick.next();
    },
    toPrevSlide() {
      this.$refs.slick.prev();
    }
  }
}
</script>

<style lang="scss">
  // includes
  @import '../../../assets/styles/includes/variables.scss';
  @import '../../../assets/styles/libraries/slick.scss';

  .slick {
    &-arrows {
      width: 1100px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: absolute;
      left: calc(50% - 550px);
      top: calc(50% - 22.5px - 30px);

      button {
        width: 45px;
        height: 45px;

        border-radius: 50%;
        border: 1px solid transparent;
        background: rgba(0, 0, 0, 0.14);
        color: #fff;
        cursor: pointer;
      }
    }
  }

@media (max-width: $desktop-big) {
  .slick {
    &-arrows {
      width: 97%;
      left: 1.5%;
    }
  }
}

@media (max-width: $tablet) {
  .slick {
    &-arrows {
      display: none;
    }
  }
}
</style>