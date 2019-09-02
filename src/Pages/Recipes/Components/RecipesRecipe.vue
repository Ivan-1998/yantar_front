<template>
  <router-link :to="{name: 'recipe', params: {recipe_id: item.id}}" class="recipe">
    <div class="recipe-img"
         :style="`background-image: url('http://sibtiger.com:3000${item.images[0]}')`">
    </div>

    <div class="recipe-content">
      <p class="recipe-title">{{item.title}}</p>
      <p class="recipe-description">{{item.description | truncate(250)}}</p>

      <div class="recipe-link">
        <SmoothArrow :to="{name: 'recipe', params: {recipe_id: item.id}}" />
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