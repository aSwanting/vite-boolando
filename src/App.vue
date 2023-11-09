<script>

import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';
import PageFooter from './components/PageFooter.vue';
import axios from 'axios';
import store from "./store.js";

export default {
  components: {
    PageHeader,
    PageMain,
    PageFooter,
  },
  data() {
    return {
      message: "It's Alive!",
      store,
    }
  },
  mounted() {
    axios.get(this.store.productsUrl).then(response => {
      this.store.products = response.data
    })
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
