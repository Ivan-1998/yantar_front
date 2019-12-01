<template>
  <div v-if="contentLoaded" class="container new__page">
    <div class="new-page__header">
      <div class="img" :style="`background-image: url('${fileUrl}/${item.photo}')`"></div>
      <div class="inscription">
        <h2>{{item.title}}</h2>
        <span class="date">{{setNumericDate(item.createdAt)}}</span>
      </div>
    </div>

    <div class="new-page__content" v-html="item.content"></div>
  </div>
</template>

<script>
import MixinDate from "../../Mixins/MixinDate";

export default {
  name: 'New',
  mixins: [MixinDate],
  data() {
    return {
      item: {},
      contentLoaded: false
    };
  },
  beforeRouteEnter (to, from, next) {
    next(async vm => {
      await vm.getNew();
      vm.contentLoaded = true;
    });
  },
  methods: {
    getNew() {
      return this.$http.get(`news/${this.$route.params.new_id}`)
        .then(response => this.item = response.data)
    }
  }
}
</script>