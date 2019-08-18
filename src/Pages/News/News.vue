<template>
  <div class="container news">
    <h1 class="page-title">{{pageTitle}}</h1>
    <NewsNew v-for="item in news" :key="item.id" :item="item" />
  </div>
</template>

<script>
import NewsNew from './Components/NewsNew';
import MixinCommonMethods from '../../Mixins/MixinCommonMethods';

export default ({
  name: 'News',
  mixins: [MixinCommonMethods],
  components: {
    NewsNew
  },
  mounted() {
    this.$store.commit('setPage', {title: 'Список новостей'});
  },
  data() {
    return {
      news: []
    };
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getNews();
    })
  },
  methods: {
    getNews() {
      this.$http.get('api/news')
        .then(response => this.news = response.body)
    }
  }
});
</script>