<template>
  <div class="container landing-header">
    <div>
      <h1>{{title}}</h1>
      <p>{{subtitle}}</p>
    </div>

    <div>
      <img src="../../../assets/images/consumers-header.png" alt="Потребителям">
    </div>
  </div>
</template>

<script>

export default {
  name: 'ConsumersHeader',
  data() {
    return {
      title: 'Потребители знакомы с нашими первоклассными продуктами с 1990 года!',
      subtitle: 'Мы предлагаем только качественные продукты, произведенные из отборных семян подсолнечника'
    };
  }
}
</script>

<style lang="scss">
</style>