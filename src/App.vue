<script>
import AppHeader from "./components/AppHeader.vue"
export default {
  components: { AppHeader },
  data() {
    return {
      navbarHeader: {
        home: "HOME",
        shop: "SHOP",
        about: "ABOUT",
        gallery: "GALLERY",
        locations: "LOCATIONS",
        journal: "JOURNAL",
        contact: "CONTACT",
        account: "MY ACCOUNT",
        orders: "fas, cart-shopping"
      }
    }
  }
}
</script>

<template>
  <AppHeader />
</template>

<style lang="scss">
@use"./assets/scss/style.scss"
</style>