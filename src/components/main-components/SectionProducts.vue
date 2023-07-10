<script>
import CardText from "../main-components/CardText.vue"
export default {
    components: { CardText }
}
</script>
<template>
    <CardText>
        <div class="name-section">OUR PRODUCTS</div>
        <h2>All our delectable pastries are backed fresh in our Kitchen very morning, and are made with all-natural, all
            organic ingredients.</h2>
        <button type="button" class="btn btn-light mt-5">Explore our products</button>
    </CardText>
</template>
<style scoped lang="scss">
@use "../../assets/scss/vars" as *;

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
</style>