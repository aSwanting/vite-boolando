<script>
import Product from './Product.vue';

export default {
    components: {
        Product
    },
    data() {
        return {
            title: "Boolando Main"
        }
    }
}
</script>

<template>
    <section class="page-main">
        <div class="container">
            <div class="row">

                <div v-for="n in 6" :key="n" class="col-4">
                    <Product />
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