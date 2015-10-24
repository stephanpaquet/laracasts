new Vue({
    el: '#guestbook',

    ready: function () {
        this.fetchMessages();
    },

    methods: {
        fetchMessages: function () {
            this.$http.get('/api/messages', function (messages) {
                console.info(messages);
                this.$set('messages', messages);
            });
        }
    }
});
