<template>
  <div class="feedback">
    <ValidationObserver ref="feedback" tag="form" class="feedback-form" @submit.prevent="sendForm">
      <div class="feedback-left">
        <h2>Ответим на любые ваши вопросы!</h2>
        <img src="../../assets/images/feedback.svg" alt="Оставьте заявку!" />
      </div>
      <div class="feedback-right">
        <ValidationProvider class="form-group"
                            tag="div"
                            rules="required|email"
                            v-slot="{ errors }"
        >
            <input type="email"
                   placeholder="Электронный адрес"
                   :class="{'input-error' : errors[0]}"
                   v-model="formData.email"
            />
        </ValidationProvider>

        <div class="form-group">
          <input type="text"
                 placeholder="Имя"
                 v-model="formData.name"
          />
        </div>
        <div class="form-group">
          <the-mask v-model="formData.phone"
                    :mask="'+7(###)###-##-##'"
                    placeholder="Номер телефона"
          ></the-mask>
        </div>

        <ValidationProvider class="form-group"
                            tag="div"
                            rules="required|min:6"
                            v-slot="{ errors }"
        >
          <textarea placeholder="Сообщение"
                    v-model="formData.message"
                    :class="{'input-error' : errors[0]}"
          ></textarea>
        </ValidationProvider>

        <ValidationProvider tag="div"
                            class="form-group form-group__checkbox"
                            :rules="{ required: { allowFalse: false } }"
                            v-slot="{ errors }"
        > 
          <label>
            <input type="checkbox" v-model="isAgreePolicy" />
            <span class="checkmark" :class="{'checkbox-error' : errors[0]}"></span>
          </label>
          <p>Я согласен с условиями <a href="#">политики конфиденциальности</a></p> 
        </ValidationProvider>

          
        <div class="form-group">
          <button type="submit">Отправить письмо</button>
        </div>
      </div>
    </ValidationObserver>

    <FeedbackModalSuccess />
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider, extend , configure } from 'vee-validate';
import { required, email, min } from 'vee-validate/dist/rules';
import { TheMask } from 'vue-the-mask'
import FeedbackModalSuccess from './FeedbackModalSuccess';

extend('required', required);
extend('email', email);
extend('min', min);
configure({
  classes: {
    invalid: ['input-error']
  }
});

export default ({
  name: 'Feedback',
  components: {
    ValidationObserver, ValidationProvider,
    FeedbackModalSuccess, TheMask
  },
  data() {
    return {
      formData: {
        email: '',
        name: '',
        phone: '',
        message: ''
      },
      isAgreePolicy: true
    };
  },
  methods: {
    async sendForm() {
      const isValid = await this.$refs.feedback.validate();

      if (this.formData.phone) {
        this.formData.phone = `+7${this.formData.phone}`;
      }    

      if (isValid) {
        this.$http.post('feedback', this.formData)
          .then(() => this.sendFormHandler());
      }
    },
    sendFormHandler() {
      this.resetData();
      this.$modal.show('feedback-send-success');
    },

    resetData() {
      this.formData = {
        email: '',
        name: '',
        phone: '',
        message: ''
      };
      this.$refs.feedback.reset();
    }
  }
});
</script>