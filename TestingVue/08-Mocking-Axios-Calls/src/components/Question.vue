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
            <input type="text" name="title" v-model="form.title">
            <textarea name="body" cols="30" rows="10" v-model="form.body">
                {{ question.body }}
            </textarea>

            <button id="cancel" @click="cancel">
                Cancel
            </button>

            <button id="update" @click="update">
                Update
            </button>
        </div>
        <p v-if="feedback">Your question has been updated.</p>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        props: ['dataQuestion'],

        data () {
            return {
                question: this.dataQuestion,
                editing: false,
                form: {
                    title: this.dataQuestion.title,
                    body: this.dataQuestion.body
                },
                feedback: false
            };
        },
        methods: {
            edit () {
                this.editing = true;
            },
            update () {
                this.question = this.form;

                this.editing = false;

                axios.post('/questions/1', this.form)
                    .then(({data}) => {
                        this.feedback = true;
                        console.log(data.title);
                    });
            },
            cancel () {
                this.editing = false;
            }
        }
    }
</script>
