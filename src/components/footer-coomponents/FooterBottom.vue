<script></script>

<template>
    <div class="row mt-100">
        <div class="col-6 copyright">
            © Copyright 2012-2020 | Avada Theme by ThemeFusion | All Rights Reserved | Powered by WordPress
        </div>
        <div class="col-6 text-end icons">
            <a href="#" class="mx-3"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
            <a href="#" class="mx-3"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
            <a href="#" class="mx-3"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
            <a href="#" class="mx-4"><font-awesome-icon :icon="['fab', 'pinterest-p']" /></a>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../../assets/scss/vars" as *;

.row {
    margin-bottom: 80px;
}

.copyright {
    font-size: 0.6rem;
    color: grey;
}

a {
    color: $primary;
}
</style>