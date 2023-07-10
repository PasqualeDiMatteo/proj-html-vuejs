<script>
import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"

export default {
  components: { AppHeader, AppMain },
  data() {
    return {
      navbarHeader: [
        {
          text: "HOME",
          active: true
        },
        {
          text: "SHOP",
          active: false
        },
        {
          text: "ABOUT",
          active: false
        },
        {
          text: "GALLERY",
          active: false
        },
        {
          text: "LOCATIONS",
          active: false
        },
        {
          text: "JOURNAL",
          active: false
        },
        {
          text: "CONTACT",
          active: false
        },
        {
          text: "MY ACCOUNT",
          active: false
        },
      ]
    }
  }
}
</script>

<template>
  <AppHeader :navbarLists="navbarHeader" />
  <AppMain />
</template>

<style lang="scss">
@use"./assets/scss/style.scss"
</style>