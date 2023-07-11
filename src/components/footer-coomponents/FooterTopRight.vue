<script>
import BaseSearch from "../BaseSearch.vue"
export default {
    components: { BaseSearch }
}
</script>

<template>
    <div class="col-5 text-end">
        <h2>Subscribe to our Newsletter</h2>
        <BaseSearch :placeholder="`Enter email address*`" :buttonText="`Subscribe`" class="mt-4" />
    </div>
</template>

<style scoped lang="scss"></style>