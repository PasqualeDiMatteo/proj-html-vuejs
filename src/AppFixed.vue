<script></script>

<template>
    <div class="fixed-promo">
        <div class="card-fix bg-white">
            <figure>
                <img src="./assets/images/demos.svg" alt="Demos">
            </figure>
            <h6>Demos</h6>
        </div>
        <div class="card-fix bg-white mt-2">
            <div class="sale">
                <span class="dollar">$</span>
                <span class="price">39</span>
            </div>
            <h6>On Sale</h6>
        </div>
    </div>
    <div class="fixed-go-top">
        <div class="card-fix back-bg mt-2">
            <a href="#"><font-awesome-icon :icon="['fas', 'angle-up']" /></a>
        </div>
    </div>
</template>

<style scoped lang="scss">
.fixed-promo {
    position: fixed;
    top: 20%;
    right: 10px;
}

.fixed-go-top {
    position: fixed;
    bottom: 3%;
    right: 10px;
}

figure {
    margin-bottom: 5px;
}

.card-fix {
    text-align: center;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 5px 5px 10px;
}

.back-bg {
    background-color: rgba($color: #000000, $alpha: 0.6);

    a {
        color: white;
    }

}



h6 {
    font-size: 0.7rem;
    font-weight: 600;
}


.sale {
    color: green;
    display: flex;
    justify-content: center;
    font-weight: 600;
}

.dollar {
    font-size: 0.7rem;

}
</style>