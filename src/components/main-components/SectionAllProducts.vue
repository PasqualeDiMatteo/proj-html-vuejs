<script>
import CardText from "./CardText.vue"
import CardAllProducts from "./CardText.vue"

export default {
    components: { CardText, CardAllProducts }
}
</script>

<template>
    <div class="row mt-100">
        <div class="col-3 d-flex justify-content-center align-items-center text-center">
            <CardText>
                <div class="my-card">
                    <h2>Find a freshly baked product perfect for you</h2>
                    <p>Integer a nibh vitae ex portitor rutrum et ut velit. Eitiam ac felis at leo feugiat placerat. Sed ac
                        nulla id orci tempor convallis sed.
                    </p>
                    <button type="button" class="btn secondary-btn mt-2">Shop All Products</button>
                </div>
            </CardText>
        </div>
        <div class="col-9">
            <div class="row">
                <CardAllProducts>
                    <div class="col-3">
                        <figure>
                            <img src="../../assets/images/choco-chip-cookies-400x510.jpg" alt="cookies" class="img-fluid">
                            <div class="angle-left angle">&langle;</div>
                        </figure>
                        <h5>Choco Chip Cookies</h5>
                        <h6>$19.00 - $39.00</h6>
                    </div>
                </CardAllProducts>
                <CardAllProducts>
                    <div class="col-3">
                        <figure>
                            <img src="../../assets/images/strawberry-jam-cookies-400x510.jpg" alt="cookies"
                                class="img-fluid">
                        </figure>
                        <h5>Strawberry Jam Cookies</h5>
                        <h6>$24.00 - $62.00</h6>
                    </div>
                </CardAllProducts>
                <CardAllProducts>
                    <div class="col-3">
                        <figure>
                            <img src="../../assets/images/strawberry-donut-400x510.jpg" alt="cookies"
                                class="img-fluid h-100">
                        </figure>
                        <h5>Strawberry Donut</h5>
                        <h6>$24.00 - $42.00</h6>
                    </div>
                </CardAllProducts>
                <CardAllProducts>
                    <div class="col-3">
                        <figure>
                            <img src="../../assets/images/perfect-macarons-400x510.jpg" alt="cookies"
                                class="img-fluid h-100">
                            <div class="angle-right angle">&rangle;</div>
                        </figure>
                        <h5>Perfect Macarons</h5>
                        <h6>$18.00 - $52.00</h6>
                    </div>
                </CardAllProducts>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../../assets/scss/vars" as *;

figure {
    position: relative;
}

h2 {
    color: $primary;
    font-weight: 800;
    font-size: 1.3rem;
    line-height: 30px;
}

h5,
h6 {
    color: $primary;
    text-align: center;
}

p {
    color: grey;
}
</style>