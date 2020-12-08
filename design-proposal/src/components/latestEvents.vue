<template>
  <v-container>
      <div class="block latestEventsBlock">
      <h2 class="text-center">Latest Events</h2>
 <v-row>
     <v-col
     cols='12' sm="4"
     v-for="item in items"
     :key="item.id">
         
  <v-card
    outlined
    class="mx-auto"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="item.src"
    >
      <v-card-title>{{item.title}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      {{item.subtitle}}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{item.description}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="primary"
        text
      >
        More
      </v-btn>
    </v-card-actions>
  </v-card> 
     </v-col>
 </v-row>
  </div>
  </v-container>
</template>

<script>
  export default {
    name: 'latestEvents',

    data: () => ({

         items: [
          {
            id: 1,  
            src: require('../assets/andreas-gucklhorn-mawU2PoJWfU-unsplash.jpg'),
            title: 'My Title',
            subtitle: 'my subtitle',
            description:"this is the description of my title's last event  "
          },
          {
            id: 2,  
            src: require('../assets/anna-wangler-_GqwoiT7QY8-unsplash.jpg'),
            title: 'My Title',
            subtitle: 'my subtitle',
            description:"this is the description of my title's last event  "
          },
          {
            id: 3,  
            src: require('../assets/christian-joudrey-u_nsiSvPEak-unsplash.jpg'),
            title: 'My Title',
            subtitle: 'my subtitle',
            description:"this is the description of my title's last event  "
          }
         ]
        })
  };
</script>

<style lang='scss'>

@import '../scss/main.scss' ;
    
</style>