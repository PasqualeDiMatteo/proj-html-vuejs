<script>
import SectionProducts from "./main-components/SectionProducts.vue"
import SectionWedding from "./main-components/SectionWeddings.vue"

export default {
    components: {
        SectionProducts, SectionWedding
    }
}
</script>
<template>
    <div class="container ">
        <SectionProducts />
        <SectionWedding />
    </div>
</template>
<style scoped lang="scss">
.container {
    margin-top: 100px;
}
</style>