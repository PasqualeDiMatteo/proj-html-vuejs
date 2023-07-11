<script>
import SectionProducts from "./main-components/SectionProducts.vue"
import SectionWedding from "./main-components/SectionWeddings.vue"
import SectionAllProducts from "./main-components/SectionAllProducts.vue"
import SectionIngredients from "./main-components/SectionIngredients.vue"
import SectionLocation from "./main-components/SectionLocation.vue"




export default {
    components: {
        SectionProducts, SectionWedding, SectionAllProducts, SectionIngredients, SectionLocation
    }
}
</script>
<template>
    <div class="container mt-100">
        <SectionProducts />
        <SectionWedding />
        <SectionAllProducts />
        <SectionIngredients />
        <SectionLocation />
    </div>
</template>
<style scoped lang="scss"></style>