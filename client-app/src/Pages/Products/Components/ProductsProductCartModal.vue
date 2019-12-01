<template>
  <modal name="product-info"
         @before-open="setData"
         height="auto"
  >
    <div class="modal-product-info__img">
      <img :src="`${fileUrl}/${product.photo}`" :alt="product.name" />
    </div>
    <div class="modal-product-info__content">
      <h2>{{productTitle}}</h2>
      <p v-html="product.description"></p>
    </div>

    <span class="v--modal-close" @click="$modal.hide('product-info')">
      <font-awesome-icon icon="times" />
    </span>
  </modal>
</template>

<script>
export default {
  name: 'ProductsProductCartModal',
  computed: {
    productTitle() {
      return `${this.product.name} - ${this.product.size}`
    }
  },
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