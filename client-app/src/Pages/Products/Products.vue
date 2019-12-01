<template>
  <div class="container products">
    <h1 class="page-title">{{pageTitle}}</h1>

    <ProductsFilter :params="paginate" />

    <div class="products-list">
      <div class="product" v-for="(product, index) in products"
                           :key="index"
                           @click="openModalHandler(product)"
      >
        <ProductsProductCart :product="product"  />
      </div>
    </div>

    <ul class="products-paginate" v-if="false">
      <li><span>1</span></li>
      <li><span>2</span></li>
      <li><span>3</span></li>
    </ul> 

    <ProductsProductCartModal />
  </div>
</template>

<script>
import MixinCommonMethods from '../../Mixins/MixinCommonMethods';
import ProductsFilter from "./Components/ProductsFilter";
import ProductsProductCart from './Components/ProductsProductCart';
import ProductsProductCartModal from './Components/ProductsProductCartModal';

export default ({
  name: 'Products',
  mixins: [MixinCommonMethods],
  components: {
    ProductsProductCart, ProductsProductCartModal,
    ProductsFilter
  },
  mounted() {
    this.$store.commit('setPage', { title: 'Наша продукция' });
  },
  beforeRouteEnter (to, from, next) {
    next(async vm => {
      await vm.getProducts();
      vm.openProduct();
    })
  },
  watch: {
    paginate: {
      handler() {
        this.getProducts();
        this.$router.replace({
          name: 'products',
          query: this.paginate
        });
      },
      deep: true
    }
  },
  data() {
    return {
      products: [],
      paginate: {
        type: this.$route.query.type || 'all'
      }
    };
  },
  methods: {
    setPaginate() {
      return {
        type: this.paginate.type === 'all' ? undefined : this.paginate.type
      }
    },

    getProducts() {
      return this.$http.get('products', { params: this.setPaginate() })
        .then(response => this.getProductsHandler(response));
    },
    getProductsHandler(response) {
      this.products = response.data.items;
    },

    openModalHandler(product) {
      this.$router.replace({ name: 'products', query: { product_open: product._id } });
      this.$modal.show('product-info', { product });
    },

    openProduct() {
      const id = this.$route.query.product_open;

      if (id) {
        const product = this.products.find(el => el._id == id);
        this.openModalHandler(product);
      }
    }
  }
});
</script>

<style lang="scss">
</style>