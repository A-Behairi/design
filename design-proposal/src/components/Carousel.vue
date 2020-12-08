<template>
  <div class="carouselBlock">
       <v-carousel :show-arrows="false" cycle=''>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >
     <v-row
          class="fill-height title"
          align="center"
          justify="center"
        >
          <div class="title" >
            <h1 class="app">{{ item.title }} </h1></div>
        </v-row>
    </v-carousel-item>
    
  </v-carousel>
  </div>
</template>

<script>
  export default {
    name: 'Carousel',

      data () {
      return {
        items: [
          {
            src: require('../assets/andreas-gucklhorn-mawU2PoJWfU-unsplash.jpg'),
            title:"Welcome to My Design"
          },
          {
            src: require('../assets/anna-wangler-_GqwoiT7QY8-unsplash.jpg'),
            title:"Welcome to My Design"
          },
          {
            src: require('../assets/christian-joudrey-u_nsiSvPEak-unsplash.jpg'),
            title:"Welcome to My Design"
          },
          {
            src: require('../assets/denys-nevozhai-2vmT5_FeMck-unsplash.jpg'),
            title:"Welcome to My Design"  
          },
        ],
      }
    },
  }
</script>


<style lang="scss">
@import '../scss/main.scss' ;

</style>