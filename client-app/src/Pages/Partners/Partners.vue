<template>
  <div class="partners">
    <LandingHeader :title="title"
                   :subtitle="subtitle"
                   :img="img"
                   class="partners-header"
    />

    <div class="landing-content partners-content">
      
      <div class="partners-profitable__bg">
        <div class="container partners-block partners-profitable">
          <h2 class="partners-block__title">{{profitableTitle}}</h2>

          <div class="partners-profitable__list">
            <div v-for="(item, index) in profitable" :key="index" class="item">
              <div class="item-image">
                <img :src="item.image" alt="Выгодно!" />
              </div>
              <p>{{item.text}}</p>
            </div>
          </div>
        </div>
      </div>


      <div class="container partners-block partners-terms">
        <h2 class="partners-block__title">{{termsTitle}}</h2>

        <div class="partners-terms__list">
          <div v-for="(item, index) in terms" :key="index">

            <div class="item">
              <div class="item-image">
                <img :src="item.image" :alt="`Этап производства№${index + 1}`" />
              </div>
              <p>{{item.text}}</p>
            </div>

            <div v-if="index + 1 !== terms.length" class="line">
              <img src="../../assets/images/partners-terms-line.svg" alt="Следующий этап" />
            </div>

          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import MixinParntersData from '../../Mixins/MixinPartnersData';
import LandingHeader from '../../Components/Landing/LandingHeader';


export default ({
  name: 'Partners',
  mixins: [MixinParntersData],
  components: {
    LandingHeader
  }
});
</script>