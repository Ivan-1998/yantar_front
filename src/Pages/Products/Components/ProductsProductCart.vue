<template>
  <div class="good">

    <div class="good__img" :style="{
      backgroundImage: `url('http://sibtiger.com:3000/${product.halva_img[0]}')`,
      backgroundSize: '90%',
      backgroundPosition: 'center center'
      }">
    </div>

    <div class="good__inner">
      <div class="good__title">{{product.title}}</div>
      <div class="good__info-more">
        <a href="#" class="link-go">
          <span>подробнее</span>
          <div class="arrow"><span></span></div>
        </a>
      </div>
    </div>    
  </div>
</template>

<script>
export default {
  name: 'ProductsProductCart',
  props: {
    product: {
      type: Object,
      default: () => {}
    }
  }
}
</script>