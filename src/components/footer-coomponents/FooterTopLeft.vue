<script>
import AppLogo from "../AppLogo.vue"
import AppNavbar from "../AppNavbar.vue"

export default {
    data() {
        return {
            itemsInCart: 0
        }
    },
    props: { navbarLists: Object },
    components: { AppLogo, AppNavbar },
}
</script>

<template>
    <div class="col-6">
        <AppLogo />
        <AppNavbar :navbarLists="navbarLists" :itemsCart="itemsInCart" class="text-start" />
    </div>
</template>
<style></style>