import Vue from 'vue';
import { ValidationObserver, ValidationProvider, extend , configure } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

extend('required', required);
extend('email', email);
configure({
  classes: {
    invalid: ['input-error']
  }
});
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);