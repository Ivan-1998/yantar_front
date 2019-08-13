<template>
  <div class="products">
    <div class="products__content">
      <div class="goods">
        <h3 class="goods__title">Наша продукция</h3>

        <div class="goods__content">
          <ProductsProductCart v-for="product in products" :key="product.id" :product="product" />
        </div>

        <ul class="goods__paginate" v-if="false">
          <li><span>1</span></li>
          <li><span>2</span></li>
          <li><span>3</span></li>
        </ul>
      </div>  
    </div>
  </div>
</template>

<script>
import ProductsProductCart from './Components/ProductsProductCart';

export default ({
  name: 'Products',
  components: {ProductsProductCart},
  data() {
    return {
      products: []
    };
  },
  methods: {
    getProducts() {
      this.$http.get('api/marketplace/halva/')
        .then(response => this.products = response.body)
    }
  },
  mounted() {
    this.getProducts();
  }
});
</script>