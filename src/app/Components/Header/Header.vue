<template>
    <header class="header">
        <div class="header__content">
            <ul class="header__inner">
                <li><router-link tag="a" to="/">Главная</router-link></li>
                <li><router-link tag="a" to="/products">Продукция</router-link></li>
                <li><router-link tag="a" to="/consumers">Потребителям</router-link></li>
                <li><router-link tag="a" to="/consumers"><img src="/src/images/logo.svg"></router-link></li>
                <li><router-link tag="a" to="/partners">Партнерам</router-link></li>
                <li><router-link tag="a" to="/about">О нас</router-link></li>
                <li><router-link tag="a" to="/contacts">Контакты</router-link></li>
            </ul>
        </div>
    </header>
</template>

<script>
export default ({
    name: 'Header'
});
</script>