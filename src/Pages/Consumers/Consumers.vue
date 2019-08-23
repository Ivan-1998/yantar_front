<template>
  <div class="consumers">
    <ConsumersHeader />

    <div class="landing-content consumers-content">
      <div class="container">
        <div v-for="(item, itemIndex) in items" :key="itemIndex" 
             class="item"
             :class="item.class"
        >

          <img :src="item.img" alt="Потребителям">

          <div class="item-text">
            <p>
              <span v-html="item.titleMain" class="font-bold"></span>
              <span v-html="item.title"></span>
            </p>

            <ul>
              <li v-for="(advantage, advantageIndex) in item.advantages" :key="advantageIndex">
                {{advantage}}
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import MixinConsumersData from '../../Mixins/MixinConsumersData';
import ConsumersHeader from './Components/ConsumersHeader';

export default ({
  name: 'Consumers',
  mixins: [MixinConsumersData],
  components: {
    ConsumersHeader
  }
});
</script>