<template>
  <div class="products">
    <div class="products__content">
      <div class="goods">
        <h3 class="goods__title">Наша продукция</h3>

        <div class="goods__content">
          <div class="good">

            <div class="good__img" :style="{
              backgroundImage: 'url(../../assets/images/semya.png)',
              backgroundSize: '90%',
              backgroundPosition: 'center center'
              }">
            </div>

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
        </div>

        <ul class="goods__paginate">
          <li><span>1</span></li>
          <li><span>2</span></li>
          <li><span>3</span></li>
        </ul>
      </div>  
    </div>
  </div>
</template>

<script>

export default ({
  name: 'Products'
});
</script>