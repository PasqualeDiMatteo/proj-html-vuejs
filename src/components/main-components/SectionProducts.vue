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
                    <button type="button" class="btn btn-light mt-5">Explore our products</button>
                </div>
            </CardText>
            <CardProduction>
                <div class="my-card">
                    <img src="../../assets/images/choco-chip-cookies-400x510.jpg" alt="cookies" class="img-fluid">
                    <div class="angle-left angle">&langle;</div>
                </div>
            </CardProduction>
            <CardProduction>
                <div class="my-card">
                    <img src="../../assets/images/strawberry-jam-cookies-400x510.jpg" alt="cookies" class="img-fluid">
                    <div class="angle-right angle">&rangle;</div>
                </div>
            </CardProduction>
        </div>
    </section>
</template>
<style scoped lang="scss">
@use "../../assets/scss/vars" as *;

.my-card {
    position: relative;
}

.name-section {
    font-size: 0.8rem;
    color: grey;
}

h2 {
    color: $primary;
    font-weight: 800;
    font-size: 1.3rem;
    line-height: 30px;
}

p {
    color: grey;
}

button {
    font-size: 0.8rem;
    background-color: $primary;
    color: white;
    padding: 10px 20px;
}

.angle {
    position: absolute;
    top: 50%;
    background-color: $primary;
    padding: 25px 15px;
    opacity: 0.7;
    color: white;
    transform: translateY(-50%);
    cursor: pointer;
}


.angle-right {
    right: 0;
    translate: -50%;
}

.angle-left {
    left: 0;
}
</style>