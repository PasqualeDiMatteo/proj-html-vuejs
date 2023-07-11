<script>
import SectionProducts from "./main-components/SectionProducts.vue"
import SectionWedding from "./main-components/SectionWeddings.vue"
import SectionAllProducts from "./main-components/SectionAllProducts.vue"



export default {
    components: {
        SectionProducts, SectionWedding, SectionAllProducts
    }
}
</script>
<template>
    <div class="container mt-100">
        <SectionProducts />
        <SectionWedding />
        <SectionAllProducts />
    </div>
</template>
<style scoped lang="scss"></style>