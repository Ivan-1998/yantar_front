<template>
  <div class="container box-shadow">
    <h1 class="container-title">Добавить новость</h1>

    <NewsForm :news="news"
              @photoHandler="photoHandler"
              @sendForm="createNews"
    />
  </div>
</template>

<script>
import MixinCommonMethods from "../../mixins/MixinCommonMethods";
import NewsForm from "./Components/NewsForm";

export default {
  name: 'NewsAdd',
  components: {
    NewsForm
  },
  mixins: [MixinCommonMethods],
  data() {
    return {
      news: {}
    };
  },
  methods: {
    photoHandler(value) {
      this.news.photo = value;
    },
    
    createNews() {
      return this.$http.post('news', this.news)
              .then(() => this.createNewsHandler())
              .catch(err => this.$_errorCatchHandler(err))
    },
    createNewsHandler() {
      this.$store.commit('setToastInfo', { text: 'Новость добавлена', status: 'success' });
      this.$router.push({ name: 'newsList' });
    }
  }
}
</script>