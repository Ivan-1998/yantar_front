<template>
  <ValidationObserver class="flex-row flex-wrap"
                      tag="form"
                      ref="recipeForm"
                      @submit.prevent="sendForm"
  >

    <div class="width-full mb-30">
      <ValidationProvider tag="div"
                          class="form-group form-group-sm"
                          rules="required"
                          v-slot="{ errors }"
      >
        <label for="title">Заголовок</label>
        <input v-model="recipe.title"
               type="text" 
               id="title"
               :class="{'input-error' : errors[0]}"
        />
      </ValidationProvider>
    </div>

    <div class="width-full mb-30">
      <ValidationProvider tag="div" 
                          class="form-group form-group-sm"
                          rules="required"
                          v-slot="{ errors }"
      >
        <label for="#">Содержимое</label>
        <VueEditor v-model="recipe.content"
                   :class="{'editor-error': errors[0]}"
                   :editorToolbar="editorOptions" 
        />
      </ValidationProvider>
    </div>

    <div class="col-33p mb-30">
      <div class="form-group form-group-sm">
        <label for="#">Фото</label>
        <file-upload v-if="!photos.length && !recipe.photo"
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

        <a v-if="recipe.photo"
            :href="`${fileUrl}/${recipe.photo}`"
            class="photo-preview"
            :style="`background-image: url(${fileUrl}/${recipe.photo})`"
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
import { VueEditor } from "vue2-editor";
import MixinCommonMethods from "../../../mixins/MixinCommonMethods";

export default {
  name: 'RecipesForm',
  components: {
    VueEditor
  },
  mixins: [MixinCommonMethods],
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  mounted() {
    const recipePhoto = this.recipe.photo;
    if (recipePhoto) {
      this.photos.push({name: recipePhoto});
    }
  },
  data() {
    return {
      editorOptions: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        ["image"] 
      ],
      photos: []
    };
  },
  methods: {
    async photoHandler(value) {
      const photoName = await this.uploadImage(value[0].file);
      if (!photoName) return this.photos = [];

      this.photos = value;
      this.$emit('photoHandler', photoName);
      this.$forceUpdate();
    },
    removeImage() {
      this.photos = [];
      this.$emit('photoHandler', '');
    },
    validatePhoto() {
      if (!this.photos.length) {
        this.showToast({ text: 'Загрузите фотографию для рецепта', status: 'error' });
        return false;
      }
      return true;
    },

    async sendForm() {
      const validate = await this.$refs.recipeForm.validate();

      if (validate && this.validatePhoto()) {
        this.$emit('sendForm');
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