<template>
    <div>
        <input type="text" class="new-reminder" v-model="newReminder">
        <button @click="add">
            Add reminder
        </button>

        <ul v-if="reminders.length">
            <li v-for="reminder in reminders" :key="reminder">
                {{ reminder }}
                <input type="text" class="remove" @click="remove(reminder)">
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                newReminder: '',
                reminders: []
            }
        },
        methods: {
            add () {
                this.reminders.push(this.newReminder);

                this.newReminder = '';
            },
            remove (reminder) {
                this.reminders.splice(reminder, 1);
                console.log(reminder);

            }
        }
    };
</script>
