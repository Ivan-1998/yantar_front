<template>
  <div class="about__reviews">
    <h2 class="about__block-title">Отзывы о нашей продукции</h2>
    <slick :options="slickOptions" ref="reviewSlick" class="reviews-slider">
      <div v-for="(review, index) in value" 
           :key="index"
           class="reviews-slider__slide"
      > 
      <div class="reviews-slider__slide-content">
        <div :style="`background-image: url('${fileUrl}/${review.photo}')`"
           class="reviews-slider__slide-photo"
        ></div>
        <div class="reviews-slider__slide-text">
          <p class="content">"{{review.content}}"</p>
          <p class="fio">{{review.owner.fio}}.<br>{{review.owner.position}}.</p>
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
  name: 'AboutReviews',
  components: {
    Slick
  },
  props: {
    value: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      slickOptions: {
        dots: true,
        adaptiveHeight: true,
        prevArrow: false,
        nextArrow: false
      }
    };
  },
  methods: {
    toNextSlide() {
      this.$refs.reviewSlick.next();
    },
    toPrevSlide() {
      this.$refs.reviewSlick.prev();
    }
  }
}
</script>

<style lang="scss">
// includes
@import '../../../assets/styles/includes/variables.scss';

.slick {
  &-arrows {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: calc(50% - 22.5px);

    button {
      width: 45px;
      height: 45px;

      border-radius: 50%;
      border: 1px solid transparent;
      background: $yellow;
      color: #fff;
      cursor: pointer;
    }
  }
}

@media (max-width: $desktop-big) {
  .slick {
    &-arrows {
      button {
        &:first-child {
          margin-left: -40px;
        }
        &:last-child {
          margin-right: -40px;
        }
      }
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