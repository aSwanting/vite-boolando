<script>
import ProductCard from './ProductCard.vue';
import productsJson from '../db.json'


export default {
    components: {
        ProductCard,
    },
    data() {
        return {
            title: "Boolando Main",
            productsJson
        }
    },
    mounted() {
        console.log(this.productsJson.products)
    }
}
</script>

<template>
    <section class="page-main">
        <div class="container">
            <div class="row">

                <div v-for="(product, i) in productsJson.products" :key="i" class="col-4">
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

    .row {
        row-gap: 10px;
    }
}
</style>