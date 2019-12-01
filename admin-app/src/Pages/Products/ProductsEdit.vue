<template>
  <div v-if="contentLoaded" class="container box-shadow">
    <h1 class="container-title">Изменить товар</h1>

    <ProductsForm :product="product"
                  @photoHandler="photoHandler"
                  @sendForm="updateProduct"
    />
  </div>
</template>

<script>
import ProductsForm from "./Components/ProductsForm";
import MixinCommonMethods from "../../mixins/MixinCommonMethods";

export default {
  name: 'ProductsEdit',
  components: {
    ProductsForm
  },
  computed: {
    productId() {
      return this.$route.params.productId;
    }
  },
  mixins: [MixinCommonMethods],
  beforeRouteEnter (to, from, next) {
    next(async vm => {
      await vm.getProduct();
      vm.contentLoaded = true;
    });
  },
  data() {
    return {
      product: {},
      contentLoaded: false,
      types: [
        {
          title: 'Семечки',
          value: 'seeds'
        },
        {
          title: 'Халва',
          value: 'halva'
        },
        {
          title: 'Масло',
          value: 'butter'
        },
      ],
    };
  },
  methods: {
    getProduct() {
      return this.$http.get(`products/${this.productId}`)
              .then(response => this.getProductHandler(response))
              .catch(err => this.$_errorCatchHandler(err))
    },
    getProductHandler(response) {
      const { data } = response;
      this.product = Object.assign({}, data, {
        type: { title: this.types.find(el => el.value === data.type).title, value: data.type }
      });
    },

    setData() {
      const data = Object.assign({}, this.product, {
        type: this.product.type.value
      });
      return data;
    },

    photoHandler(value) {
      this.product.photo = value;
    },

    updateProduct() {
      return this.$http.put(`products/${this.productId}`, this.setData())
              .then(() => this.updateProductHandler())
              .catch(err => this.$_errorCatchHandler(err))
    },
    updateProductHandler() {
      this.showToast({ text: 'Товар обновлен', status: 'success' });
      this.$router.push({ name: 'productsList' });
    }
  }
}
</script>