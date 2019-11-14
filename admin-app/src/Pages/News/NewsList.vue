<template>
  <div class="container box-shadow">
    <h1 class="container-title">Все новости</h1>

    <table class="table text-left">
      <thead>
        <th>Дата добавления</th>
        <th>Заголовок</th>
        <th></th>
      </thead>

      <tbody>
        <tr v-for="(newsEl, index) in news" :key="index">
          <td>{{setNumericDate(newsEl.createdAt)}}</td>
          <td>{{newsEl.title}}</td>
          <td>
            <div class="flex-row flex-align-center flex-justify-end">
              <router-link :to="{ 
                            name: 'newsEdit',
                            params: {
                              newsId: newsEl._id
                            }
                           }" 
                          class="mr-5 btn btn-sm btn-green"
              >Открыть</router-link>
              <ActionsMenu :target="newsEl" :actions="actions" @clickHandler="actionClickHandler" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import MixinCommonMethods from "../../mixins/MixinCommonMethods";
import MixinDate from "../../mixins/MixinDate";

import ActionsMenu from "../../Components/ActionsMenu";

export default {
  name: 'news',
  components: {
    ActionsMenu
  },
  mixins: [MixinCommonMethods, MixinDate],
  computed: {
    toast() {
      return this.$store.state.toast;
    }
  },
  beforeRouteEnter (to, from, next) {
    next(async vm => {
      await vm.getNews();
      vm.checkToast();
    })
  },
  data() {
    return {
      news: [],
      actions: [
        { title: 'Просмотреть', method: this.previewNews},
        { title: 'Удалить', method: this.removeNews }
      ]
    };
  },
  methods: {
    checkToast() {
      if (this.toast.text) {
        return this.showToast({ text: this.toast.text, status: this.toast.status });
      }
      return false;
    },

    getNews() {
      return this.$http.get('news')
              .then(response => this.getNewsHandler(response))
              .catch(err => this.$_errorCatchHandler(err))
    },
    getNewsHandler(response) {
      this.news = response.data.items;
    },

    actionClickHandler(value) {
      this.actions[value.index].method(value.target);
    },

    previewNews(value) {
      window.open(`http://yantar.in/news/${value._id}`);
    },

    async removeNews(value) {
      const confirm = await this.$swal({
        title: 'Вы действительно хотите удалить новость?',
        confirmButtonText: 'Удалить',
        showCancelButton: true,
        cancelButtonText: 'Отмена',
        customClass: 'swal2-confirm'
      });

      if (confirm.value) {
        this.$http.delete(`news/${value._id}`)
          .then(() => this.removeNewsHandler())
          .catch((err) => this.$_errorCatchHandler(err));
      }
    },
    removeNewsHandler() {
      this.showToast({ text: 'Новость удалена!', status: 'success' });
      this.getNews();
    }
  }
}
</script>

<style lang="scss" scoped>
  .table th:nth-child(1) {width: 20%;}
  .table th:nth-child(2) {width: 65%;}
  .table th:nth-child(3) {width: 15%;}
</style>