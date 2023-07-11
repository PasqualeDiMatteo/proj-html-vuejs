<script></script>

<template>
    <div class="col-12">
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
.col-12 {
    min-height: 490px;
    background-size: contain;
    background-repeat: no-repeat;
    padding: 50px;
    filter: brightness(0.8);
}
</style>