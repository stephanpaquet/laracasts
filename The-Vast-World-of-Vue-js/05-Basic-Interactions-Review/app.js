/*global Vue, window */
var postVue = new Vue({
    el: '#post',

    data: {
        isVisible: true,
        liked: false,

        likesCount: 10
    },

    methods: {
        toggleLike: function () {
            this.liked = ! this.liked;

            this.liked ? this.likesCount++ : this.likesCount--;
        }
    }
});
