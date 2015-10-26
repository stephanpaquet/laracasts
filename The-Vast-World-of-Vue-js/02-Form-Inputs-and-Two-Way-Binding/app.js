/*global Vue, window */
var demoVue = new Vue({
    el: '#demo',

    data: {
        name: 'Foobar'
    },

    ready: function () {
        "use strict";

        var self = this;

        window.setInterval(function () {
            self.name = 'Updated';
        }, 3000);
    }

});
