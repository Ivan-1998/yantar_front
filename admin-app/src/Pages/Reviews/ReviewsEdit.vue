<template>
  <div v-if="contentLoaded" class="container box-shadow">
    <h1 class="container-title">Редактирование отзыва</h1>
    <ReviewsForm v-model="review" @submit="updateReview" />
  </div>
</template>

<script>
import MixinCommonMethods from "../../mixins/MixinCommonMethods";
import ReviewsForm from "./Components/ReviewsForm";

export default {
  name: 'reviewsEdit',
  components: {
    ReviewsForm
  },
  mixins: [MixinCommonMethods],
  computed: {
    reviewId() {
      return this.$route.params.reviewId;
    }
  },
  beforeRouteEnter (to, from, next) {
    next(async vm => {
      await vm.getReview();
      vm.contentLoaded = true;
    });
  },
  data() {
    return {
      review: {},
      contentLoaded: false
    }
  },
  methods: {
    getReview() {
      return this.$http.get(`reviews/${this.reviewId}`)
              .then(response => this.getReviewHandler(response))
              .catch(err => this.$_errorCatchHandler(err))
    },
    getReviewHandler(response) {
      this.review = response.data;
    },

    updateReview() {
      return this.$http.put(`reviews/${this.reviewId}`, this.review)
              .then(() => this.updateReviewHandler())
              .catch(err => this.$_errorCatchHandler(err))
    },
    updateReviewHandler() {
      this.showToast({ text: 'Отзыв обновлён', status: 'success' });
      this.$router.push({ name: 'reviewsList' });
    }
  }
}
</script>