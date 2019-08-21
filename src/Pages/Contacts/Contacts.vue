<template>
  <div class="contacts">
    <div class="contacts__inner">
      <yandex-map 
        :settings="settings" 
        :coords="[50.0055,82.578]" 
        zoom="16" 
        style="width: 100%; height: 100%; position: absolute;" 
        :controls="['trafficControl','typeSelector','rulerControl','fullscreenControl']" 
        options.float="none"
        options.position.right='auto'
        map-type="map" 
        @map-was-initialized="initHandler" > 

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
          <p>По вопросам сотрудничества</p>
          <p>
            <font-awesome-icon :icon="['fas', 'phone-alt']"  />   
            <span>8 (800) 555-35-35</span>
          </p>
          <p>
            <font-awesome-icon :icon="['fas', 'phone-alt']"  />
            <span>8 (800) 555-35-35</span>
          </p>
          <p>
            <font-awesome-icon :icon="['fas', 'envelope']"  />
            <span>info@gtrans-54.ru</span>
          </p>
          <p>
            <font-awesome-icon :icon="['fas', 'map-marker-alt']"  />
            <span>г. Усть-Каменогорск, ул. Грейдерная 1/1</span>
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