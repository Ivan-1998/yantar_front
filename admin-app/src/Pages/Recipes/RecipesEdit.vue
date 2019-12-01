<template>
  <div v-if="contentLoaded" class="container box-shadow">
    <h1 class="container-title">Редактирование рецепта</h1>

    <RecipesForm :recipe="recipe"
                 @photoHandler="photoHandler"
                 @sendForm="updateNews"
    />
  </div>
</template>

<script>
import RecipesForm from "./Components/RecipesForm";
import MixinCommonMethods from "../../mixins/MixinCommonMethods";

export default {
  name: 'recipeEdit',
  components: {
    RecipesForm
  },
  computed: {
    recipeId() {
      return this.$route.params.recipeId;
    }
  },
  mixins: [MixinCommonMethods],
  beforeRouteEnter (to, from, next) {
    next(async vm => {
      await vm.getRecipe();
      vm.contentLoaded = true;
    });
  },
  data() {
    return {
      recipe: {},
      contentLoaded: false,
    };
  },
  methods: {
    getRecipe() {
      return this.$http.get(`recipes/${this.recipeId}`)
              .then(response => this.getRecipeHandler(response))
              .catch(err => this.$_errorCatchHandler(err))
    },
    getRecipeHandler(response) {
      this.recipe = response.data;
    },

    photoHandler(value) {
      this.recipe.photo = value;
    },

    updateNews() {
      return this.$http.put(`recipes/${this.recipeId}`, this.recipe)
              .then(() => this.updateNewsHandler())
              .catch(err => this.$_errorCatchHandler(err))
    },
    updateNewsHandler() {
      this.showToast({ text: 'Рецепт обновлён', status: 'success' });
      this.$router.push({ name: 'recipesList' });
    }
  }
}
</script>