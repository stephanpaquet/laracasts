

Vue.component('task-list', {
	template: `
		<div>
			<task v-for="task in tasks" :key="task.id">
				{{ task.task }}
			</task>
		</div>
		`,

	data() {
		return {
			tasks: [
				{task: 'Go to the store', complete: true},
				{task: 'Go to the email', complete: false},
				{task: 'Go to the farm', complete: true},
				{task: 'Go to work', complete: true},
			]
		}
	}
});

Vue.component('task', {
	template: '<li><slot></slot></li>',

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

