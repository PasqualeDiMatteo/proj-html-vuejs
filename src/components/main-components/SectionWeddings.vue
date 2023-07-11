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
        <CardWedding class="my-card">
            <img src="../../assets/images/corporate-bg.jpg" alt="Corporate" class="img-fluid img-start">
            <img src="../../assets/images/corporate-hover-bg.jpg" alt="Corporate" class="img-fluid img-hover ">
            <div class="on-hover">
                <div class="name-section">INTERNATIONAL BAKERY</div>
                <h3 class="mt-3">Corporate Events</h3>
                <button type="button " class="btn secondary-btn mt-3">Explore more</button>
            </div>
        </CardWedding>
        <CardWedding class="my-card">
            <img src="../../assets/images/wedding-bg.jpg" alt="Corporate" class="img-fluid img-start">
            <img src="../../assets/images/wedding-hover-bg.jpg" alt="Corporate" class="img-fluid img-hover ">
            <div class="on-hover">
                <div class="name-section">PRIVATE DINING HALL</div>
                <h3 class="mt-3">Weddings & Parties</h3>
                <button type="button " class="btn secondary-btn mt-3">Explore more</button>
            </div>
        </CardWedding>
    </figure>
</template>

<style scoped lang="scss">
@use "../../assets/scss/vars" as *;

.row {
    margin-top: 50px;
}

.img-hover {
    display: none;
}

.my-card {

    &:hover .img-start {
        display: none;
    }

    &:hover .img-hover {
        display: block;
    }

    &:hover .on-hover {
        display: block;
    }
}

h3 {
    font-size: 30px;
}
</style>