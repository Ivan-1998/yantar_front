<template>
  <modal name="product-info"
         @before-open="setData"
         height="auto"
  >
    <div class="modal-product-info__img">
      <img :src="`http://sibtiger.com:3000/${product.img[0]}`" :alt="`${product.title}`" />
    </div>
    <div class="modal-product-info__content">
      <h2>{{product.title}}</h2>
      <p>{{product.description}}</p>
    </div>

    <span class="v--modal-close" @click="$modal.hide('product-info')">
      <font-awesome-icon icon="times" />
    </span>
  </modal>
</template>

<script>
export default {
  name: 'ProductsProductCartModal',
  data() {
    return {
      product: {
        img: []
      }
    };
  },
  methods: {
    setData(event) {
      this.product = event.params.product;
    }
  }
}
</script>