<template>
    <div class="d-flex flex-column align-items-center justify-content-center mt-3">
        <span class="col-10 col-xl-6 mt-3 colorWhite" style="text-align: center">
            In addition to enjoying programming, one of my passions is also the
            automobile culture, I am a car enthusiast, I really like to drive and
            take good care of my car and I like when someone asks me to take a
            look at their car.
        </span>
        <div class="cars mt-2">
            <div class="postBox m-3 mt-3 col-10" v-for="(info, index) in getHobbiesCar" :key="index">
                <div class="d-flex align-items-center m-2">
                    <img src="../../../assets/icons/location.png" width="20" height="20">
                    <span class="fontBarlow" style="margin-left: 0.2rem; font-size: 15px;">{{ info.title }}</span>
                </div>
                <div class="d-flex flex-column align-items-center justify-content-center mt-2">
                    <img :src="info.img" width="285" height="214" style="border: solid 2px #102b3f;" />
                </div>
                <span class="mt-1 fontBarlow" style="float: right; margin-right: 30px;">
                    {{ info.date }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "Hobbies-Car",

    data() {
        return {
        };
    },

    components: {
    },

    computed: {
        ...mapGetters(["getHobbiesCar"]),
    },

    methods: {
    },
};
</script>

<style scoped>
.postBox {
    border: solid 6px #102b3f;
    background-color: #95ADB6;
    width: 360px;
    height: 295px;
    font-weight: bold;
}

.cars {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 80%;
}
</style>
