<template>
    <footer class="footer">
        <div class="footer__content">
            <div class="footer__inner">
                <ul class="footer__item">
                    <li><router-link tag="a" to="/">Главная</router-link></li>
                    <li><router-link tag="a" to="/products">Продукция</router-link></li>
                    <li><router-link tag="a" to="/consumers">Потребителям</router-link></li>
                    <li><router-link tag="a" to="/partners">Партнерам</router-link></li>
                </ul>
                <ul class="footer__item">
                    <li><router-link tag="a" to="/about">О нас</router-link></li>
                    <li><router-link tag="a" to="/contacts">Контакты</router-link></li>
                    <li><a href="#">Правовая информация</a></li>
                    <li><a href="#">Политика конфиденциальности</a></li>
                </ul>
                <ul>
                    <li><a href="#">info@yantar.kz</a></li>
                    <li><a href="#">+7(7232)500-136</a></li>
                    <li>г. Усть-Каменогорск</li>
                    <li>ул. Грейдерная 1/1</li>
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