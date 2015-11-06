/*global Vue, window*/

Vue.component('plan', {
    template: '#plan-template',

    props: ['plan', 'active'],

    computed: {
        isUpgrade: function () {
            "use strict";

            return this.plan.price > this.active.price;
        }

    },

    methods: {
        setActivePlan: function () {
            "use strict";

            this.active = this.plan;
        }
    }
});

var appVue = new Vue({
    el: '#app',

    data: {
        plans: [
            { name: 'Enterprise', price: 100},
            { name: 'Pro', price: 50},
            { name: 'Personal', price: 10},
            { name: 'Free', price: 0}
        ],
        active: {}
    }
});
