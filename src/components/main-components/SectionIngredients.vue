<script>
import FullCard from "./FullCard.vue"

export default {
    components: { FullCard }
}
</script>
<template>
    <section id="ingredients" class="mt-100">
        <div class="row ">
            <FullCard>
                <div class="row">
                    <div class="col-6">
                        <h3>Tell us ehat you have in mind</h3>
                    </div>
                    <div class="col-6">
                        <div class="number">01</div>
                    </div>
                </div>
                <div class="row mt-100 justify-content-end align-items-end">
                    <div class="col-6">
                        <div class="name-section">MANUAL INGREDIENTS SECTION</div>
                        <p>Cras consequat lectus vestibulum tortor pulvinar, quis euismod nisl varius. Ut eu laoreet ex.
                            Aliquam
                            erat volutpat. Nullam quis sagittis nibh. Morbi consectetur ultricies ante ac congue. Donec
                            lorem
                            erat, finibus in velit placerat, rutrum angue.
                        </p>
                    </div>
                </div>
            </FullCard>
        </div>
    </section>
</template>
<style scoped lang="scss">
#ingredients {
    color: white;
    position: relative;
    width: 100%;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.1);
    }
}


h3 {
    font-size: 3rem;
}

p {
    font-size: 1.3rem;
}

.number {
    font-size: 4rem;
    text-align: end;
}
</style>