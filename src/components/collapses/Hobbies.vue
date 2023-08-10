<template>
  <div id="collapse-hobbie" v-show="getPageOpened === 'hobbies'">
    <b-card style="background-color: #586F7C">
      <collapseHeader :collapseName="collapseName" :headerName="headerName" />
      <div>
        <div class="d-flex flex-column align-items-center justify-content-center mt-4">
          <div class="mt-2">
            <button class="mx-3 changeMenuBtn" v-on:click="showCarFunc()" :class="{ 'menuActive': showCar }">
              <img src="../../assets/icons/car.png" width="30" height="30" />
            </button>
            <button class="mx-3 changeMenuBtn">
              <img src="../../assets/icons/family.png" width="30" height="30" />
            </button>
            <button class="mx-3 changeMenuBtn" v-on:click="showFootballFunc()" :class="{ 'menuActive': showFootball }">
              <img src="../../assets/icons/football.png" width="30" height="30" />
            </button>
          </div>
        </div>
      </div>

      <transition name="fade" mode="out-in">
        <div class="fading-component" :key="showCar">
          <Cars v-if="showCar" />
        </div>
      </transition>
      <transition name="fade" mode="out-in">
        <div class="fading-component" :key="showFootball">
          <Football v-if="showFootball" />
        </div>
      </transition>
      <scrollToTop :collapseName="collapseName" />
    </b-card>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import scrollToTop from "../parts/scroll-to-top.vue";
import collapseHeader from "../parts/collapse-header.vue"
import Football from '../parts/hobbies/football.vue';
import Cars from "../parts/hobbies/cars.vue";
export default {
  name: "Hobbies",

  data() {
    return {
      collapseName: 'hobbies',
      headerName: 'Hobbies',
      showCar: true,
      showFootball: false,
    };
  },

  components: {
    scrollToTop,
    collapseHeader,
    Cars,
    Football,
  },

  computed: {
    ...mapGetters(["getPageOpened"]),
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
#collapse-hobbie {
  background-color: #586F7C;
}

.changeMenuBtn {
  border: none;
  border-radius: 100px;
  background-color: #95adb6;
  width: 60px;
  height: 60px;
}

.menuActive {
  border: 6px solid #102b3f;
  border-radius: 100px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
