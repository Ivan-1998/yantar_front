<template>
  <div class="container">
    <router-link v-for="(cart, index) in carts"
                 :key="index"
                 :to="{name: cart.link}" 
                 class="cart"
    >

      <div class="cart-content">
        <h2>{{cart.name}}</h2>
        <p>{{cart.text}}</p>

        <SmoothArrow :to="{name: cart.link}" class="cart-link" />
      </div>

      <div class="cart-img">
        <img :src="cart.image" alt="Перейти">
      </div>

    </router-link>
  </div>
</template>

<script>
import SmoothArrow from '../../../Components/UI/SmoothArrow';

import ImgProduct from '../../../assets/images/main-info-product.png';
import ImgConsumers from '../../../assets/images/main-info-consumers.png';
import imgPartners from '../../../assets/images/main-info-partners.png';
import ImgNews from '../../../assets/images/main-info-news.png';
import ImgRecipes from '../../../assets/images/main-info-recipes.png';
import ImgAbout from '../../../assets/images/main-info-about.png';

export default {
  name: 'MainCartLinks',
  components: {
    SmoothArrow
  },
  data() {
    return {
      carts: [
        {
          name: 'Каталог продукции',
          text: 'Масло, семечки, халва',
          link: 'products',
          image: ImgProduct
        },
        {
          name: 'Информация для клиентов',
          text: 'Точки продаж, наши продукты',
          link: 'consumers',
          image: ImgConsumers
        },
        {
          name: 'Информация для оптовиков',
          text: '',
          link: 'partners',
          image: imgPartners
        },
        {
          name: 'Наши новости',
          text: '',
          link: 'news',
          image: ImgNews
        },
        {
          name: 'Каталог рецептов',
          text: '',
          link: 'recipes',
          image: ImgRecipes
        },
        {
          name: 'Информация о компании',
          text: '',
          link: 'about',
          image: ImgAbout
        } 
      ]
    };
  }
}
</script>