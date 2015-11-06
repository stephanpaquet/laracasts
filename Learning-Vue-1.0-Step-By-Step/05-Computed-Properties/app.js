/*global Vue, window*/

var appVue = new Vue({
    el: '#app',

    data: {
        points: 1000
    },

    computed: {

        // will be called each time the model has changed
        skill: function () {
            "use strict";

            var skill;

            if (this.points <= 100) {
                skill = 'Beginner';
            } else if (this.points <= 500) {
                skill = 'Intermediate';
            } else if (this.points > 500) {
                skill = 'Advance';
            }

            return skill;
        }
    }
});

var appVueWithWath = new Vue({
    el: '#app-watch',

    data: {
        first: 'Bob',
        last: 'Moran',
        fullName: ''
    },

    ready: function () {
        "use strict";

        this.fullName = this.first + ' ' + this.last;
    },

    // these functions are called each time data value has been changed
    watch: {
        first: function (first) {
            "use strict";

            this.fullName = first + ' ' + this.last;
            window.console.info(first);
        },

        last: function (last) {
            "use strict";

            this.fullName = this.first + ' ' + last;
            window.console.info(last);
        }
    }
});

var appVueWithComputed = new Vue({
    el: '#app-computed',

    data: {
        first: 'Bob',
        last: 'Moran'
    },

    ready: function () {
        "use strict";

        this.fullName = this.first + ' ' + this.last;
    },

    computed: {
        fullName: function () {
            "use strict";

            return this.first + ' ' + this.last;
        }
    }
});
