<script>
export default {
    props: {
        navbarLists: Object,
        itemsCart: Number
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
                    <FontAwesomeIcon :icon="['fas', 'cart-shopping']" /><span v-if="!itemsCart" class="pill ms-2">
                        {{ itemsCart }}
                    </span>
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

.pill {
    display: inline-flex;
    background-color: rgba($primary, 0.2);
    color: $primary;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;

}
</style>