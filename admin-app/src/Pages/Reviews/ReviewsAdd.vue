<template>
  <div class="container box-shadow">
    <h1 class="container-title">Добавить отзыв</h1>
    <ReviewsForm v-model="review" @submit="createReview" />
  </div>
</template>

<script>
import MixinCommonMethods from "../../mixins/MixinCommonMethods";
import ReviewsForm from "./Components/ReviewsForm";

export default {
  name: 'reviewsAdd',
  components: {
    ReviewsForm
  },
  mixins: [MixinCommonMethods],
  data() {
    return {
      review: {
        owner: {}
      }
    };
  },
  methods: {
    createReview() {
      this.$http.post('reviews', this.review)
        .then(() => this.createReviewHandler())
        .catch(err => this.$_errorCatchHandler(err))
    },
    createReviewHandler() {
      this.showToast({ text: 'Отзыв добавлен', status: 'success' });
      this.$router.push({ name: 'reviewsList' });
    }
  }
}
</script>