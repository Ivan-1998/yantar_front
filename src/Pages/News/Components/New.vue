<template>
  <div class="new">
    <div class="new__inner">
      <div class="new__img">
      </div>
      <div class="new__title">{{New.title}}</div>
      <div class="new__description">{{New.description}}</div>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'New',
  props: {
    New: {
      type: Object,
      default: () => {}
    }
  }
}
</script>