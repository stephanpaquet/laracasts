/*global Vue, window*/

Vue.component('tasks', {
    props:  ['list'],

    template: '#tasks-template',

    methods: {
        toggleCompletedFor: function (task) {
            task.completed = ! task.completed;
        }
    }
});


var appVue = new Vue({
    el: '#app',

    data: {
        tasks: [
            {body:  'Go to the store', completed: false },
            {body:  'Go to the bank', completed: true },
            {body:  'Go to the doctor', completed: false }
        ]
    }


});
