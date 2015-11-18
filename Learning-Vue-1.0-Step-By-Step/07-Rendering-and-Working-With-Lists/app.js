/*global Vue, window*/

var appVue = new Vue({
    el: '#app',

    data: {
        tasks: [
            {body:  'Go to the store', completed: false },
            {body:  'Go to the bank', completed: true },
            {body:  'Go to the doctor', completed: false }
        ]
    },

    methods: {
        toggleCompletedFor: function (task) {
            task.completed = ! task.completed;
        }
    }

});
