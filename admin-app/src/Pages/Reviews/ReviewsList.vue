<template>
  <div class="container box-shadow">
    <h1 class="container-title">Все отзывы</h1>

    <table class="table text-left">
      <thead>
        <tr>
          <th>Дата добавления</th>
          <th>ФИО</th>
          <th>Содержимое</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(review, index) in reviews" :key="index">
          <td>{{setNumericDate(review.createdAt)}}</td>
          <td>{{review.owner.fio}}</td>
          <td>{{review.content}}</td>
          <td>
            <div class="flex-row flex-align-center flex-justify-end">
              <router-link :to="{
                              name: 'reviewsEdit',
                              params: {
                                reviewId: review._id
                              }
                            }"
                            class="mr-5 btn btn-sm btn-green"
              >Окрыть</router-link>

              <ActionsMenu :target="review" :actions="actions" @clickHandler="actionClickHandler" />
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
  name: 'reviewsList',
  components: {
    ActionsMenu
  },
  mixins: [MixinCommonMethods, MixinDate],
  beforeRouteEnter (to, from, next) {
    next(async vm => {
      await vm.getReviews();
    })
  },
  data() {
    return {
      reviews: [],
      actions: [{ title: 'Удалить', method: this.removeReview }]
    };
  },
  methods: {
    getReviews() {
      return this.$http.get('reviews')
              .then(response => this.getReviewsHandler(response))
              .catch(err => this.$_errorCatchHandler(err))
    },
    getReviewsHandler(response) {
      this.reviews = response.data.items;
    },

    actionClickHandler(value) {
      this.actions[value.index].method(value.target);
    },

    async removeReview(value) {
      const confirm = await this.$swal({
        title: 'Вы действительно хотите удалить отзыв?',
        confirmButtonText: 'Удалить',
        showCancelButton: true,
        cancelButtonText: 'Отмена',
        customClass: 'swal2-confirm'
      });

      if (confirm.value) {
        this.$http.delete(`reviews/${value._id}`)
          .then(() => this.removeReviewHandler())
          .catch((err) => this.$_errorCatchHandler(err));
      }
    },
    removeReviewHandler() {
      this.showToast({ text: 'Отзыв удалён', status: 'success' });
      this.getReviews();
    }
  }
}
</script>

<style lang="scss" scoped>
  .table th:nth-child(1) {width: 10%;}
  .table th:nth-child(2) {width: 15%;}
  .table th:nth-child(3) {width: 65%;}
  .table th:nth-child(4) {width: 10%;}
</style>