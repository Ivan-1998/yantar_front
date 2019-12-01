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
  components: {
    NewsNew
  },
  mixins: [MixinCommonMethods],
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getNews();
    })
  },
  mounted() {
    this.$store.commit('setPage', {title: 'Наши новости'});
  },
  data() {
    return {
      news: []
    };
  },
  methods: {
    getNews() {
      return this.$http.get('news')
        .then(response => this.news = response.data.items);
    }
  }
});
</script>