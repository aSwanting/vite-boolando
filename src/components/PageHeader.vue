<script>
export default {
    data() {
        return {
            title: "boolandoooooo"
        }
    }
}
</script>

<template>
    <header class="page-header">
        <div class="container">
            <nav class="row">

                <div class="col categories">
                    <ul>
                        <li><a href="#">Donna</a></li>
                        <li><a href="#">Uomo</a></li>
                        <li><a href="#">Bambini</a></li>
                    </ul>
                </div>

                <div class="col header-logo">
                    <a href="#"><img src="/img/boolean-logo.png" alt=""></a>
                </div>

                <div class="col icons">
                    <ul>
                        <li><a href="#"><img src="/img/icons/user.svg" alt=""></a></li>
                        <li><a href="#"><img src="/img/icons/basket.svg" alt=""></a></li>
                        <li><a href="#"><img src="/img/icons/heart.svg" alt=""></a></li>
                    </ul>
                </div>

            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;


.page-header {
    padding: 15px 20px;
    color: white;
    font-size: 13px;
    font-weight: bold;
    background-color: $main-color;
    box-shadow: 0px 3px 5px rgb(0, 0, 0, 0.3);

    img {
        display: block;
    }

    .row {
        justify-content: space-between;
        align-items: center;
    }

    .header-logo {

        img {
            max-width: 124px;
            display: block;
            margin: 0 auto;
        }
    }

    .categories,
    .icons {
        width: 25%;
        display: flex;
        justify-content: space-around;
    }

    .categories {
        justify-content: flex-start;
    }

    .icons {
        justify-content: flex-end;
    }

    ul {
        display: flex;
        flex-wrap: wrap;

        a {
            display: block;
            width: fit-content;
            padding: 5px 10px;

            &:hover {
                background-color: rgba(255, 255, 255, 0.212);
            }
        }
    }
}
</style>