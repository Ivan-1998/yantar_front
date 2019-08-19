<template>
  <div class="product">

    <div class="product-img">
      <img :src="`http://sibtiger.com:3000/${product.img[0]}`" :alt="product.title">
    </div>

    <div class="product-inner">
      <h4 class="product-title">{{product.title}}</h4>
      <div class="product-link">
        <SmoothArrow :to="{}" :text="'Подробнее'" :linkModal="true" />
      </div>
    </div>    
  </div>
</template>

<script>
import SmoothArrow from '../../../Components/UI/SmoothArrow';

export default {
  name: 'ProductsProductCart',
  components: {
    SmoothArrow
  },
  props: {
    product: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss">
</style>