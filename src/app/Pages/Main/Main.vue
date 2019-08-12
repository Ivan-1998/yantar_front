<template>
  <div class="main">
    <!--slider-component></slider-component-->

    <div class="info">
      <div class="info__content">

          <router-link tag="a" to="/products" class="info__inner">
              <h2>Каталог<br>продукции</h2>
              <p>Масло, семечки, халва</p>
              <img src="/src/images/info_link1.png" alt="Каталог продукции" class="info__item1">
              <router-link tag="a" to="/products" class="link-go">
                  <div class="arrow"><span></span></div>
                  <span>перейти</span>
              </router-link>
          </router-link>

          <router-link tag="a" to="/consumers" class="info__inner">
              <h2>Информация<br>для клиентов</h2>
              <p>Точки продаж, наши продукты, рецепты</p>
              <img src="/src/images/info_link2.png" alt="Для клиентов" class="info__item2">
              <router-link tag="a" to="/consumers" class="link-go">
                  <div class="arrow"><span></span></div>
                  <span>перейти</span>
              </router-link>
          </router-link>

          <router-link tag="a" to="/partners" class="info__inner">
              <h2>Информация<br>для оптовиков</h2>
              <p>Точки продаж, наши продукты</p>
              <img src="/src/images/info_link3.png" alt="Для оптовиков" class="info__item3">
              <router-link tag="a" to="/partners" class="link-go">
                  <div class="arrow"><span></span></div>
                  <span>перейти</span>
              </router-link>
          </router-link>
      </div>
    </div>
      
      <!--ourslider-component></ourslider-component-->
  </div>
</template>

<script>
import Slider from '../../Components/Main/Slider';
import OurSlider from '../../Components/Main/OurSlider';
export default ({
    name: 'Main',
    components: {
        'slider-component': Slider,
        'ourslider-component': OurSlider
    }
});
</script>