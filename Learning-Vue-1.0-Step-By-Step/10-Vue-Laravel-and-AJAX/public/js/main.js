/* Server side
Vue.component('tasks', {
    template: '#tasks-template',

    props: ['list'],

    created() {
        this.list = JSON.parse(this.list);
    }
});
*/

Vue.component('tasks', {
    template: '#tasks-template',

    data: function () {
        return {
            list: []
        };
    },

    created: function () { // component is innitially crea= ted
        this.fetchTaskList();
    },

    methods: {

        fetchTaskList: function () {
            $.getJSON('api/tasks', function (tasks) {
                this.list = tasks;
                console.log(tasks);
            }.bind(this));
        },

        deleteTask: function (task) {
            this.list.$remove(task);
        }
    }
});

new Vue({
    el: 'body'

});
