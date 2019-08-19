<template>
  <header class="header">
    <div class="header__content">
      <ul class="header__inner">
        <li><router-link tag="a" :to="{name: 'main'}">Главная</router-link></li>
        <li><router-link tag="a" :to="{name: 'products'}">Продукция</router-link></li>
        <li><router-link tag="a" :to="{name: 'consumers'}">Потребителям</router-link></li>
        <li><router-link tag="a" :to="{name: 'main'}"><img src="../../assets/images/logo.svg"></router-link></li>
        <li><router-link tag="a" :to="{name: 'partners'}">Партнерам</router-link></li>
        <li><router-link tag="a" :to="{name: 'about'}">О нас</router-link></li>
        <li><router-link tag="a" :to="{name: 'contacts'}">Контакты</router-link></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default ({
  name: 'Header'
});
</script>