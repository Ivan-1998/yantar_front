<template>
    <div class="main-slider">
        <slick
        ref="slick"
        :options="slickOptions"
        >
            <div><h1>Слайд 1</h1></div>
            <div><h1>Слайд 2</h1></div>
            <div><h1>Слайд 3</h1></div>
        </slick>
    </div>
</template>

<script>
import Slick from 'vue-slick';

export default ({
    name: 'Slider',
    data() {
        return {
            slickOptions: {
                dots: true,
                speed: 400,
                fade: true,
                prevArrow: '<button class="main-slider-arrow main-slider-arrow-prev"></button>',
                nextArrow: '<button class="main-slider-arrow main-slider-arrow-next"></button>',
            }
        };
    },
    components: {
        Slick
    }
});
</script>