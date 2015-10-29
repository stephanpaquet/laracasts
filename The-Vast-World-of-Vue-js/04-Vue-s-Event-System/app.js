/*global Vue, window */
var demoVue = new Vue({
    el: '#demo',

    data: {
        lastKeyUp: null,
        hasBeenBlur: false
    },

    methods: {
        onKeyUp: function (e) {
            "use strict";

            this.lastKeyUp = e.which;
        },

        onBlur: function () {
            "use strict";

            this.hasBeenBlur = true;
        }
    }
});
