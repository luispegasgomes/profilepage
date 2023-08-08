<template>
    <div class="row justify-content-center">
        <div class="footballBox m-4 d-flex flex-column bgBlue" v-for="(object, index) in getFootball" :key="index">
            <div class="d-flex mb-3 mt-3 mx-1">
                <img :src="object.logo" height="50">
                <div class="d-flex flex-column mx-2">
                    <span style="font-size: 18px; font-weight: bold;" class="fontAsap">{{object.club}}</span>
                    <span style="font-size: 15px;" class="fontBarlow">{{object.position}}</span>
                </div>
            </div>
            <div class="d-flex flex-column align-items-center">
                <img :src="object.img" width="300" style="border: solid 2px #102b3f;">
                <span class="m-1 fontAsap colorDarkBlue">Season {{object.season}}</span>
            </div>
        </div>
    </div>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  name: "Football",

  computed: {
    ...mapGetters(["getFootball"]),
  },


};
</script>

<style scoped>
.footballBox {
    border: solid 6px #123456;
    width: 350px;
    height: 350px;
}
</style>