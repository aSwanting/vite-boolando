<script>
export default {
    data() {
        return {
            title: "Boolando Product Card"
        }
    }
}
</script>

<template>
    <div class="item-card">

        <div class="card-img">
            <figure class="item-img">
                <img src="/img/1.webp" alt="">
            </figure>
            <figure class="alt-img">
                <img src="/img/1b.webp" alt="">
            </figure>
            <div class="row card-overlay">
                <div class="col ov-red"> -50%</div>
                <div class="col ov-green">Sostenibilità</div>
            </div>
            <svg class="card-fav" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 5.881C12.981 4.729 14.484 4 16.05 4C18.822 4 21 6.178 21 8.95C21 12.3492 17.945 15.1195 13.3164 19.3167L13.305 19.327L12 20.515L10.695 19.336L10.6595 19.3037C6.04437 15.1098 3 12.3433 3 8.95C3 6.178 5.178 4 7.95 4C9.516 4 11.019 4.729 12 5.881Z" />
            </svg>
        </div>

        <div class="card-description">
            <p class="item-brand">Levi's</p>
            <p class="item-name">RELAXED FIT TEE UNISEX</p>
            <p class="item-price">14,99 &euro; <span class="old-price">29,99 &euro;</span></p>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;


.item-card {
    padding: 0 10px;

    .card-img {
        margin-bottom: 8px;
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

            .ov-red,
            .ov-green {
                padding-inline: 8px;
            }

            .ov-red {
                background-color: red;
            }

            .ov-green {
                background-color: green;
            }
        }

        .card-fav {
            position: absolute;
            right: 0px;
            top: 10px;
            height: 34px;
            width: 30px;
            padding: 6px;
            fill: black;
            background-color: white;
            transition: all 300ms;
            cursor: pointer;

            &:hover {
                fill: white;
                background-color: rgb(204, 83, 100);
            }
        }

    }

    .card-description {

        .item-brand {
            font-size: 11px;
            line-height: 6px;
            margin-bottom: 4px;
        }

        .item-name {
            font-size: 17px;
            line-height: 16px;
            font-weight: bold;
            margin-bottom: 2px;
        }

        .item-price {
            font-size: 11px;
            line-height: 6px;
            font-weight: bold;
            color: red;
            padding-bottom: 5px;
        }

        .old-price {
            color: black;
            font-weight: normal;
            text-decoration: line-through;
        }
    }

}
</style>