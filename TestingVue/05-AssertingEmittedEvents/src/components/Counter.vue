<template>
    <div>
        <span class="count">{{ count }}</span>
        <button class="increment" @click="increment">
            Increment
        </button>
        <button class="decrement" @click="decrement" v-show="count > 0">
            Decrement
        </button>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                count: 0
            };
        },
        methods: {
            increment () {
                this.count += 1;
            },
            decrement () {
                this.count = (this.count > 0) ? this.count -= 1 : 0;
            }
        }
    }
</script>