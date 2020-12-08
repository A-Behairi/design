<template>
  <v-container>
      <div class="block galleryBlock">
<h2 class="text-center"> Gallery </h2>
<v-row >
    <v-col cols="12" sm="6" offset-sm="3">
      <v-card>
        <v-container fluid>
          <v-row>
            <v-col
              v-for="item in items"
              :key="item.id"
              class="d-flex child-flex"
              cols="6" sm="4"
            >
              <v-card flat tile class="d-flex">
                <v-img
                  :src="item.src"
                  aspect-ratio="1"
                  class="grey lighten-2"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
      </div>  
  </v-container>
</template>

<script>
  export default {
    name: 'Gallery',

    data: () => ({
         
        items: [
          {
            id: 1,  
            src: require('../assets/andreas-gucklhorn-mawU2PoJWfU-unsplash.jpg'),
            
          },
          {
            id: 2,  
            src: require('../assets/anna-wangler-_GqwoiT7QY8-unsplash.jpg'),
            
          },
          {
            id: 3,  
            src: require('../assets/christian-joudrey-u_nsiSvPEak-unsplash.jpg'),
            
          },
          {
            id: 4,  
            src: require('../assets/denys-nevozhai-2vmT5_FeMck-unsplash.jpg'),
              
          },
          {
            id: 5,  
            src: require('../assets/jeremy-bishop-d3fZSXlJ3Ok-unsplash.jpg'),
              
          },
          {
            id: 6,  
            src: require('../assets/johannes-plenio-hvrpOmuMrAI-unsplash.jpg'),
              
          },
          {
            id: 7,  
            src: require('../assets/jonatan-pie-3l3RwQdHRHg-unsplash.jpg'),
              
          },
          {
            id: 8,  
            src: require('../assets/joshua-sortino-xZqr8WtYEJ0-unsplash.jpg'),
              
          },
          {
            id: 9,  
            src: require('../assets/julien-moreau-688Fna1pwOQ-unsplash.jpg'),
              
          },
          
        ],
      
        })
  };
</script>
<style lang='scss'>
@import '../scss/main.scss' ; 
</style>
