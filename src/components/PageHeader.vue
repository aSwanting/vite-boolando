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

                <div class="col">
                    <ul>
                        <li><a href="#">Donna</a></li>
                        <li><a href="#">Uomo</a></li>
                        <li><a href="#">Bambini</a></li>
                    </ul>
                </div>

                <div class="col header-logo">
                    <img src="/img/boolean-logo.png" alt="">
                </div>

                <div class="col">
                    <ul>
                        <li><a href="#">Donna</a></li>
                        <li><a href="#">Uomo</a></li>
                        <li><a href="#">Bambini</a></li>
                    </ul>
                </div>

            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;


.page-header {
    padding: 10px;
    color: white;
    font-size: 13px;
    font-weight: bold;
    background-color: $main-color;
    box-shadow: 0px 3px 5px rgb(0, 0, 0, 0.3);

    .row {
        justify-content: center;
        align-items: center;
    }

    .header-logo {
        flex-grow: 1;

        img {
            max-width: 124px;
            display: block;
            margin: 0 auto;
        }
    }

    ul {
        display: flex;
        gap: 10px;
    }

    a {
        background-color: rgb(64, 95, 67);
    }
}
</style>