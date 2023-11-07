<script>

export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isDiscounted: false
        };
    },
    // mounted() {
    //     const discounts = this.product.badges.filter(badge => badge.type === 'discount');
    //     if (discounts.length) {
    //         this.discount = parseInt(discounts[0].value.replace('-', ''));
    //     }
    // },
    methods: {
        getImagePath(imgPath) {
            return new URL(imgPath, import.meta.url).href
        },

        toggleFavorite() {
            this.product.isInFavorites = !this.product.isInFavorites
        },

        getDiscount() {

            for (let badge of this.product.badges) {
                if (badge.type === "discount") {

                    this.isDiscounted = true

                    const price = this.product.price
                    const discount = (parseInt(badge.value) / 100) + 1
                    const discountedPrice = (price * discount).toFixed(2)
                    return discountedPrice

                }
            }
        }
    }
}
</script>

<template>
    <div class="item-card">

        <div class="card-img" @click="getDiscount()">
            <figure class="item-img">
                <img :src="getImagePath(`../assets/${product.frontImage}`)" alt="">
            </figure>
            <figure class="alt-img">
                <img :src="getImagePath(`../assets/${product.backImage}`)" alt="">
            </figure>
            <div class="row card-overlay">
                <div class="col" :class="badge.type" v-for="badge in product.badges">{{ badge.value }}</div>
            </div>
            <svg class="card-fav" :class="{ fav: product.isInFavorites }" @click="toggleFavorite()" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 5.881C12.981 4.729 14.484 4 16.05 4C18.822 4 21 6.178 21 8.95C21 12.3492 17.945 15.1195 13.3164 19.3167L13.305 19.327L12 20.515L10.695 19.336L10.6595 19.3037C6.04437 15.1098 3 12.3433 3 8.95C3 6.178 5.178 4 7.95 4C9.516 4 11.019 4.729 12 5.881Z" />
            </svg>
        </div>

        <div class="card-description">
            <p class="item-brand">{{ product.brand }}</p>
            <p class="item-name">{{ product.name }}</p>

            <div class="price">
                <p class="item-price" v-show="isDiscounted">
                    {{ getDiscount() }} &euro;</p>
                <p :class="[isDiscounted ? 'old-price' : 'item-price']">{{ product.price }}
                    &euro;
                </p>
            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;


.item-card {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    overflow: hidden;
    height: 100%;

    .card-img {
        position: relative;
        overflow: hidden;

        .item-img,
        .alt-img {
            transition: all 300ms ease-in-out;
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


        .card-overlay {
            position: absolute;
            bottom: 10%;
            color: white;
            column-gap: 4px;
            font-size: 12px;
            line-height: 20px;
            align-items: center;

            .discount,
            .tag {
                padding-inline: 8px;
            }

            .discount {
                background-color: red;
            }

            .tag {
                background-color: green;
                order: 1;
            }
        }

        .card-fav {
            position: absolute;
            right: 0px;
            top: 20px;
            height: 34px;
            width: 30px;
            padding: 6px;
            fill: black;
            background-color: white;
            transition: all 300ms;
            cursor: pointer;

            &:hover {
                fill: $fav-color;
            }

            &.fav {
                fill: white;
                background-color: $fav-color;

                &:hover {
                    opacity: 0.8;
                }
            }
        }

    }

    .card-description {

        padding: 10px;
        line-height: 1em;

        .item-brand {
            font-size: 11px;
        }

        .item-name {
            text-transform: uppercase;
            font-size: 17px;
            font-weight: bold;
        }

        .price {
            font-size: 11px;
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

}
</style>