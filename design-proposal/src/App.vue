<template>
  <v-app>
    <v-content>
    <v-app-bar
      flat
    >
     <Header/>
     <v-switch  text
                @click="toggleTheme"
                icon 
                v-model="ex11"
                label="Dark Theme"
                color="secondary"
                value="secondary"
                hide-details
                class="app"
                ></v-switch>
                 <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up"></v-app-bar-nav-icon>
                 
    </v-app-bar>
                <div class="hidden-sm-and-up">
                <v-navigation-drawer
                  class="app"
                   v-model="drawer"
                   absolute
                   temporary
                   right
                   app
                   
                 >
                   <v-list
                     nav
                     dense
                   >
                     <v-list-item-group
                         v-model="group"
                         active-class="deep-purple--text text--accent-4"
                       >
                         <v-list-item to="/home">
                           <v-list-item-title >Home</v-list-item-title>
                         </v-list-item>
               
                         <v-list-item to='/about'>
                           <v-list-item-title >About</v-list-item-title>
                         </v-list-item>
               
                         <v-list-item to='/contact'>
                           <v-list-item-title>Contact</v-list-item-title>
                         </v-list-item>
                       </v-list-item-group>
                     </v-list>
               </v-navigation-drawer>
                </div>
       
    </v-content>

    <router-view></router-view>

      
      <Footer/>   
      
       
  
  </v-app>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer.vue';





export default {
  name: 'App',



  components: {
    Header,
    Footer
    
   
  },
  
  data: () => ({
     drawer: false,
      group: null,
     icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
     ]
  }),
  methods:{
    toggleTheme(){
      this.$vuetify.theme.dark= !this.$vuetify.theme.dark;
     
     
    }
  },
   watch: {
      group () {
        this.drawer = false
      },
    },
};

</script>

