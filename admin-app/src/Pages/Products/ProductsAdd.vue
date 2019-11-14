<template>
  <div class="container box-shadow">
    <h1 class="container-title">Добавить товар</h1>

    <ProductsForm :product="product" 
                  @photoHandler="photoHandler"
                  @sendForm="createProduct"
    />
  </div>
</template>

<script>
import ProductsForm from "./Components/ProductsForm";
import MixinCommonMethods from "../../mixins/MixinCommonMethods";

export default {
  name: 'ProductsAdd',
  components: {
    ProductsForm
  },
  mixins: [MixinCommonMethods],
  data() {
    return {
      product: {},
    };
  },
  methods: {
    photoHandler(value) {
      this.product.photo = value;
    },
    setData() {
      const data = Object.assign({}, this.product, {
        type: this.product.type.value
      });
      return data;
    },
    createProduct() {
      return this.$http.post('products', this.setData())
        .then(() => this.createProductHandler())
        .catch(err => this.$_errorCatchHandler(err))
    },
    createProductHandler() {
      this.$store.commit('setToastInfo', { text: 'Добавлен новый товар', status: 'success' });
      this.$router.push({ name: 'productsList' });
    }
  }
}
</script>

<style lang="scss" scoped>
  .form-group-submit {
    text-align: right;
  }
</style>