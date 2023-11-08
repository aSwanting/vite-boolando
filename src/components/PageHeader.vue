<script>
export default {
    data() {
        return {

            headerCategories: [
                {
                    name: "Donna",
                    url: "#",
                },
                {
                    name: "Uomo",
                    url: "#",
                },
                {
                    name: "Bambini",
                    url: "#",
                },
            ],

            headerIcons: [
                {
                    path: "img/user.svg",
                    url: "#",
                },
                {
                    path: "img/basket.svg",
                    url: "#",
                },
                {
                    path: "img/heart.svg",
                    url: "#",
                },
            ]
        }
    },
    methods: {

    }
}
</script>

<template>
    <header class="page-header">
        <div class="container">
            <nav class="row">

                <div class="col categories">
                    <ul>
                        <li v-for="category in headerCategories"><a :href="category.url">{{ category.name }}</a></li>

                    </ul>
                </div>

                <div class="col header-logo">
                    <a href="#"><img src="/img/boolean-logo.png" alt=""></a>
                </div>

                <div class="col icons">
                    <ul>
                        <li v-for="icon in  headerIcons "><a :href="icon.url"><img :src="icon.path"></a></li>
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
    font-size: 14px;
    font-weight: 600;
    background-color: $main-color;
    box-shadow: 0px 3px 5px rgb(0, 0, 0, 0.3);

    img {
        display: block;
    }

    .row {
        justify-content: space-between;
        align-items: center;
        padding-inline: 10px;
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
        width: 30%;
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
        gap: 15px;

        a {
            display: block;
            width: fit-content;

            &:hover {
                filter: brightness(0.9);
            }
        }
    }
}
</style>