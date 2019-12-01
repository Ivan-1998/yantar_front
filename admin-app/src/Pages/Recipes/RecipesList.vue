<template>
  <div class="container box-shadow">
    <h1 class="container-title">Все рецепты</h1>

    <table class="table text-left">
      <thead>
        <tr>
          <th>Дата добавления</th>
          <th>Заголовок</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(recipe, index) in recipes" :key="index">
          <td>{{setNumericDate(recipe.createdAt)}}</td>
          <td>{{recipe.title}}</td>
          <td>
            <div class="flex-row flex-align-center flex-justify-end">
              <router-link :to="{ 
                            name: 'recipesEdit',
                            params: {
                              recipeId: recipe._id
                            }
                           }" 
                          class="mr-5 btn btn-sm btn-green"
              >Открыть</router-link>
              <ActionsMenu :target="recipe" :actions="actions" @clickHandler="actionClickHandler" />
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
  name: 'recipes',
  components: {
    ActionsMenu
  },
  mixins: [MixinCommonMethods, MixinDate],
  beforeRouteEnter (to, from, next) {
    next(async vm => {
      await vm.getRecipes();
    })
  },
  data() {
    return {
      recipes: [],
      actions: [
        { title: 'Просмотреть', method: this.previewRecipe},
        { title: 'Удалить', method: this.removeRecipe }
      ]
    };
  },
  methods: {

    getRecipes() {
      return this.$http.get('recipes')
              .then(response => this.getRecipesHandler(response))
              .catch(err => this.$_errorCatchHandler(err))
    },
    getRecipesHandler(response) {
      this.recipes = response.data.items;
    },

    actionClickHandler(value) {
      this.actions[value.index].method(value.target);
    },

    previewRecipe(value) {
      window.open(`http://yantar.in/recipes/${value._id}`);
    },

    async removeRecipe(value) {
      const confirm = await this.$swal({
        title: 'Вы действительно хотите удалить рецепт?',
        confirmButtonText: 'Удалить',
        showCancelButton: true,
        cancelButtonText: 'Отмена',
        customClass: 'swal2-confirm'
      });

      if (confirm.value) {
        this.$http.delete(`recipes/${value._id}`)
          .then(() => this.removeRecipeHandler())
          .catch((err) => this.$_errorCatchHandler(err));
      }
    },
    removeRecipeHandler() {
      this.showToast({ text: 'Рецепт удалён!', status: 'success' });
      this.getRecipes();
    }
  }
}
</script>

<style lang="scss" scoped>
  .table th:nth-child(1) {width: 20%;}
  .table th:nth-child(2) {width: 65%;}
  .table th:nth-child(3) {width: 15%;}
</style>