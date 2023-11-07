<script>

import PageHeader from './components/PageHeader.vue';
import PageFooter from './components/PageFooter.vue';

export default {
  components: {
    PageHeader,
    PageFooter
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
  <PageFooter></PageFooter>
</template>

<style lang="scss">
@use './styles/partials/reset';
@use './styles/general.scss';
</style>
