/*global Vue, window*/

Vue.component('tasks', {
    props:  ['list'],

    template: '#tasks-template',

    computed: {
        remaining: function  () {
            var vm = this;

            return this.list.filter(function (task) {
                // return only what is false
                // return ! task.completed;

                // or
                return ! vm.isCompleted(task);
            }).length;
        }
    },

    methods: {
        toggleCompletedFor: function (task) {
            task.completed = ! task.completed;
        },

        isCompleted: function (task) {
             return task.completed;
         },

         isInProgress: function (task) {
              return ! task.completed;
          },

          deleteTask: function (task) {
               this.list.$remove(task);
           },

           clearCompleted: function () {
               this.list = this.list.filter(this.isInProgress);
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
