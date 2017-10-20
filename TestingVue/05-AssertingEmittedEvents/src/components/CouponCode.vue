<template>
    <div>
        <input type="text" class="coupon-code" v-model="code" @input="validate">
        <p v-if="valid">
            Coupon Redeemed: {{ message }}
        </p>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                code: '',
                coupons: [
                    {
                        code: '50OFF',
                        message: '50% Off!',
                        discount: 50
                    },
                    {
                        code: 'FREE',
                        message: 'Entirely Free!',
                        discount: 100
                    },

                ],
                valid: false
            }
        },
        computed: {
            message () {
                return this.coupons.find(coupon => coupon.code === this.code).message;
            }
        },
        methods: {
            validate () {
                this.valid = this.coupons.map(coupon => coupon.code).includes(this.code)
                console.log(this.valid);
            }
        }
    }
</script>
