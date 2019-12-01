<template>
  <div class="flex-row">
    <div v-for="(type, index) in types"
         :key="index" 
         class="mr-10 form-group form-group__radio"
    >
      <label :for="type.value"
             :class="{'label-active': params.type === type.value}"
      >{{type.title}}
        <input v-model="params.type"
               :value="type.value"
               type="radio"
               :id="type.value"
               name="type"
        />
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductsFilter',
  props: {
    params: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      types: [
        {
          title: 'Все',
          value: 'all'
        },
        {
          title: 'Масло',
          value: 'butter'
        },
        {
          title: 'Семечки',
          value: 'seeds'
        },
        {
          title: 'Халва',
          value: 'halva'
        }
      ]
    };
  }
}
</script>