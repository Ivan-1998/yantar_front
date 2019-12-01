<template>
  <div class="container box-shadow">
    <h1 class="container-title">Список лидов</h1>

    <table class="table text-left">
      <thead>
        <tr>
          <th>Дата</th>
          <th>Имя</th>
          <th>Email</th>
          <th>Телефон</th>
          <th>Сообщение</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(feedback, index) in feedbacks" :key="index">
          <td>{{setNumericDate(feedback.createdAt)}}</td>
          <td>{{feedback.name}}</td>
          <td>
            <a :href="`mailto:${feedback.email}`"
               target="_blank"
               class="text-green"
            >{{feedback.email}}</a>
          </td>
          <td>{{feedback.phone}}</td>
          <td>{{feedback.message}}</td>
          <td>
            <div class="flex-row flex-align-center flex-justify-end">
              <ActionsMenu :target="feedback" :actions="actions" @clickHandler="actionClickHandler" />
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
  name: 'FeedbacksList',
  components: {
    ActionsMenu
  },
  mixins: [MixinCommonMethods, MixinDate],
  beforeRouteEnter (to, from, next) {
    next(async vm => {
      await vm.getFeedbacks();
    })
  },
  data() {
    return {
      feedbacks: [],
      actions: [
        { title: 'Удалить', method: this.removeFeedback }
      ]
    };
  },
  methods: {
    getFeedbacks() {
      return this.$http.get('feedback')
              .then(response => this.getFeedbacksHandler(response))
              .catch(err => this.$_errorCatchHandler(err))
    },
    getFeedbacksHandler(response) {
      this.feedbacks = response.data.items;
    },

    actionClickHandler(value) {
      this.actions[value.index].method(value.target);
    },

    async removeFeedback(value) {
      const confirm = await this.$swal({
        title: 'Вы действительно хотите удалить лид?',
        confirmButtonText: 'Удалить',
        showCancelButton: true,
        cancelButtonText: 'Отмена',
        customClass: 'swal2-confirm'
      });

      if (confirm.value) {
        this.$http.delete(`feedback/${value._id}`)
          .then(() => this.removeFeedbackHandler())
          .catch(err => this.$_errorCatchHandler(err));
      }
    },
    removeFeedbackHandler() {
      this.showToast({ text: 'Лид удалён', status: 'success' });
      this.getFeedbacks();
    }
  }

}
</script>

<style scoped>
  .table th:nth-child(1) {width: 10%;}
  .table th:nth-child(2) {width: 15%;}
  .table th:nth-child(3) {width: 15%;}
  .table th:nth-child(4) {width: 15%;}
  .table th:nth-child(5) {width: 40%;}
  .table th:nth-child(6) {width: 5%;}
</style>