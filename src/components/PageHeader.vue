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
            <div class="row space-between items-center">

                <div class="col nav-menu">
                    <ul class="row">
                        <li><a href="#">Donna</a></li>
                        <li><a href="#">Uomo</a></li>
                        <li><a href="#">Bambini</a></li>
                    </ul>
                </div>

                <div class="col header-logo">
                    <a href=""><img src="./img/boolean-logo.png" alt=""></a>
                </div>

                <div class="col">
                    <div class="row header-icons">

                        <a href="#">
                            <svg class="user-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <circle class="cls-1" cx="16" cy="8" r="7" />
                                <path class="cls-1" d="M28,31A12,12,0,0,0,4,31Z" />
                            </svg>
                        </a>

                        <a href="#">
                            <svg class="fav-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 5.881C12.981 4.729 14.484 4 16.05 4C18.822 4 21 6.178 21 8.95C21 12.3492 17.945 15.1195 13.3164 19.3167L13.305 19.327L12 20.515L10.695 19.336L10.6595 19.3037C6.04437 15.1098 3 12.3433 3 8.95C3 6.178 5.178 4 7.95 4C9.516 4 11.019 4.729 12 5.881Z" />
                            </svg>
                        </a>

                        <a href="#">
                            <svg class="basket-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M23.734,28.125c1.104,0,2-0.896,2-2v-7.8c0-3.487,2.837-6.325,6.324-6.325c3.487,0,6.325,2.838,6.325,6.325v7.8   c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2v-7.8C42.384,12.632,37.752,8,32.058,8c-5.692,0-10.324,4.632-10.324,10.325v7.8   C21.734,27.229,22.63,28.125,23.734,28.125z" />
                                <path
                                    d="M55,23.631H44.384v2.494c0,2.206-1.794,4-4,4s-4-1.794-4-4v-2.494h-8.649v2.494c0,2.206-1.794,4-4,4s-4-1.794-4-4v-2.494H9   c-0.552,0-0.893,0.435-0.762,0.971l6.998,28.497C15.658,54.701,17.344,56,19,56h26c1.658,0,3.342-1.299,3.766-2.901l6.996-28.497   C55.893,24.065,55.553,23.631,55,23.631z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.page-header {
    padding-block: 18px;
    color: white;
    font-size: 13px;
    font-weight: bold;
    background-color: $main-color;
    box-shadow: 0px 3px 5px rgb(0, 0, 0, 0.3);
    position: sticky;
    top: 0;
    left: 0;
    z-index: 9999;
}

.page-header ul {
    gap: 10px;
}

.header-logo {
    width: 124px;
}

.header-icons {
    gap: 5px;
}

.header-icons a {
    display: contents;
}

.user-icon,
.fav-icon {
    fill: none;
    stroke: white;
}

.user-icon {
    width: 16px;
    stroke-width: 3px;
}

.fav-icon {
    width: 19px;
    stroke-width: 2px;
}

.basket-icon {
    width: 21px;
    fill: white;
}
</style>