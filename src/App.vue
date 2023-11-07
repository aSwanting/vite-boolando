<script>

import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';
import PageFooter from './components/PageFooter.vue';

export default {
  components: {
    PageHeader,
    PageMain,
    PageFooter,
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
  <PageMain></PageMain>
  <PageFooter></PageFooter>
</template>

<style lang="scss">
@use './styles/partials/reset';
@use './styles/general.scss';
</style>
