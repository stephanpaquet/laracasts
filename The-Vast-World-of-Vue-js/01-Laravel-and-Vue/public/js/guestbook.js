
Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');

var guestbook = new Vue({
    el: '#guestbook',

    ready: function () {
        this.fetchMessages();
    },

    data: {
        submitted: false,
        newMessage: {
            name: '',
            message: ''
        }
    },

    computed: {
        // evaluated each time the data changed
        errors: function () {
            var hasError = false;

            for (var key in this.newMessage) {
                if (! this.newMessage[key]) {
                    hasError = true;
                }
            }

            return hasError;
        }
    },

    methods: {
        fetchMessages: function () {
            this.$http.get('/api/messages', function (messages) {
                this.$set('messages', messages);
            });
        },
        onSubmitForm: function (e) {
            var message = this.newMessage;

            // Prevent the default application
            e.preventDefault();

            // send POST ajax requests
            this.$http.post('/api/messages', message)
                // handle error
                .success(function (data, status, request) {
                    // Add new message to messages array
                    this.messages.push(data);
                    // reset input value
                    this.newMessage = {
                        'name': '',
                        'message': ''
                    }

                    // show thanks message
                    this.submitted = true;
                });
        }
    }
});
