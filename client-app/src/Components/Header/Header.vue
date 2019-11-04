<template>
  <header class="header header-fixed">
    <div class="container header-content">
      <router-link :to="{name: 'main'}" class="header-logo">
        <img src="../../assets/images/logo.png">
      </router-link>

      <div class="header-burger" :class="{'open': mobileShow}" @click="mobileMenuHandler">
        <div>
          <span></span><span></span><span></span>
        </div>
      </div>
      <transition name="fade">
        <HeaderMobile v-if="mobileShow" :links="links" />
      </transition>
      

      <ul class="header-links">
        <li v-for="(link, index) in links" :key="index">
          <router-link :to="{name: link.routerName}">{{link.text}}</router-link>
        </li>
      </ul>
    </div>
  </header>
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
      mobileShow: false
    };
  },
  methods: {
    mobileMenuHandler() {
      this.mobileShow = !this.mobileShow;
    }
  }
});
</script>