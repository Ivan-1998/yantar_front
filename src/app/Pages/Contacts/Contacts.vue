<template>
  <div class="contacts">
    <div class="contacts__inner">
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
                <span>г.Новосибирск,ул. Блюхера, 30/1</span>
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

library.add(faPhoneAlt, faEnvelope, faMapMarkerAlt);


export default ({
  name: 'Contacts',
  components: {
    FontAwesomeIcon
  }
});
</script>