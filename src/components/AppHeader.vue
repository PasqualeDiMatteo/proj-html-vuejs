<script>
import AppLogo from "./AppLogo.vue"
import AppNavbar from "./AppNavbar.vue"
export default {
    components: { AppLogo, AppNavbar },
    props: { navbarLists: Object }
}
</script>

<template>
    <header>
        <AppLogo />
        <AppNavbar :navbarLists="navbarLists" />
    </header>
</template>

<style scoped lang="scss">
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
}
</style>