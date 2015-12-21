<template>
    <div :class="alertClasses" v-show="show">
        <slot></slot>
        <span class="Alert__close" @click="show = false">x</span>
    </div>
</template>

<script>
    export default {

        //props: ['type'],

        data() {
            return {
                show: true
            };
        },
        computed: {
            alertClasses() {
                var type = this.type;

                return {
                    'Alert' : true,
                    'Alert--success' : type == 'success',
                    'Alert--warning' : type == 'warning',
                    'Alert--error' : type == 'error'
                };
            }
        }
    };
</script>
