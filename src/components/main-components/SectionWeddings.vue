<script>
import CardText from "../main-components/CardText.vue"
export default {
    components: { CardText }
}
</script>

<template>
    <CardText>
        <div class="col-12 text-center">
            <div class="name-section">CORPORATE & WEDDING</div>
            <h2>Baking Special Moments</h2>
        </div>
    </CardText>
</template>

<style scoped lang="scss">
@use "../../assets/scss/vars" as *;

.col-12 {
    margin-top: 100px;
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
</style>