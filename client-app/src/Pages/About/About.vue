<template>
  <div class="about">
    <div class="about__header">
      <div class="about__header__content flex-center">
        <img src="../../assets/images/yantar-company.png" alt="потребители">
      </div>
    </div>

    <div class="about__main">
      <div class="about__main__content">
        <div class="item">
          <p>Наше предприятие уже 20 лет на рынке Казахстана. Маслозавод «Янтарь» начал выпуск подсолнечного масла с октября 1999 года. А в 2013 году на прилавках магазинов появились ядро жаренное подсолнечное и семечки жареные, а также халва подсолнечная. 
            При производстве мы используем только цельные ядра отборных семечек. Ядро подсолнечника богато полезными веществами: витамины А и Е, фолиевая кислота, магний, калий, фосфор. 
          </p>
        </div>

        <div class="item">
          <img src="../../assets/images/maslo-about.png">
        </div>

        <div class="item">
          <img src="../../assets/images/woman-about.png">
        </div>

        <div class="item">
          <p>За это время мы зарекомендовали себя, как успешно развивающаяся компания, которая ценит в первую очередь качество и натуральность продукта.</p>
        </div>
          
        <div class="item">
          <p>
            Наш ассортимент на сегодняшний день:<br>
            <ul class="products-list">
              <li>Халва воздушная – В процессе вакуумирования халва становится легкой и воздушной.</li>
              <li>Халва подсолнечная –  При приготовлении халвы мы используем только цельное ядро подсолнечника!</li>
              <li>Масло подсолнечное нерафинированное 1 сорта богато витаминами А и Е и биологически активными веществами, поэтому его рекомендуется добавлять в салаты, маринады и использовать при приготовлении других блюд.</li>
              <li>Семечки крупные и отборные. Благодаря уникальному американскому оборудованию наши семечки крупные и чистые! Домашний вкус как со сковороды!</li>
              <li>Ядро подсолнечное - Правильность отбора, сушки и обжарки семян являются основными показателями качества произведенного продукта. Ядро подсолнечника богато полезными веществами: витамины А и Е, фолиевая кислота, магний, калий, фосфор.  Их можно использовать при приготовлении диетических и экзотических блюд </li>
            </ul>
          </p>
        </div>
      </div>

      <div class="about__main__certificates">
        <div class="about__main__inner">
          <div class="left">
            Наши лицензии и сертификаты
          </div>

          <div class="right">
            <ImgLighbox :images="certificatesImages" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Certificate1 from '../../assets/images/certificate1.jpg';
import Certificate2 from '../../assets/images/certificate2.jpg';
import ImgLighbox from '../../Components/UI/ImgLightbox';

export default ({
  name: 'About',
  components: {
    ImgLighbox
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.setCertificatesImagesArray();
    });
  },
  data() {
    return {
      certificatesImages: []
    }
  },
  methods: {
    setCertificatesImagesArray() {
      this.certificatesImages = [
        {
          src: Certificate1,
          alt: 'Сертификат'
        },
        {
          src: Certificate2,
          alt: 'Сертификат'
        }
      ];
    }
  }
});
</script>

<style lang="scss">
  .products-list {
    margin-top: 5px;
    li {
      list-style-type: disc;
      padding: 5px 0;
      margin-left: 15px;
    }
  }
</style>