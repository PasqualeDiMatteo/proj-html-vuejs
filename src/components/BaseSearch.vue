<script>
export default {
    props: {
        placeholder: String,
        buttonText: String
    }
}
</script>
<template>
    <form class="row">
        <div class="col-9">
            <input type="email" class="form-control h-100" :placeholder="placeholder || `Cerca...`">
        </div>
        <div class="col-3">
            <button type="submit" class="btn secondary-btn">{{ buttonText || `Cerca` }}</button>
        </div>
    </form>
</template>
<style></style>