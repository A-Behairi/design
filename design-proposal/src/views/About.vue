<template>
   <div class="carouselBlock">
       <v-img
        src="../assets/nasa-V4ZksNimxLk-unsplash.jpg"
        gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        max-height="300px"
       >
         <v-row align="end" class="light-box white--text pa2 fill-height">
           <v-col>
            <v-container>
              <div class="leftTitle">About Us</div>  
            </v-container>
          </v-col>
        </v-row>
      </v-img>
      <v-container >
        <p class='app'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>          
       </v-container>
       <v-container >
          <div class="block">
           <h2 class="text-center">
             Our Teams
           </h2>

         <v-row>
           <v-col cols="12" sm="4"
                  v-for="item in items"
                  :key="item.id" >
               <v-card
                      flat
                      outlined
                      class="mx-auto">
                      <v-img
                            class="white--text align-end app"
                            height="400px"
                            :src="item.src"
                                                     >
                            <v-card-title>{{item.title}}</v-card-title>
                      </v-img>
                         
                        <v-card-text class="text--primary app">
                               <div>{{item.description}}</div>
                        </v-card-text>
                </v-card> 
            </v-col>
          </v-row>
      </div> 
    </v-container>
  </div>
</template>

       

<script>

  export default {
    name: 'About',
    

    data: () => ({

      items: [
          {
            id: 1,  
            src: require('../assets/Professional-Headshot-and-Corporate-Photo-1.jpg'),
            title: 'Lisa White',
            description:"Director"
          },
          {
            id: 2,  
            src: require('../assets/tips-for-professional-portraits.jpg'),
            title: 'John doe',
            description:"Designer"
          },
          {
            id: 3,  
            src: require('../assets/approachable-professional-headshot_1.jpg'),
            title: 'Roy Perry',
            description:"Photographer"
          }
         ]

        })
  };
</script>

<style lang="scss">
@import '../scss/main.scss';
  
</style>
