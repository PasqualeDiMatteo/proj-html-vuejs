<script>
import FooterTop from "./footer-coomponents/FooterTop.vue"

export default {
    components: { FooterTop },
    props: { navbarLists: Object }
}
</script>

<template>
    <div class="container">
        <FooterTop :navbarLists="navbarLists" />
    </div>
</template>

<style></style>