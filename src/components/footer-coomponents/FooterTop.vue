<script>
import FooterTopLeft from "./FooterTopLeft.vue"
import FooterTopRight from "./FooterTopRight.vue"


export default {
    components: { FooterTopLeft, FooterTopRight },
    props: { navbarLists: Object }
}
</script>
<template>
    <div class="row justify-content-between">
        <FooterTopLeft :navbarLists="navbarLists" />
        <FooterTopRight />
    </div>
</template>
<style></style>
