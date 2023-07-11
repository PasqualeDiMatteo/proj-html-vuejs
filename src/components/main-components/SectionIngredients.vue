<script>
import FullCard from "./FullCard.vue"
import CardLeft from "./CardLeft.vue"
import CardRight from "./CardRight.vue"


export default {
    components: { FullCard, CardLeft, CardRight }
}
</script>
<template>
    <section id="ingredients" class="mt-100">
        <div class="row gy-1">
            <FullCard>
                <div class="row">
                    <div class="col-6">
                        <h3>Tell us what you have in mind</h3>
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
            <CardLeft>
                <div class="row">
                    <div class="col-8">
                        <h3>We Start Baking</h3>
                    </div>
                    <div class="col-4">
                        <div class="number">02</div>
                    </div>
                </div>
                <div class="row align-items-end ">
                    <div class="col-7 mt-5">
                        <div class="name-section">SWEET & DELICIOUS</div>
                        <p class="fs-5">Cras consequat lectus vestibulum tortor pulvinar, quis euismod nisl varius. Ut eu
                            laoreet ex.
                            Aliquam
                            erat volutpat. Nullam quis sagittis nibh. Morbi consectetur ultricies ante ac congue. Donec
                            lorem
                            erat, finibus in velit placerat,
                        </p>
                    </div>
                </div>
            </CardLeft>
            <CardRight>
                <div class="row align-items-end ">
                    <div class="col-12 mt-5">
                        <div class="name-section">DON'T JUST TAKE OUR WORD FOR IT</div>
                        <h4 class="my-3">"Finally found an alternative to the mass produced products. Something that
                            incorporates real organic ingredients, nutrient dense wellness while promothing sustainability
                            and activity."
                        </h4>
                        <div class="author">Rachel Cooper, Founder</div>
                    </div>
                </div>
            </CardRight>
        </div>
    </section>
</template>
<style scoped lang="scss">
@use "../../assets/scss/vars" as *;

#ingredients {
    color: white;
    width: 100%;
}

h4 {
    color: $primary;
    font-size: 2rem;
    line-height: 45px;
    font-weight: 600;
}

.author {
    color: $grey;
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