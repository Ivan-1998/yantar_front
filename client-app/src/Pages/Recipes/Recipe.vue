<template>
  <div v-if="contentLoaded" class="container recipe-page">
    <div class="recipe-page__header">
      <div class="img" :style="`background-image: url('${fileUrl}/${item.photo}')`"></div>
      <div class="inscription">
        <h2>{{item.title}}</h2>
        <span class="date">{{setNumericDate(item.createdAt)}}</span>
      </div>
    </div>

    <div class="recipe-page__content" v-html="item.content"></div>
  </div>
</template>

<script>
import MixinDate from "../../Mixins/MixinDate";

export default {
  name: 'Recipe',
  mixins: [MixinDate],
  data() {
    return {
      item: {},
      contentLoaded: false
    };
  },
  beforeRouteEnter (to, from, next) {
    next(async vm => {
      await vm.getRecipe();
      vm.contentLoaded = true;
    });
  },
  methods: {
    getRecipe() {
      return this.$http.get(`recipes/${this.$route.params.recipe_id}`)
        .then(response => this.getRecipeHandler(response))
    },
    getRecipeHandler(response) {
      this.item = response.data;
    }
  }
}
</script>

<style lang="scss" scoped>
  .recipe-page__content {
    p {
      padding: 5px 0;
    }
  }
</style>