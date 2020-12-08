<template>
  <div class="app">
         <Carousel/>
         <v-divider></v-divider>
         <Gallery/>
         <LatestEvents/>
    </div>
</template>

<script>
import Gallery from '../components/Gallery';
import LatestEvents from '../components/latestEvents.vue';
import Carousel from '../components/Carousel.vue';

  export default {
    name: 'Home',
    components:{
               Carousel,
               Gallery,
               LatestEvents
               },
    data: () => ({
        })
  };
</script>
