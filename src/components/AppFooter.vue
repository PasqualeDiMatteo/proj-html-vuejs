<script>
import FooterTop from "./footer-coomponents/FooterTop.vue"
import FooterBottom from "./footer-coomponents/FooterBottom.vue"



export default {
    components: { FooterTop, FooterBottom },
    props: { navbarLists: Object }
}
</script>

<template>
    <footer class="mt-100">
        <div class="container">
            <FooterTop :navbarLists="navbarLists" />
            <FooterBottom />
        </div>
    </footer>
</template>

<style></style>