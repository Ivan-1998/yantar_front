<template>
  <div class="container new__page">
    <div class="new-page__header">
      <div class="img" :style="`background-image: url('http://yantar.in:5000${item.images}')`"></div>
      <div class="inscription">
        <h2>{{item.title}}</h2>
        <span class="date">{{item.date}}</span>
      </div>
    </div>

    <div class="new-page__content" v-html="item.description"></div>
  </div>
</template>

<script>
export default {
  name: 'New',
  data() {
    return {
      item: {}
    };
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getNew();
    })
  },
  methods: {
    getNew() {
      this.$http.get(`api/news/${this.$route.params.new_id}`)
        .then(response => this.item = response.body)
    }
  }
}
</script>