 <template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__inner">
        <ul class="footer__item">
            <li><router-link tag="a" :to="{name: 'main'}">Главная</router-link></li>
            <li><router-link tag="a" :to="{name: 'products'}">Продукция</router-link></li>
            <li><router-link tag="a" :to="{name: 'consumers'}">Потребителям</router-link></li>
            <li><router-link tag="a" :to="{name: 'partners'}">Партнерам</router-link></li>
            <li><router-link tag="a" :to="{name: 'recipes'}">Рецепты</router-link></li>
        </ul>
        <ul class="footer__item">
            <li><router-link :to="{name: 'about'}">О нас</router-link></li>
            <li><router-link :to="{name: 'contacts'}">Контакты</router-link></li>
            <li><router-link :to="{name: 'news'}">Новости</router-link></li>
            <li><a href="#">Политика конфиденциальности</a></li>
        </ul>
        <ul>
            <li><a :href="`mailto:${email}`">{{email}}</a></li>
            <li><a :href="`tel:${phoneHref}`">{{phone}}</a></li>
            <li>{{adress}}</li>
        </ul>
      </div>
    </div>
    <div class="copyright">
      <div class="copyright__inner">
        <p>ТОО Янтарь УК, © 2001 - 2019</p>
        <a href="#">Разработка сайтов | СибТайгер</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default ({
  name: 'Footer'
});
</script>