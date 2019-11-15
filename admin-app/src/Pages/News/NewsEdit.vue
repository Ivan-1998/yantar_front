<template>
  <div v-if="contentLoaded" class="container box-shadow">
    <h1 class="container-title">Редактирование новости</h1>

    <NewsForm :news="news"
              @photoHandler="photoHandler"
              @sendForm="updateNews"
    />
  </div>
</template>

<script>
import NewsForm from "./Components/NewsForm";
import MixinCommonMethods from "../../mixins/MixinCommonMethods";

export default {
  name: 'newsEdit',
  components: {
    NewsForm
  },
  computed: {
    newsId() {
      return this.$route.params.newsId;
    }
  },
  mixins: [MixinCommonMethods],
  beforeRouteEnter (to, from, next) {
    next(async vm => {
      await vm.getNews();
      vm.contentLoaded = true;
    });
  },
  data() {
    return {
      news: {},
      contentLoaded: false,
    };
  },
  methods: {
    getNews() {
      return this.$http.get(`news/${this.newsId}`)
              .then(response => this.getNewsHandler(response))
              .catch(err => this.$_errorCatchHandler(err))
    },
    getNewsHandler(response) {
      this.news = response.data;
    },

    photoHandler(value) {
      this.news.photo = value;
    },

    updateNews() {
      return this.$http.put(`news/${this.newsId}`, this.news)
              .then(() => this.updateNewsHandler())
              .catch(err => this.$_errorCatchHandler(err))
    },
    updateNewsHandler() {
      this.$store.commit('setToastInfo', { text: 'Новость обновлена', status: 'success' });
      this.$router.push({ name: 'newsList' });
    }
  }
}
</script>