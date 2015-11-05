/*global Vue, window*/

var appVue = new Vue({
    el: '#app',

    data: {
        count: 0
    },

    methods: {
        handleIt: function () {
            "use strict";

            window.alert('handleIt');
        },
        updateCount: function () {
            "use strict";

            this.count += 1;
        }
    }
});
