<template>
  <div class="container">
    <router-link v-for="(cart, index) in carts"
                 :key="cart.id"
                 :to="{name: cart.link}" 
                 class="cart"
    >
      <div class="cart-content">
        <h2>{{cart.name}}</h2>
        <p>{{cart.text}}</p>

        <SmoothArrow :to="{name: cart.link}" class="cart-link" />
      </div>
      <div class="cart-img">
        <img v-if="index === 0" src="../../../assets/images/info_link1.png" alt="Перейти">
        <img v-if="index === 1" src="../../../assets/images/info_link2.png" alt="Перейти">
        <img v-if="index === 2" src="../../../assets/images/info_link3.png" alt="Перейти">
      </div>
    </router-link>
  </div>
</template>

<script>
import SmoothArrow from '../../../Components/UI/SmoothArrow';

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
          link: 'products'
        },
        {
          name: 'Информация для клиентов',
          text: 'Точки продаж, наши продукты, рецепты',
          link: 'consumers'
        },
        {
          name: 'Информация для оптовиков',
          text: 'Точки продаж, Наши продукты',
          link: 'partners'
        }
      ]
    };
  },
  methods: {
    setSrcImage(index) {
      return `../../../assets/images/info_link${index + 1}.png`;
    }
  }

}
</script>