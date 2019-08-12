<template>
  <div class="good">
      <div class="good__img" :style="{
          backgroundImage: 'url(/src/images/semya.png)',
          backgroundSize: '90%',
          backgroundPosition: 'center center'
          }"></div>
      <div class="good__inner">
          <div class="good__title">Четкие семена от Кахи</div>
          <p>
              216 тг/пачка
          </p>
          <div class="good__info-more">
              <a href="#" class="link-go">
                  <span>подробнее</span>
                  <div class="arrow"><span></span></div>
              </a>
          </div>
      </div>    
  </div> 
</template>

<script>
export default {
  name: 'ProductsCartProduct'
}
</script>