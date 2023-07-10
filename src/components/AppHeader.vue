<script>
import AppLogo from "./AppLogo.vue"
import AppNavbar from "./AppNavbar.vue"
import MainJumbotron from "./header-components/MainJumbotron.vue"
export default {
    components: { AppLogo, AppNavbar, MainJumbotron },
    props: { navbarLists: Object }
}
</script>

<template>
    <header>
        <section>
            <AppLogo />
            <AppNavbar :navbarLists="navbarLists" />
        </section>
        <MainJumbotron />
    </header>
</template>

<style scoped lang="scss">
section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
}

header {
    background-image: url("../assets/images/hero-header-bakery.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
}
</style>