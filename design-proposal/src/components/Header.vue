<template>
  <v-container>
  <v-toolbar 
   flat
  >
    
      <v-toolbar-title class="app">My Design</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
<v-toolbar-items  class="app hidden-xs-only">
      <v-btn  text to="/home">
        Home
      </v-btn>

      <v-btn text  to="/about">
          About
      </v-btn>

      <v-btn text  to="/contact"> 
      Contact
      </v-btn>
       
      </v-toolbar-items>
    
    </v-toolbar>
     
</v-container>
    

</template>

<script>
  export default {
    name: 'Header',

    data: () => ({
     
      }),
      
  }

</script>
