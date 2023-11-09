import { reactive } from "vue";
import axios from 'axios';

const store = reactive({

    // Properties
    products: [],
    productsUrl: 'http://localhost:3000/products',

    // Methods
    fetchData() {
        axios.get(this.productsUrl).then(response => {

            this.products = response.data
            this.updatePrices()

        })
    },
    updatePrices() {
        let discountMultiplier
        for (let product of this.products) {
            const discount = product.badges.find(badge => badge.type === "discount")
            discount ? discountMultiplier = (parseInt(discount.value) / 100) + 1 : discountMultiplier = 1
            product.discountedPrice = (product.price * discountMultiplier).toFixed(2)
            discountMultiplier === 1 ? product.hasDiscount = false : product.hasDiscount = true
        }
    }
})

export default store


