import { reactive } from "vue";

const store = reactive({
    products: [],
    productsUrl: 'http://localhost:3000/products',
})

export default store