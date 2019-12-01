<template>
  <div>
    <div class="product-img">
      <img :src="`${fileUrl}/${product.photo}`" :alt="product.name">
    </div>
    <div class="product-inner">
      <h4 class="product-title">{{productTitle}}</h4>
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
  computed: {
    productTitle() {
      return `${this.product.name} - ${this.product.size}`
    }
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