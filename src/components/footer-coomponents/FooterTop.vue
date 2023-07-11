<script>
import FooterTopLeft from "./FooterTopLeft.vue"

export default {
    components: { FooterTopLeft },
    props: { navbarLists: Object }
}
</script>
<template>
    <div class="row">
        <FooterTopLeft :navbarLists="navbarLists" />
    </div>
</template>
<style></style>
