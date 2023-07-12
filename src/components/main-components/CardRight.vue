<script></script>
<template>
    <div class="col-6">
        <slot></slot>
    </div>
</template>
<style scoped lang="scss">
.col-6 {
    background-image: linear-gradient(324deg, #f0edf5, 100%, #55328B 100%);
    background-size: cover;
    background-repeat: no-repeat;
    object-fit: contain;
    padding: 60px;
    border-left: 15px solid white;
    margin: 30px 0;
}
</style>