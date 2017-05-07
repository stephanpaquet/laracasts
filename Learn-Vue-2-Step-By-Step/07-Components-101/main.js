

Vue.component('task', {
	template: '<li>{{ message }} <slot></slot></li>',

	data() {
		return {
			message: 'Component 101'
		}
	}
});

new Vue({
	el: '#root',
	data: {
	} 
});
