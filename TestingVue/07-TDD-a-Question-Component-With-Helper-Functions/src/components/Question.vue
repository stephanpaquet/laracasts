<template>
    <div>
        <!-- viewing the question -->
        <div v-if="! editing">
            <h1>
                {{ question.title }}
            </h1>
            <p>
                {{ question.body }}
            </p>

            <button id="edit" @click="edit" v-show="! editing"></button>
        </div>

        <!-- editing the question -->
        <div v-if="editing">
            <input type="text" name="title" v-model="question.title">
            <textarea name="body" cols="30" rows="10" v-model="question.body">
                {{ question.body }}
            </textarea>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['question'],

        data () {
            return {
                editing: false
            };
        },
        methods: {
            edit () {
                this.editing = true;
            }
        }
    }
</script>
