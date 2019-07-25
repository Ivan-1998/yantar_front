<template>
    <div class="main-our-slider">
        <slick
        ref="slick"
        :options="slickOptions"
        >
            <div class="main-our-slider-slide">
                <h3>Наши товары</h3>
                <a href="#" class="link-more">Посмотреть все</a>
                <div class="wrapper-cards wrapper-cards-products">
                    <div href="#" class="card">
                        <img src="/src/images/semya.png" alt="Product">
                        <div class="card-info">
                            <h4>Семена подсолнечника</h4>
                            <div class="card-info-price">
                                <p class="before">295тг</p>
                                <p class="after">216 тг/пачка</p>
                            </div>
                            <a href="#" class="link-go">
                                <div class="arrow"><span></span></div>
                                <span>подробнее</span>
                            </a>
                        </div>
                    </div>
                    <div class="card">
                        <img src="/src/images/semya.png" alt="Product">
                        <div class="card-info">
                            <h4>Семена подсолнечника</h4>
                            <div class="card-info-price">
                                <p class="before">295тг</p>
                                <p class="after">216 тг/пачка</p>
                            </div>
                            <a href="#" class="link-go">
                                <div class="arrow"><span></span></div>
                                <span>подробнее</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div class="main-our-slider-slide">
                    <h3>Наши новости</h3>
                    <a href="#" class="link-more">Посмотреть все</a>
                    <div class="wrapper-cards wrapper-cards-news">
                        <a href="#" class="card" v-for="item in news">
                            <h4>{{item.title}}</h4>
                            <read-more more-str="" :text="item.description" link="#" :max-chars="150"></read-more>
                            <a href="#" class="link-go">
                                <div class="arrow"><span></span></div>
                                <span>подробнее</span>
                            </a>
                        </a>
                    </div>
                </div>
            </div>

            <div>
                <div class="main-our-slider-slide">
                    <h3>Наши рецепты</h3>
                    <a href="#" class="link-more">Посмотреть все</a>
                    <div class="wrapper-cards wrapper-cards-recipes">
                        <a href="#" class="card" v-for="item in recipes">
                            <div class="background" :style="{backgroundImage: 'url(' + item.image + ')'}"></div>
                            <div class="recipe-info">
                                <p>{{item.category}}</p>
                                <h4>{{item.title}}</h4>
                                <a href="#" class="link-go">
                                    <div class="arrow"><span></span></div>
                                    <span>подробнее</span>
                                </a>  
                            </div>                   
                        </a>
                    </div>
                </div>
            </div>
        </slick>
    </div>
</template>

<script>
import Slick from 'vue-slick';
export default ({
    name: 'OurSlider',
    components: {
        Slick
    },
    data() {
        return {
            slickOptions: {
                dots: true,
                fade: true,
                arrows: false,
                speed: 400
            },
            news: [
                {
                    title: 'Мы открыли новую',
                    description: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.',
                    link: ''
                },
                {
                    title: 'Мы открыли новую линейку продуктов!',
                    description: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.',
                    link: ''
                },
                {
                    title: 'Мы открыли новую линейку продуктов!',
                    description: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.',
                    link: ''
                }
            ],
            recipes: [
                {
                    category: 'Горячие блюда',
                    title: 'Бургеры из моркови, подсолнечных семян и кунжута с зеленым салатом и свеклой',
                    image: '/src/images/recept.jpg'
                },
                {
                    category: 'Салаты',
                    title: 'Свежая свекла',
                    image: '/src/images/recept.jpg'
                },
                {
                    category: 'Национальная еда',
                    title: 'Бургеры из моркови, подсолнечных семян и кунжута с зеленым салатом и свеклой',
                    image: '/src/images/recept.jpg'
                }
            ]
        };
    }
});
</script>