<template>
  <router-link :to="{name: 'new', params: {new_id: item._id}}" class="new">
    <div class="new-img"
         :style="`background-image: url('${fileUrl}/${item.photo}')`">
    </div>

    <div class="new-content">
      <p class="new-title">{{item.title}}</p>

      <div class="new-link">
        <SmoothArrow :to="{name: 'new', params: {new_id: item._id}}" />
      </div>
      
    </div>

  </router-link>
</template>

<script>
import SmoothArrow from '../../../Components/UI/SmoothArrow';

export default {
  name: 'New',
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