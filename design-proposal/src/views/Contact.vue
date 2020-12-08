<template>
  <div class="carouselBlock">
       <v-img
        src="../assets/johannes-plenio-hvrpOmuMrAI-unsplash.jpg"
        gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        max-height="300px"
       >
         <v-row align="end" class="light-box white--text pa2 fill-height">
           <v-col>
            <v-container class="app">
              <div class="leftTitle">Contact Us</div>  
            </v-container>
          </v-col>
        </v-row>
      </v-img>
      <div class="block">
        <v-container>
          
              <form>
                <v-text-field
                  class="app"
                  v-model="name"
                  :error-messages="nameErrors"
                  :counter="10"
                  label="Name"
                  required
                  @input="$v.name.$touch()"
                  @blur="$v.name.$touch()"
                ></v-text-field>
                <v-text-field
                  class="app"
                  v-model="email"
                  :error-messages="emailErrors"
                  label="E-mail"
                  required
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                ></v-text-field>
               <v-textarea
                  class="app"
                  counter
                  label="Message"
                  :rules="rules"
                  :value="value"
                ></v-textarea>
               
            
                <v-btn
                  class="mr-4 app"
                  @click="submit"
                  color="success"
                >
                  submit
                </v-btn>
           </form>
    </v-container>
        </div>
       <v-container >
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246059.68016136895!2d32.43250937117746!3d15.501500994572323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x168e8fde9837cabf%3A0x191f55de7e67db40!2sKhartoum%2C%20Sudan!5e0!3m2!1sen!2sat!4v1607347553403!5m2!1sen!2sat" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
       </iframe>  
       </v-container>
     </div>
</template>

<script>

import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'

  export default {
    name: 'Contact',
    mixins: [validationMixin],

    validations: {
      name: { required,},
      email: { required, email },
      select: { required }
      },

    data: () => ({
            name: '',
            email: '',
            rules: [v => v.length <= 250 || 'Max 250 characters'],

        }),
  
  computed: {

      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be a valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
    },
  }
  
</script>
<style lang="scss">
@import '../scss/main.scss';
  
</style>
