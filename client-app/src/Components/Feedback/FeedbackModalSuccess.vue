<template>
  <modal name="feedback-send-success" height="auto" @before-close="redirectToMain()">
    <div class="modal-feedback-send">
      <div class="modal-feedback-send__img">
        <img src="../../assets/images/success-check-icon.svg" alt="Успешно!" />
      </div>
      <p>
        Заявка успешно отправлена!<br>
        Мы свяжемся с вами в ближайшее время.
      </p>
    </div>

    <span class="v--modal-close" @click="$modal.hide('feedback-send-success')">
      <font-awesome-icon icon="times" />
    </span>
  </modal>
</template>

<script>
export default {
  name: 'FeedbackModalSuccess',
  methods: {
    redirectToMain() {
      this.$router.push({
        name: 'main'
      });
    }
  }
}
</script>