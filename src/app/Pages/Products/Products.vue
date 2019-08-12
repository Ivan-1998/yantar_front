<template>
  <div class="products">
    <div class="products__content">
      <div class="goods">
        <h3 class="goods__title">Наша продукция</h3>

        <div class="goods__content">
          <ProductCart />
        </div>

          <ul class="goods__paginate" v-if="false">
              <li><span>1</span></li>
              <li><span>2</span></li>
              <li><span>3</span></li>
          </ul>
      </div>  
    </div>
  </div>
</template>

<script>
import ProductsCartProduct from './Components/ProductsCartProduct';

export default ({
   name: 'Products',
   components: {
     'ProductCart': ProductsCartProduct
   }
});
</script>