Vue.component('message', {
	props: ['title', 'body'],
	data() {
		return {
			isVisible: true
		};
	},
	template: `
		<article class="message" v-show="isVisible">
			<div class="message-header">
				{{ title }}

				<button class="close" @click="hideModal">x</button>
			</div>
			<div class="message-body">
				{{ body }}
			</div>
			<hr>
			<pre>{{ $data }}</pre>
		</article>

	`,

	methods: {
		hideModal() {
			this.isVisible = false;

		}
	}
});

new Vue({
	el: '#root',
	data: {
	} 
});

