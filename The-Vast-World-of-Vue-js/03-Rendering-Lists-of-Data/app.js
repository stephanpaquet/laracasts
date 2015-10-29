/*global Vue, window */
var demoVue = new Vue({
    el: '#demo',

    data: {
        names: ['Stan', 'Jame', 'John', 'Taylor', 'Michelle', 'Susan']
    },

    methods: {
        addName: function () {
            "use strict";

            this.names.push(this.newName);

            this.newName = '';
        }
    }
});
