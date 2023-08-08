<template>
  <div id="collapse-hobbie" v-show="getPageOpened === 'hobbies'">
    <b-card style="background-color: #586F7C">
      <collapseHeader :collapseName="collapseName" :headerName="headerName" />
      <div>
        <div class="d-flex flex-column align-items-center justify-content-center mt-4">
          <div class="mt-2">
            <button class="mx-3 secondaryBtns" v-on:click="showCarFunc()" v-scroll-to="'#cars1'">
              <img src="../../assets/icons/car.png" width="30" height="30" />
            </button>
            <button class="mx-3 secondaryBtns" >
              <img src="../../assets/icons/family.png" width="30" height="30" />
            </button>
            <button class="mx-3 secondaryBtns" v-on:click="showFootballFunc()">
              <img src="../../assets/icons/football.png" width="30" height="30" />
            </button>
          </div>
          <div class="
          d-flex
          flex-column
          align-items-center
          justify-content-center
          mt-3
        " id="cars1" v-if="showCar">
            <span class="col-10 col-xl-6 mt-3 colorWhite" style="text-align: center">
              In addition to enjoying programming, one of my passions is also the
              automobile culture, I am a car enthusiast, I really like to drive and
              take good care of my car and I like when someone asks me to take a
              look at their car.
            </span>

            <div class="cars mt-2">
              <!--CAR POST-->
              <div class="postBox m-3 mt-3 col-10" v-for="(info, index) in getHobbies.slice().reverse()" :key="index">
                <div class="d-flex align-items-center m-2">
                  <img src="../../assets/icons/location.png" width="20" height="20">
                  <span class="fontBarlow" style="margin-left: 0.2rem; font-size: 15px;">{{ info.title }}</span>
                </div>

                <div class="
                d-flex
                flex-column
                align-items-center
                justify-content-center
                mt-2
              ">
                  <img :src="info.img" width="285" height="214" style="border: solid 2px #102b3f;" />
                </div>
                <span class="mt-1 fontBarlow" style="float: right; margin-right: 30px;">
                  {{ info.date }}
                </span>
              </div>
              <!--CAR POST-->
            </div>
          </div>
        </div>
      </div>
      <Football v-if="showFootball"/>
      <scrollToTop :collapseName="collapseName" />
    </b-card>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import scrollToTop from "../parts/scroll-to-top.vue";
import collapseHeader from "../parts/collapse-header.vue"
import Football from '../parts/hobbies/football.vue';
export default {
  name: "Hobbies",

  data() {
    return {
      showCar: true,
      showFootball: false,
      collapseName: 'hobbies',
      headerName: 'Hobbies'
    };
  },

  components: {
    scrollToTop,
    collapseHeader,
    Football,
  },

  computed: {
    ...mapGetters(["getHobbies", "getPageOpened"]),
  },

  methods: {
    showCarFunc() {
      this.showFootball = false;
      this.showCar = true;
    },
    showFootballFunc() {
      this.showCar = false;
      this.showFootball = true;
    },
    openPage(value) {
      this.CHANGE_PAGE_OPEN(value);
    },
    ...mapMutations(["CHANGE_PAGE_OPEN"]),
  },
};
</script>

<style scoped>

#collapse-hobbie{
  background-color: #586F7C;
}
.secondaryBtns {
  border: none;
  border-radius: 100px;
  background-color: #95adb6;
  width: 60px;
  height: 60px;
}

.secondaryBtns:hover {
  border: 6px solid #102b3f;
  border-radius: 100px;
  width: 60px;
  height: 60px;
}

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

.secondaryBtns {
  border: none;
  border-radius: 100px;
  background-color: #102b3f;
  width: 60px;
  height: 60px;
}
</style>
