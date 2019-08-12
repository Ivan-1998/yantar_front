<template>
  <div class="main">
    <div class="info">
      <div class="info__content">

        <router-link tag="a" to="/products" class="info__inner">
          <h2>Каталог<br>продукции</h2>
          <p>Масло, семечки, халва</p>
          <img src="../../assets/images/info_link1.png" alt="Каталог продукции" class="info__item1">
          <router-link tag="a" to="/products" class="link-go">
            <div class="arrow"><span></span></div>
            <span>перейти</span>
          </router-link>
        </router-link>

        <router-link tag="a" to="/consumers" class="info__inner">
          <h2>Информация<br>для клиентов</h2>
          <p>Точки продаж, наши продукты, рецепты</p>
          <img src="../../assets/images/info_link2.png" alt="Для клиентов" class="info__item2">
          <router-link tag="a" to="/consumers" class="link-go">
            <div class="arrow"><span></span></div>
            <span>перейти</span>
          </router-link>
        </router-link>

        <router-link tag="a" to="/partners" class="info__inner">
          <h2>Информация<br>для оптовиков</h2>
          <p>Точки продаж, наши продукты</p>
          <img src="../../assets/images/info_link3.png" alt="Для оптовиков" class="info__item3">
          <router-link tag="a" to="/partners" class="link-go">
            <div class="arrow"><span></span></div>
            <span>перейти</span>
          </router-link>
        </router-link>
      </div>
    </div>     
  </div>
</template>

<script>

export default ({
  name: 'Main'
});
</script>