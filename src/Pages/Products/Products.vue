<template>
  <div class="container products">
    <h1 class="page-title">{{pageTitle}}</h1>

    <div class="products-list">
      <ProductsProductCart v-for="(product, index) in products" :key="index" :product="product" />
    </div>

    <ul class="products-paginate" v-if="false">
      <li><span>1</span></li>
      <li><span>2</span></li>
      <li><span>3</span></li>
    </ul> 
  </div>
</template>

<script>
import ProductsProductCart from './Components/ProductsProductCart';
import MixinCommonMethods from '../../Mixins/MixinCommonMethods';

export default ({
  name: 'Products',
  mixins: [MixinCommonMethods],
  components: {ProductsProductCart},
  mounted() {
    this.$store.commit('setPage', {title: 'Наша продукция'});
  },
  data() {
    return {
      products: []
    };
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getProducts();
    })
  },
  methods: {
    getProducts() {
      this.$http.get('api/marketplace/all/')
        .then(response => {
          const data = response.body.products;
          this.products = this.products.concat(data.butter, data.halva, data.seed);
        });
    }
  }
});
</script>

<style lang="scss">
</style>