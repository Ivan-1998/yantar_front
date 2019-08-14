<template>
  <router-link to="#" class="new">
    <div class="new-img"
         :style="`background-image: url('http://sibtiger.com:3000${item.images[0]}')`">
    </div>

    <div class="new-content">
      <p class="new-title">{{item.title}}</p>
      <p class="new-description">{{item.description | truncate(250)}}</p>
    </div>

  </router-link>
</template>

<script>

export default {
  name: 'New',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss">
  .new {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    &:not(:last-child) {
      margin-bottom: 25px;
    }

    &-img {
      flex: 0 0 255px;
      height: 140px;
      margin-right: 15px;
      background-color: #C4C4C4;
      background-size: contain;
    }

    &-content {
      flex: 0 0 calc(100% - 255px);
    }

    &-title {
      margin-bottom: 7px;
      color: #555555;
      font-size: 20px;
      font-weight: normal;
    }
    &-description {
      line-height: 19px;
      color: #8A8A8A;
      line-height: 19px;
      font-size: 16px;
    }
  }
</style>