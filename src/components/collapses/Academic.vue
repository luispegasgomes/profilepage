<template>
  <div id="collapse-3" v-show="getPageOpened === 'academic'">
    <b-card style="background-color: #586F7C">
      <div class="d-flex align-items-center justify-content-center mt-2">
        <button class="mx-3 secondaryBtns" v-on:click="openPage('academic')">
          <img src="../../assets/university.png" width="30" height="30" />
        </button>
        <h1 class="colorWhite" style="font-size: 30px">Academic</h1>
      </div>

      <div class="
            mt-4
            mx-2
            fontBarlow
            colorDarkBlue
            d-flex
            flex-column
            align-items-start
          " v-for="(info, index) in getAcademics.slice().reverse()" :key="index">
        <h1 style="font-size: 30px">{{ info.date }}</h1>
        <hr class="col-5 mt-0 mb-1" style="height: 2px" />
        <div class="d-flex align-items-center mx-3">
          <img :src="info.logo" width="50" height="50" />
          <p class="mt-3 mx-3">
            <span style="font-weight: bold"> {{ info.title }} <br /> </span>
            <span class="colorWhite"> {{ info.subtitle }} <br /> </span>
          </p>
        </div>
      </div>
      <scrollToTop :collapseName="collapseName" />
    </b-card>
  </div>
</template>


<script>
import { mapGetters, mapMutations } from "vuex";
import scrollToTop from "../parts/scroll-to-top.vue";
export default {
  name: "Academic",
  data() {
    return {
      collapseName: 'academic'
    };
  },

  computed: {
    ...mapGetters(["getAcademics", "getPageOpened"]),
  },

  components: {
    scrollToTop,
  },
  methods: {
    openPage(value) {
      this.CHANGE_PAGE_OPEN(value);
    },
    ...mapMutations(["CHANGE_PAGE_OPEN"]),
  },
};
</script>

<style scoped>
.btnBeige {
  border: none;
  border-radius: 11px;
  color: white;
  height: 50px;
  width: 50px;
}

.mainBtns {
  border: none;
  border-radius: 100px;
  background-color: #102b3f;
  width: 60px;
  height: 60px;
}

.mainBtns:hover {
  background-color: #DBC7BE;
}

.txt:hover {
  transform: scale(1.4);
  transition: all 0.5s;
}

.secondaryBtns {
  border: none;
  border-radius: 100px;
  background-color: #102b3f;
  width: 60px;
  height: 60px;
}

.text {
  font-size: 25px;
  text-align: center;
}

.animate-charcter:hover {
  background-image: linear-gradient(-225deg,
      #dbc7be 0%,
      #ffffff 29%,
      #102b3f 67%,
      #102b3f 100%);
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
  font-size: 190px;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}

.rotateRim {
  animation: rotation 2s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
}

@keyframes wiggle {
  2% {
    -webkit-transform: translateY(-3px);
    transform: translateY(-3px);
  }

  4% {
    -webkit-transform: translateY(3px);
    transform: translateY(3px);
  }

  6% {
    -webkit-transform: translateY(-3px);
    transform: translateY(-3px);
  }

  8% {
    -webkit-transform: translateY(3px);
    transform: translateY(3px);
  }

  10% {
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
  }

  12% {
    -webkit-transform: translateY(2px);
    transform: translateY(2px);
  }

  14% {
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
  }

  16% {
    -webkit-transform: translateY(2px);
    transform: translateY(2px);
  }

  18% {
    -webkit-transform: translateY(-1px);
    transform: translateY(-1px);
  }

  20% {
    -webkit-transform: translateY(1px);
    transform: translateY(1px);
  }
}

.hireme {
  animation: wiggle 2.7s infinite;
}

.hireme:hover {
  animation: none;
  background-color: #dbc7be;
}

.backtotop {
  border: none;
  border-radius: 11px;
  background-color: #586F7C;
  animation: wiggle 1.2s infinite;
}</style>
