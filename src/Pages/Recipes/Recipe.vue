<template>
  <div class="container recipe-page">
    <div class="recipe-page__header">
      <div class="img" :style="`background-image: url('http://yantar.in:5000${item.images}')`"></div>
      <div class="inscription">
        <h2>{{item.title}}</h2>
        <span class="date">{{item.date}}</span>
      </div>
    </div>

    <div class="recipe-page__content" v-html="item.description"></div>
  </div>
</template>

<script>
export default {
  name: 'Recipe',
  data() {
    return {
      item: {}
    };
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getRecipe();
    })
  },
  methods: {
    getRecipe() {
      this.$http.get(`api/recipes/${this.$route.params.recipe_id}`)
        .then(response => this.item = response.body)
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