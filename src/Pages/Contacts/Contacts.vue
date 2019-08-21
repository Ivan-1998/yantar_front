<template>
  <div class="contacts">
    <div class="contacts__inner">
      <yandex-map 
        :coords="[50.0055,82.578]" 
        zoom="16" 
        style="width: 100%; height: 100%; position: absolute;" 
        :controls="['trafficControl','typeSelector','rulerControl','fullscreenControl']" 
      > 

        <ymap-marker 
          marker-id="1" 
          marker-type="placemark" 
          :coords="[50.005497, 82.582429]" 
          :icon="{color: 'red'}" 
          cluster-name="1" >
        </ymap-marker> 
      </yandex-map>

      <div class="contacts__left flex-center">
        <div class="contacts__left__title">контакты</div>

        <div class="contacts__left__info">
          <p>По вопросам сотрудничества:</p>
          <p>
            <font-awesome-icon :icon="['fas', 'phone-alt']"  />   
            <a :href="`tel:${phoneHref}`">{{phone}}</a>
          </p>
          <p>
            <font-awesome-icon :icon="['fas', 'envelope']"  />
            <a :href="`mailto:${email}`">{{email}}</a>
          </p>
          <p>
            <font-awesome-icon :icon="['fas', 'map-marker-alt']"  />
            <a>{{adress}}</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { yandexMap, ymapMarker } from 'vue-yandex-maps';

library.add(faPhoneAlt, faEnvelope, faMapMarkerAlt);


export default ({
  name: 'Contacts',
  components: {
    FontAwesomeIcon, yandexMap, ymapMarker
  }
});
</script>