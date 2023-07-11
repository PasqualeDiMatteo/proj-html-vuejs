<script>
import CardText from "../main-components/CardText.vue"
import CardProduction from "./CardProducts.vue"

export default {
    components: { CardText, CardProduction }
}
</script>
<template>
    <section id="products">
        <div class="row ">
            <CardText>
                <div class="col-4">
                    <div class="name-section">OUR PRODUCTS</div>
                    <h2>All our delectable pastries are backed fresh in our Kitchen very morning, and are made with
                        all-natural,
                        all
                        organic ingredients.</h2>
                    <button type="button " class="btn secondary-btn mt-5">Explore our products</button>
                </div>
            </CardText>
            <CardProduction>
                <div class="my-card">
                    <img src="../../assets/images/choco-chip-cookies-400x510.jpg" alt="cookies" class="img-fluid">
                    <div class="angle-left angle">&langle;</div>
                    <div class="on-hover">
                        <h3>Choco Chip Cookies</h3>
                        <div class="type">Cookies, Pastries</div>
                        <div class="price">$19.00 - $39.00</div>
                    </div>
                </div>

            </CardProduction>
            <CardProduction>
                <div class="my-card">
                    <img src="../../assets/images/strawberry-jam-cookies-400x510.jpg" alt="cookies" class="img-fluid">
                    <div class="angle-right angle">&rangle;</div>
                    <div class="on-hover">
                        <h3>Strawberry Jam Cookies</h3>
                        <div class="type">Cookies, Pastries</div>
                        <div class="price">$24.00 - $62.00</div>
                    </div>
                </div>
            </CardProduction>
        </div>
    </section>
</template>
<style scoped lang="scss">
@use "../../assets/scss/vars" as *;

.my-card {
    position: relative;

    &:hover .on-hover {
        display: block;
    }
}

img {
    width: 100%;
}

p {
    color: grey;
}

.on-hover {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    color: white;
    text-align: center;
    display: none;

    h3 {
        font-size: 18px;
    }

    .type {
        font-size: 10px;
    }

    .price {
        font-size: 20px;
    }
}
</style>