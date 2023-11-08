<script>
import ProductCard from './ProductCard.vue';
import { store } from "../store.js";


export default {
    components: {
        ProductCard,
    },
    data() {
        return {
            title: "Boolando Main",
            store
        }
    },
    created() {
        console.log('store', this.store)
    }
}
</script>

<template>
    <section class="page-main">
        <div class="container">
            <div class="row">

                <div v-for="(product, i) in store.products" :key="i" class="col-4 product-card">
                    <ProductCard :product="product" />
                </div>

            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.page-main {
    padding: 20px;
    flex-grow: 1;
    overflow: auto;

    .row {
        row-gap: 20px;
    }

    .product-card {
        padding-inline: 10px;
    }
}
</style>