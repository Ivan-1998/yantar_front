<template>
  <div class="container landing-header">
    <div>
      <h1>{{title}}</h1>
      <p>{{subtitle}}</p>
    </div>

    <div>
      <img :src="img" alt="Потребителям" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'LandingHeader',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: () => ''
    },
    img: {
      type: String,
      required: true
    }
  }
}
</script>