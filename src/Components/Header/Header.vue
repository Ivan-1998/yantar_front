<template>
  <div>
    <header class="header header-fixed">
      <div class="container header-content">
        <router-link :to="{name: 'main'}" class="header-logo">
          <img src="../../assets/images/logo.png">
        </router-link>

        <ul class="header-links">
          <li v-for="(link, index) in links" :key="index">
            <router-link :to="{name: link.routerName}">{{link.text}}</router-link>
          </li>
        </ul>
      </div>
    </header>

    <HeaderMobile v-if="headerMobileShow" :links="links" />
  </div>

</template>

<script>
import HeaderMobile from './HeaderMobile';

export default ({
  name: 'Header',
  components: {
    HeaderMobile
  },
  data() {
    return {
      links: [
        {
          routerName: 'products',
          text: 'Продукция'
        },
        {
          routerName: 'consumers',
          text: 'Потребителям'
        },
        {
          routerName: 'partners',
          text: 'Партнерам'
        },
        {
          routerName: 'about',
          text: 'О нас'
        },
        {
          routerName: 'contacts',
          text: 'Контакты'
        }
      ],
      headerMobileShow: false
    };
  }
});
</script>