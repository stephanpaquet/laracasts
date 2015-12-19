/*global Vue */

Vue.component('alert', {
    template: '#alert-template',

    props: ['type'],

    data: function () {
        "use strict";

        return {
            show: true
        };
    },

    computed: {
        alertClasses: function () {
            "use strict";
            var type = this.type;
            console.log(type);

            return {
                'Alert' : true,
                'Alert--success' : type == 'success',
                'Alert--warning' : type == 'warning',
                'Alert--error' : type == 'error'
            };
        }
    }
});

var vueApp = new Vue({
    el: 'body'

});
