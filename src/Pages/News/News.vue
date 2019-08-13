<template>
  <div class="news">
    <div class="news__content">
      <div class="news__inner">
        <div class="news__title">Список новостей</div>
        <div class="news__content">
          <New v-for="New in news" :key="New.id"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import New from './Components/New';

export default ({
  name: 'News',
  components: {New},
  data() {
    return {
      news: []
    };
  },
  methods: {
    getNews() {
      this.$http.get('api/news/')
        .then(response => this.news = response.body)
    }
  },
  mounted() {
    this.getNews();
  }
});
</script>