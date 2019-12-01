<template>
  <div class="container box-shadow">
    <h1 class="container-title">Список товаров</h1>

    <table class="table text-left">
      <thead>
        <tr>
          <th>Дата добавления</th>
          <th>Название</th>
          <th>Тип</th>
          <th>Размер</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(product, index) in products" :key="index">
          <td>{{setNumericDate(product.createdAt)}}</td>
          <td>{{product.name}}</td>
          <td>{{translateType(product.type)}}</td>
          <td>{{product.size}}</td>
          <td>
            <div class="flex-row flex-align-center">
              <router-link :to="{ 
                            name: 'productsEdit',
                            params: {
                              productId: product._id
                            }
                           }" 
                          class="mr-5 btn btn-sm btn-green"
              >Открыть</router-link>
              <ActionsMenu :target="product" :actions="actions" @clickHandler="actionClickHandler" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import MixinCommonMethods from "../../mixins/MixinCommonMethods";
import MixinDate from "../../mixins/MixinDate";

import ActionsMenu from "../../Components/ActionsMenu";

export default {
  name: 'ProductsList',
  components: {
    ActionsMenu
  },
  mixins: [MixinCommonMethods, MixinDate],
  beforeRouteEnter (to, from, next) {
    next(async vm => {
      await vm.getProducts();
    })
  },
  data() {
    return {
      products: [],
      actions: [
        { title: 'Просмотреть', method: this.previewProduct },
        { title: 'Удалить', method: this.removeProduct }
      ]
    };
  },
  methods: {
    getProducts() {
      return this.$http.get('products')
              .then(response => this.getProductsHandler(response))
              .catch(err => this.$_errorCatchHandler(err))
    },
    getProductsHandler(response) {
      this.products = response.data.items;
    },

    actionClickHandler(value) {
      this.actions[value.index].method(value.target);
    },

    previewProduct(value) {
      window.open(`http://yantar.in/products?product_open=${value._id}`);
    },

    async removeProduct(value) {
      const confirm = await this.$swal({
        title: 'Вы действительно хотите удалить товар?',
        confirmButtonText: 'Удалить',
        showCancelButton: true,
        cancelButtonText: 'Отмена',
        customClass: 'swal2-confirm'
      });

      if (confirm.value) {
        this.$http.delete(`products/${value._id}`)
          .then(() => this.removeProductHandler())
          .catch((err) => this.$_errorCatchHandler(err));
      }
    },
    removeProductHandler() {
      this.showToast({ text: 'Товар удален', status: 'success' });
      this.getProducts();
    },

    translateType(type) {
      const types = {
        butter: 'Масло',
        seeds: 'Семечки',
        halva: 'Халва'
      };

      return types[type] || ' - ';
    }
  }
}
</script>

<style scoped>
  .table th:nth-child(1) {width: 15%;}
  .table th:nth-child(2) {width: 45%;}
  .table th:nth-child(3) {width: 15%;}
  .table th:nth-child(4) {width: 15%;}
  .table th:nth-child(5) {width: 10%;}
</style>