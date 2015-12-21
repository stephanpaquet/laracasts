// browserify entry point
var Vue = require('vue');

import Alert from './components/Alert.vue';

var vueApp = new Vue({
    el: '#app',

    components: {Alert},

    ready() {
        console.log('Ready to go !');
    }
});
