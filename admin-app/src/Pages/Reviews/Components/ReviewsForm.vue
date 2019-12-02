<template>
  <ValidationObserver class="flex-row flex-wrap"
                      tag="form"
                      ref="reviewForm"
                      @submit.prevent="sendForm"
  >

    <div class="col-50p mb-30">
      <ValidationProvider tag="div"
                          class="form-group form-group-sm"
                          rules="required"
                          v-slot="{ errors }"
      >
        <label for="title">ФИО</label>
        <input v-model="value.owner.fio"
               type="text" 
               id="title"
               :class="{'input-error' : errors[0]}"
        />
      </ValidationProvider>
    </div>

    <div class="col-50p mb-30">
      <ValidationProvider tag="div"
                          class="form-group form-group-sm"
      >
        <label for="position">Должность</label>
        <input v-model="value.owner.position"
               type="text" 
               id="position"
        />
      </ValidationProvider>
    </div>

    <div class="width-full mb-30">
      <ValidationProvider tag="div"
                          class="form-group form-group-sm"
                          rules="required"
                          v-slot="{ errors }"
      >
        <label for="content">Содержимое</label>
        <textarea v-model="value.content"
                  id="content"
                  :class="{'input-error' : errors[0]}"
        ></textarea>
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
                     :size="1024 * 1024 * 100"
                     class="d-block"
                     @input="photoHandler"
        >
          <button class="btn d-block btn-md btn-blue">Загрузить фото</button>
        </file-upload>

        <a v-if="value.photo"
           :href="`${fileUrl}/${value.photo}`"
           :style="`background-image: url(${fileUrl}/${value.photo})`"
           class="photo-preview"
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
  name: 'RecipesForm',
  mixins: [MixinCommonMethods],
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  mounted() {
    const reviewPhoto = this.value.photo;
    if (reviewPhoto) {
      this.photos.push({name: reviewPhoto});
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
    validatePhoto() {
      if (!this.photos.length) {
        this.showToast({ text: 'Загрузите фотографию для отзыва', status: 'error' });
        return false;
      }
      return true;
    },

    async sendForm() {
      const validate = await this.$refs.reviewForm.validate();

      if (validate && this.validatePhoto()) {
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