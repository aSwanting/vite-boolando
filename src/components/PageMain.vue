<script>
import ProductCard from './ProductCard.vue';
import store from "../store.js";

export default {
    components: {
        ProductCard,
    },
    data() {
        return {
            title: "Boolando Main",
            store,
            productSelected: {},
            productModalOpen: false,
        }
    },
    methods: {
        openModal(product) {
            this.productModalOpen = true
            this.productSelected = product
        },

        closeModal() {
            this.productModalOpen = false
            this.productSelected = {}
        },

        getImagePath(imgPath) {
            return new URL(imgPath, import.meta.url).href
        },
    }
}
</script>

<template>
    <section class="page-main">

        <div class="container">
            <div class="row">

                <div class="col-4 product-card" v-for="(product, i) in store.products" :key="i">
                    <ProductCard :product="product" @show="openModal" />
                </div>

            </div>
        </div>
        <div class="product-modal" v-if="productModalOpen" @click.self="closeModal()">
            <transition>
                <div class="modal-card">
                    <span class="close" @click="closeModal()"><svg xmlns="http://www.w3.org/2000/svg" height="1.2em"
                            viewBox="0 0 512 512">
                            <path
                                d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
                        </svg></span>

                    <div class="card-img">
                        <figure class="item-img">
                            <img :src="getImagePath(`../assets/${productSelected.frontImage}`)" alt="">
                        </figure>
                        <figure class="alt-img">
                            <img :src="getImagePath(`../assets/${productSelected.backImage}`)" alt="">
                        </figure>
                    </div>
                    <div class="product-info">

                        <h3 class="product-name">{{ productSelected.name }}</h3>
                        <h4 class="product-brand">{{ productSelected.brand }}</h4>

                        <div class="price">
                            <p class="item-price" v-if="productSelected.hasDiscount">{{ productSelected.discountedPrice }}
                                &euro;</p>
                            <p :class="[productSelected.hasDiscount ? 'old-price' : 'item-price']">{{ productSelected.price
                            }} &euro; </p>
                        </div>

                    </div>

                </div>
            </transition>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.page-main {
    padding: 20px;
    flex-grow: 1;
    overflow: auto;

    .product-modal::after {
        content: '';
        position: fixed;
        inset: 0;
        background-color: rgba(255, 255, 255, 0.25);
        backdrop-filter: blur(5px);
        z-index: 100;
    }

    .modal-card {
        background-color: white;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 200;
        padding: 40px;
        width: 100%;
        max-width: 600px;
        border-radius: 15px;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
        font-size: 24px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 30px;

        .card-img {
            position: relative;
            overflow: hidden;
            flex-basis: 60%;
            min-width: 60%;
            border-radius: 15px;
            box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);

            .item-img,
            .alt-img {
                transition: all 300ms ease-in-out;

                & img {
                    display: block;
                }
            }

            .item-img {
                position: relative;
                left: 0%;
            }

            .alt-img {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0px;
                left: 100%;
            }

            &:hover .item-img {
                left: -100%;
            }

            &:hover .alt-img {
                left: 0%;
            }
        }

        .product-info {

            line-height: 1.6em;

            .product-name {
                text-transform: uppercase;
            }

            .product-brand {
                font-weight: 500;
            }

            .price {
                font-size: 14px;
                display: flex;
                gap: 5px;
            }

            .item-price {
                font-weight: bold;
                color: red;
            }

            .old-price {
                color: black;
                font-weight: normal;
                text-decoration: line-through;
            }
        }

        .close {
            position: absolute;
            display: flex;
            top: 10px;
            right: 10px;
            user-select: none;
            cursor: pointer;
            transition: 200ms all;
            opacity: 0.5;

            &:hover {
                transform: rotate(90deg);
            }
        }
    }

    .row {
        row-gap: 20px;
    }

    .product-card {
        padding-inline: 10px;
    }
}

.v-enter-active,
.v-leave-active {
    transition: 1s all;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>