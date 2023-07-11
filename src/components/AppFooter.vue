<script>
import FooterTop from "./footer-coomponents/FooterTop.vue"

export default {
    components: { FooterTop },
    props: { navbarLists: Object }
}
</script>

<template>
    <footer class="mt-100">
        <div class="container">
            <FooterTop :navbarLists="navbarLists" />
        </div>
    </footer>
</template>

<style></style>