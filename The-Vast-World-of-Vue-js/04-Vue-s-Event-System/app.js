/*global Vue, window */
var demoVue = new Vue({
    el: '#demo',

    data: {
        lastKeyUp: null,
        hasBeenBlur: false
    },

    methods: {
        onKeyUp: function (e) {
            this.lastKeyUp = e.which;
            console.log(e);
        },
        onBlur: function (e) {
            this.hasBeenBlur = true;
            console.log(e);
        }
    }
});
