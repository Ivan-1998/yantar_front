<template>
    <header class="header">
        <div class="header__content">
            <div class="header__logo"></div>
            <ul class="header__inner">
                <li><router-link tag="a" to="/">Главная</router-link></li>
                <li><router-link tag="a" to="/products">Продукция</router-link></li>
                <li><router-link tag="a" to="/consumers">Потребителям</router-link></li>
                <li><router-link tag="a" to="/partners">Партнерам</router-link></li>
                <li><router-link tag="a" to="/about">О нас</router-link></li>
                <li><a href="#">Контакты</a></li>
            </ul>
        </div>
    </header>
</template>

<script>
export default ({
    name: 'Header'
});
</script>