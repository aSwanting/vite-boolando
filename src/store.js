import { reactive } from "vue";
import productsJson from './db.json';

export const store = reactive({
    products: productsJson.products
})