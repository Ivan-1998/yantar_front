<template>
  <div class="container recipes">
    <h1 class="page-title">{{pageTitle}}</h1>
    <RecipesRecipe v-for="item in recipes" :key="item.id" :item="item" />
  </div>
</template>

<script>
import RecipesRecipe from './Components/RecipesRecipe';
import MixinCommonMethods from '../../Mixins/MixinCommonMethods';

export default ({
  name: 'Recipes',
  mixins: [MixinCommonMethods],
  components: {
    RecipesRecipe
  },
  mounted() {
    this.$store.commit('setPage', {title: 'Наши рецепты'});
  },
  data() {
    return {
      recipes: []
    };
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getRecipes();
    })
  },
  methods: {
    getRecipes() {
      this.$http.get('api/recipes')
        .then(response => this.recipes = response.body)
    }
  }
});
</script>