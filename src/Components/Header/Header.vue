<template>
  <header class="header header-fixed">
    <div class="container header-content">
      <router-link :to="{name: 'main'}" class="header-logo">
        <img src="../../assets/images/logo.png">
      </router-link>

      <ul class="header-links">
        <li><router-link :to="{name: 'products'}">Продукция</router-link></li>
        <li><router-link :to="{name: 'consumers'}">Потребителям</router-link></li>
        <li><router-link :to="{name: 'partners'}">Партнерам</router-link></li>
        <li><router-link :to="{name: 'about'}">О нас</router-link></li>
        <li><router-link :to="{name: 'contacts'}">Контакты</router-link></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default ({
  name: 'Header',
  mounted() {

  }
});
</script>