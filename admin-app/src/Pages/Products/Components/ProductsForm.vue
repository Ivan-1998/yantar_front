<template>
  <div>
    <ValidationObserver class="flex-row flex-wrap"
                        tag="form"
                        ref="productsForm"
                        @submit.prevent="sendForm"
    >

      <div class="col-33p mb-30">
        <ValidationProvider tag="div"
                            class="form-group form-group-sm"
                            rules="required"
                            v-slot="{ errors }"
        >
          <label for="name">Название</label>
          <input v-model="product.name"
                 type="text" 
                 id="name"
                 :class="{'input-error' : errors[0]}"
          />
        </ValidationProvider>
      </div>

      <div class="col-33p mb-30">
        <ValidationProvider tag="div"
                            class="form-group form-group-sm"
                            rules="required"
                            v-slot="{ errors }"
        >
          <label for="size">Размер</label>
          <input v-model="product.size"
                 type="text" 
                 id="size"
                 :class="{'input-error' : errors[0]}"
          />
        </ValidationProvider>
      </div>

      <div class="col-33p mb-30">
        <ValidationProvider tag="div"
                            class="form-group form-group-sm"
                            rules="required"
                            v-slot="{ errors }"
        >
          <label for="#">Тип</label>
          <v-select v-model="product.type"
                    label="title"
                    placeholder="Выберите значение"
                    :options="types"
                    :searchable="false"
                    name="type"
                    :class="{ 'select-error': errors[0] }"
          />
        </ValidationProvider>
       
      </div>

      <div class="col-33p mb-30">
        <ValidationProvider tag="div" 
                            class="form-group form-group-sm"
                            rules="required"
                            v-slot="{ errors }"
        >
          <label for="#">Описание</label>
          <VueEditor v-model="product.description"
                     :class="{'editor-error': errors[0]}"
                     :editorToolbar="editorOptions" 
          />
        </ValidationProvider>
      </div>

      <div class="col-33p mb-30">
        <ValidationProvider tag="div" class="form-group form-group-sm">
          <label for="price">Цена</label>
          <input type="text" 
                 id="price"
          />
        </ValidationProvider>
      </div>

      <div class="col-33p mb-30">
        <ValidationProvider tag="div" class="form-group form-group-sm">
          <label for="discount">Скидка (%)</label>
          <input type="text" 
                id="discount"
          />
        </ValidationProvider>
      </div>

      <div class="col-33p mb-30">
        <div class="form-group form-group-sm">
          <label for="#">Фото</label>
          <file-upload v-if="!photos.length"
                       extensions="jpeg,jpg,png"
                       accept="image/png,image/jpeg"
                       :multiple="false"
                       :size="1024 * 1024 * 100"
                       class="d-block"
                       @input="photoHandler"
            >
            <button class="btn d-block btn-sm btn-blue">Загрузить фото</button>
          </file-upload>

          <a v-if="photos.length" href="#" class="file-name link-blue">
            {{photos[0].name}}

            <span class="cross" @click.prevent="confirmRemoveImage"></span>
          </a>
        </div>
      </div>

      <div class="form-group form-group-sm form-group-submit">
        <button type="submit" class="btn btn-sm btn-green">Сохранить</button>
      </div>
    </ValidationObserver>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import MixinCommonMethods from "../../../mixins/MixinCommonMethods";

export default {
  name: 'ProductsForm',
  mixins: [MixinCommonMethods],
  components: {
    VueEditor
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      types: [
        {
          title: 'Семечки',
          value: 'seeds'
        },
        {
          title: 'Халва',
          value: 'halva'
        },
        {
          title: 'Масло',
          value: 'butter'
        },
      ],
      editorOptions: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }], 
      ],
      photos: []
    };
  },
  methods: {
    async confirmRemoveImage() {
      const confirm = await this.$swal({
        title: 'Вы действительно хотите удалить фотографию?',
        confirmButtonText: 'Удалить',
        showCancelButton: true,
        cancelButtonText: 'Отмена',
        customClass: 'swal2-confirm'
      });

      if (confirm.value) {    
        const isRemove = await this.removeImage(this.product.photo);

        if (isRemove) {
          this.photos = [];
          this.$emit('photoHandler', '');
        }
      }
    },
    async photoHandler(value) {
      const photoName = await this.uploadImage(value[0].file);
      if (!photoName) return this.photos = [];

      this.photos = value;
      this.$emit('photoHandler', photoName);
    },
    validatePhoto() {
      if (!this.photos.length) {
        this.showToast({ text: 'Загрузите фотографию для товара', status: 'error' });
        return false;
      }
      return true;
    },

    async sendForm() {
      const validate = await this.$refs.productsForm.validate();

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