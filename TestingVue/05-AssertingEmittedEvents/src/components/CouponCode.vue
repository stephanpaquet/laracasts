<template>
    <div>
        <input type="text" class="coupon-code" v-model="code" @input="validate">
        <p v-if="valid">
            Coupon Redeemed: {{ message }}
        </p>
        <p v-else>
            Invalid coupon code
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
                        code: '10OFF',
                        message: '10% Off!',
                        discount: 10
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
            selectedCoupon () {
                return this.coupons.find(coupon => coupon.code === this.code);
            },
            message () {
                return this.selectedCoupon.message;
            }
        },
        methods: {
            validate () {
                //this.valid = this.coupons.map(coupon => coupon.code).includes(this.code);
                this.valid = !! this.selectedCoupon;

                if (this.valid) {
                    this.$emit('applied', this.selectedCoupon.discount);
                }
            }
        }
    }
</script>
