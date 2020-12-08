import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import VueRouter from 'vue-router';

Vue.use(Vuetify);
Vue.use(VueRouter);

export default new Vuetify({
    theme: {
        options: { customProperties: true },
},
})
