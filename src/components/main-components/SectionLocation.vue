<script>
import CardLocation from "./CardLocation.vue"
export default {
    components: { CardLocation }
}
</script>

<template>
    <section id="locations" class="mt-100">
        <div class="row ">
            <div class="col-12 text-center">
                <div class="name-section">LOCATIONS</div>
                <h2>Visit our Bakeries</h2>
                <div class="row mt-4">
                    <CardLocation>
                        <div class="card-location">
                            <figure class="m-0">
                                <img src="../../assets/images/new-york-bk-800x530.jpg" alt="location new york"
                                    class="img-fluid">
                            </figure>
                            <div class="card-body bg-light-blue pb-4">
                                <div class="row">
                                    <h3 class="col-12 mt-3">New York</h3>
                                    <div class="col-4">
                                        <div class="info">CALL US</div>
                                        <div class="number">1.800.458.556</div>
                                    </div>
                                    <div class="col-4">
                                        <div class="info">OPEN ALL WEEK</div>
                                        <div class="opening">9:00 AM - 6:00 PM</div>
                                    </div>
                                    <div class="col-4">
                                        <button type="button" class="btn btn-light main-btn">View Map</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardLocation>
                    <CardLocation>
                        <div class="card-location">
                            <figure class="m-0">
                                <img src="../../assets/images/london-bk-800x530.jpg" alt="location new york"
                                    class="img-fluid">
                            </figure>
                            <div class="card-body bg-cookie pb-4">
                                <div class="row">
                                    <h3 class="col-12 mt-3">London</h3>
                                    <div class="col-4">
                                        <div class="info">CALL US</div>
                                        <div class="number">1.800.458.556</div>
                                    </div>
                                    <div class="col-4">
                                        <div class="info">OPEN ALL WEEK</div>
                                        <div class="opening">9:00 AM - 6:00 PM</div>
                                    </div>
                                    <div class="col-4">
                                        <button type="button" class="btn btn-light main-btn">View Map</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardLocation>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped lang="scss">
@use "../../assets/scss/vars" as *;

h3 {
    color: $primary ;
    font-weight: 600;
}

.card-body {
    color: grey;
}

.bg-light-blue {
    background-color: #f1f9fb;
}

.bg-cookie {
    background-color: #faf3e3;
}
</style>