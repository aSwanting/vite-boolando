<script>
export default {
    data() {
        return {
            title: "Boolando Footer"
        }
    }
}
</script>

<template>
    <footer class="page-footer"></footer>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.page-footer {
    background-color: $dark-color;
    padding: 20px;
}
</style>