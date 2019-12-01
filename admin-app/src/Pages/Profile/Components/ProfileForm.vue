<template>
  <ValidationObserver tag="form"
                      class="flex-row flex-wrap"
                      ref="profileForm"
                      @submit.prevent="sendForm"
  >
    <div class="col-33p mb-30">
      <ValidationProvider tag="div"
                          class="form-group form-group-sm"
                          rules="required|email"
                          v-slot="{ errors }"
      >
        <label for="email">Email</label>
        <input v-model="value.email"
               type="email"
               id="email"
               disabled
               :class="{'input-error': errors[0]}"
        />
      </ValidationProvider>
    </div>

    <div class="col-33p mb-30">
      <ValidationProvider tag="div"
                          class="form-group form-group-sm"
      >
        <label for="name">Имя</label>
        <input v-model="value.name"
               type="text"
               id="name"
        />
      </ValidationProvider>
    </div>

    <div class="col-33p mb-30">
      <ValidationProvider tag="div"
                          class="form-group form-group-sm"
      >
        <label for="surname">Фамилия</label>
        <input v-model="value.surname"
               type="text"
               id="surname"
        />
      </ValidationProvider>
    </div>
    
    <div class="col-33p mb-30">
      <div class="form-group form-group-sm">
        <label for="#">Фото</label>
        <file-upload v-if="!photos.length && !value.photo"
                     v-model="photos"
                     extensions="jpeg,jpg,png"
                     accept="image/png,image/jpeg"
                     :multiple="false"
                     class="d-block"
                     @input="photoHandler"
        >
          <button class="btn d-block btn-md btn-blue">Загрузить фото</button>
        </file-upload>

        <a v-if="value.photo"
            :href="`${fileUrl}/${value.photo}`"
            class="photo-preview"
            :style="`background-image: url(${fileUrl}/${value.photo})`"
            target="_blank"
        >
          <span class="cross" @click.prevent="removeImage"></span>
        </a>
      </div>
    </div>

    <div class="form-group form-group-sm form-group-submit">
      <button type="submit" class="btn btn-md btn-green">Сохранить</button>
    </div>

  </ValidationObserver>
</template>

<script>
import MixinCommonMethods from "../../../mixins/MixinCommonMethods";

export default {
  name: 'ProfileForm',
  mixins: [MixinCommonMethods],
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      photos: []
    };
  },
  methods: {
    async photoHandler(value) {
      const photoName = await this.uploadImage(value[0].file);
      if (!photoName) return this.photos = [];

      this.photos = value;
      this.value.photo = photoName;
      this.$forceUpdate();
    },
    removeImage() {
      this.photos = [];
      this.value.photo = '';
    },

    async sendForm() {
      const validate = await this.$refs.profileForm.validate();

      if (validate) {
        this.$emit('submit');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .form-group-submit {
    text-align: right;
  }
</style>