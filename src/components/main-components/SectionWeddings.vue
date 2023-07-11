<script>
import CardText from "../main-components/CardText.vue"
import CardWedding from "../main-components/CardWedding.vue"

export default {
    components: { CardText, CardWedding }
}
</script>

<template>
    <CardText>
        <div class="col-12 text-center mt-100">
            <div class="name-section">CORPORATE & WEDDING</div>
            <h2>Baking Special Moments</h2>
        </div>
    </CardText>
    <figure class="row ">
        <CardWedding>
            <img src="../../assets/images/corporate-bg.jpg" alt="Corporate" class="img-fluid">
        </CardWedding>
        <CardWedding>
            <img src="../../assets/images/wedding-bg.jpg" alt="Corporate" class="img-fluid">
        </CardWedding>
    </figure>
</template>

<style scoped lang="scss">
@use "../../assets/scss/vars" as *;

h2 {
    color: $primary;
    font-weight: 800;
    font-size: 1.3rem;
    line-height: 30px;
}

.row {
    margin-top: 50px;
}
</style>