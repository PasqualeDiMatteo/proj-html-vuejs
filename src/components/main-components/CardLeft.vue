<script></script>
<template>
    <div class="col-6">
        <slot></slot>
    </div>
</template>
<style scoped lang="scss">
.col-6 {
    background-image: url("../../assets/images/bakery-process-2.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    object-fit: contain;
    padding: 60px;
    border-right: 15px solid white;
    margin: 30px 0;
}
</style>