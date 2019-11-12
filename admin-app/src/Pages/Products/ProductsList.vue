<template>
  <div></div>
</template>

<script>
import MixinCommonMethods from "../../mixins/MixinCommonMethods";
export default {
  name: 'ProductsList',
  mixins: [MixinCommonMethods],
  computed: {
    toast() {
      return this.$store.state.toast;
    }
  },
  mounted() {
    this.checkToast();
  },
  methods: {
    checkToast() {
      if (this.toast.text) {
        return this.showToast({ text: this.toast.text, status: this.toast.status });
      }
      return false;
    }
  }
}
</script>