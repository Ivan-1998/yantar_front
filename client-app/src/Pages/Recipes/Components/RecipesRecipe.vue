<template>
  <router-link :to="{name: 'recipe', params: {recipe_id: item._id}}" class="recipe">
    <div class="recipe-img"
         :style="`background-image: url('${fileUrl}/${item.photo}')`">
    </div>

    <div class="recipe-content">
      <p class="recipe-title">{{item.title}}</p>

      <div class="recipe-link">
        <SmoothArrow :to="{name: 'recipe', params: {recipe_id: item._id}}" />
      </div>
      
    </div>

  </router-link>
</template>

<script>
import SmoothArrow from '../../../Components/UI/SmoothArrow';

export default {
  name: 'Recipe',
  components: {
    SmoothArrow
  },
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>