/*global Vue, window */
var demoVue = new Vue({
    el: '#demo',

    data: {
        name: 'Foobar',
        checked: false
    },

    ready: function () {
        "use strict";

        var self = this;

        window.setInterval(function () {
            self.name = 'Updated';
        }, 3000);
    }

});
