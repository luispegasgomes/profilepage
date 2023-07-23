<template>
  <div id="collapse-7" v-show="getPageOpened === 'hobbies'">
    <b-card style="background-color: #586F7C">
      <collapseHeader :collapseName="collapseName" :headerName="headerName"/>
      <div>
        <div class="d-flex flex-column align-items-center justify-content-center mt-4">
          <div class="mt-2">
            <button class="mx-3 secondaryBtns" v-on:click="showCarFunc()" v-scroll-to="'#cars1'">
              <img src="../../assets/car.png" width="30" height="30" />
            </button>
            <button class="mx-3 secondaryBtns" v-on:click="showFootballFunc()">
              <img src="../../assets/football.png" width="30" height="30" />
            </button>
          </div>
          <div class="
          d-flex
          flex-column
          align-items-center
          justify-content-center
          mt-3
        " id="cars1" v-if="showCar">
            <p class="col-8 mt-3 colorWhite" style="text-align: center">
              In addition to enjoying programming, one of my passions is also the
              automobile culture, I am a car enthusiast, I really like to drive and
              take good care of my car and I like when someone asks me to take a
              look at their car.
            </p>

            <div class="cars mt-3">
              <div class="
              d-flex
              flex-column
              align-items-center
              justify-content-center
              mt-3
            "></div>
              <!--CAR POST-->
              <div class="postBox mt-2 mx-3" v-for="(info, index) in getHobbies.slice().reverse()" :key="index">
                <p style="text-align: start" class="mx-3 mt-2 fontBarlow">
                  {{ info.title }}
                </p>
                <div class="
                d-flex
                flex-column
                align-items-center
                justify-content-center
                mt-2
              ">
                  <img :src="info.img" width="200" height="200" />
                </div>
                <p class="mt-2 mx-3 fontBarlow" style="text-align: end">
                  {{ info.date }}
                </p>
              </div>
              <!--CAR POST-->
            </div>
          </div>
        </div>
        <div id="soccer" v-if="showFootball">
          <div class="d-flex align-items-center justify-content-center mt-2">
            <h1 class="colorDarkBlue mt-3" style="font-size: 30px">Football</h1>
          </div>

          <div class="
          mt-4
          mx-2
          secondBack2
          fontBarlow
          colorDarkBlue
          d-flex
          flex-column
          align-items-start
          col-12
        ">
            <h1 style="font-size: 30px">2018-2019</h1>
            <hr class="col-5 mt-0 mb-1" style="height: 2px" />
            <div class="d-flex align-items-center mx-3">
              <img src="../../assets/gdr.png" width="50" height="50" />
              <p class="mt-3 mx-3">
                <span style="font-weight: bold">
                  Grupo Desportivo de Resende <br />
                </span>
                RIGHT BACK
              </p>
            </div>

            <h1 class="mt-4" style="font-size: 30px">2016-2017</h1>
            <hr class="col-5 mt-0 mb-1" style="height: 2px" />
            <div class="d-flex align-items-center mx-3">
              <img src="../../assets/fcf.png" width="50" height="50" />
              <p class="mt-3 mx-3">
                <span style="font-weight: bold">Futebol Clube de Frende <br />
                </span>
                RIGHT BACK
              </p>
            </div>
          </div>
        </div>
      </div>
      <scrollToTop :collapseName="collapseName" />
    </b-card>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import scrollToTop from "../parts/scroll-to-top.vue";
import collapseHeader from "../parts/collapse-header.vue"

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
  background-color: white;
  width: 360px;
  height: 285px;
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
