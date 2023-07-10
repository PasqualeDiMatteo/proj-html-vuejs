<script>
export default {
    props: {
        navbarLists: Object
    }
}
</script>

<template>
    <nav class="d-flex">
        <ul class="navbar">
            <li v-for="item in navbarLists" class="nav-item mx-3 " :class="{ active: item.active }">
                <a href="#">{{ item.text }}</a>
            </li>
            <li class="nav-item">
                <a href="#">
                    <FontAwesomeIcon :icon="['fas', 'cart-shopping']" />
                </a>
            </li>
        </ul>
    </nav>
</template>

<style  lang="scss" scoped >
@use "../assets/scss/vars" as *;

nav {
    display: flex;
    align-items: center;
}

ul {
    margin: 0;
}

.active {
    border-bottom: 2px solid $primary;
}

a {
    font-size: 0.7rem;
    color: $primary;
}
</style>