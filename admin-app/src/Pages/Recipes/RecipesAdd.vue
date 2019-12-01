<template>
  <div class="container box-shadow">
    <h1 class="container-title">Добавить рецепт</h1>

    <RecipesForm :recipe="recipe"
                 @photoHandler="photoHandler"
                 @sendForm="createRecipe"
    />
  </div>
</template>

<script>
import MixinCommonMethods from "../../mixins/MixinCommonMethods";
import RecipesForm from "./Components/RecipesForm";

export default {
  name: 'recipesAdd',
  components: {
    RecipesForm
  },
  mixins: [MixinCommonMethods],
  data() {
    return {
      recipe: {}
    };
  },
  methods: {
    photoHandler(value) {
      this.recipe.photo = value;
    },
    
    createRecipe() {
      return this.$http.post('recipes', this.recipe)
              .then(() => this.createRecipeHandler())
              .catch(err => this.$_errorCatchHandler(err))
    },
    createRecipeHandler() {
      this.showToast({ text: 'Рецепт добавлен', status: 'success' });
      this.$router.push({ name: 'recipesList' });
    }
  }
}
</script>