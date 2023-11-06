<script>

import PageHeader from './components/PageHeader.vue';

export default {
  components: {
    PageHeader,
  },
  data() {
    return {
      message: "It's Alive!"
    }
  }
}
</script>

<template>
  <PageHeader></PageHeader>
</template>

<style lang="scss">
@use './styles/partials/reset';
@use './styles/general.scss';
</style>
