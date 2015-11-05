/*global Vue, window*/

Vue.component('hello-world', { // counter is the name of the component ex. <counter></counter>
    template: '<h1>Hello world</h1>'
});

Vue.component('counter', { // counter is the name of the component ex. <counter></counter>
    template: '<h1>Hello counter</h1>'
});

Vue.component('counter-with-template', { // counter is the name of the component ex. <counter></counter>
    template: '#counter-template',

    props: ['subject'],

    methods: {
        updateCounter: function () {
            this.count += 1;
        }
    },

    data: function () {
        "use strict";

        return {
            count: 0
        };
    }
});

var appVue = new Vue({
    el: '#app'
});
