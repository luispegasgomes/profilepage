<template>
  <div class="bgBeige">
    <div class="home bgBlue d-flex flex-column align-items-center justify-content-center">
      <h1 class="fontAsap colorDarkBlue animate-charcter mt-4"
        style="font-weight: bold; font-size: 7vh; text-align: center; height: 12vh" id="luis">
        <span style="color: #faf9f6">I'm</span>
        Luís G<img class="rotateRim" src="../assets/wheel.png" width="32px" />mes
      </h1>
      <p class="fontBarlow colorDarkBlue" style="text-align: center; font-size: 3vh; height: 12vh">
        Software Developer<br />
        Intern at MOG Technologies
      </p>
      <img src="../assets/luisgomes.jpg" class="mt-4" style="border-radius: 50%; margin-bottom: 5vh" alt="Luis"
        width="220vh" height="220vh" />

      <div class="d-flex align-items-center justify-content-center mb-2" style="height: 14vh">
        <a href="https://github.com/luispegasgomes">
          <button class="mx-3 bgBeige btnBeige">
            <img src="../assets/github.png" width="30" />
          </button>
        </a>
        <a href="mailto:luispegasgomes@gmail.com">
          <button class="mx-3 bgDarkBlue btnBeige fontBarlow hireme" style="width: 150px">
            <img src="../assets/hiring.png" width="30" />
            <span class="mx-3 colorWhite">Hire me!</span>
          </button>
        </a>
        <a href="https://www.linkedin.com/in/lu%C3%ADs-gomes-969531207/">
          <button class="mx-3 bgBeige btnBeige">
            <img src="../assets/linkedin.png" width="30" />
          </button>
        </a>
      </div>

      <hr class="col-8 mt-4 bgBlack" style="height: 3px" />

      <!--BUTTONS THAT CONTROLS THE COLLAPSES-->
      <div class="col-sm-12 col-md-12 col-lg-10 col-xl-7 row align-items-center justify-content-center mb-5">
        <div class="col-sm-6 d-flex mt-4">
          <mainButton :collapseName="'about'" :headerName="'About Me'" :collapseNumber="'#collapse-about'"/>
          <mainButton :collapseName="'academic'" :headerName="'Academic'" :collapseNumber="'#collapse-academic'"/>
          <mainButton :collapseName="'project'" :headerName="'Projects'" :collapseNumber="'#collapse-project'"/>
        </div>
        <div class="col-sm-6 d-flex mt-4">
          <mainButton :collapseName="'skill'" :headerName="'Skills'" :collapseNumber="'#collapse-skill'"/>
          <mainButton :collapseName="'certificate'" :headerName="'Certificates'" :collapseNumber="'#collapse-certificate'"/>
          <mainButton :collapseName="'hobbies'" :headerName="'Hobbies'" :collapseNumber="'#collapse-hobbie'"/>
        </div>
      </div>
      <!--BUTTONS THAT CONTROLS THE COLLAPSES-->

    </div>

    <!-- Call all collapses -->

    <About />

    <Academic />

    <Projects />

    <Skills />

    <Certificate />

    <Hobbies />

  </div>
</template>

<script>
import About from '../components/collapses/About'
import Academic from "../components/collapses/Academic.vue"
import Projects from "../components/collapses/Projects.vue";
import Skills from "../components/collapses/Skills.vue";
import Certificate from "../components/collapses/Certificate.vue";
import Hobbies from "../components/collapses/Hobbies.vue";

import mainButton from '../components/parts/main-button.vue';

import { getIcon } from '../helpers/getImgSrc.js';
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Home",

  computed: {

    ...mapGetters(["getPageOpened"]),
  },

  components: {
    About,
    Academic,
    Projects,
    Skills,
    Certificate,
    Hobbies,
    mainButton,
  },

  methods: {
    openPage(value) {
      this.CHANGE_PAGE_OPEN(value);
    },
    getIconPath(value) {
      return getIcon(value);
    },
    ...mapMutations(["CHANGE_PAGE_OPEN"]),
  },
};
</script>

<style scoped>
.home {
  height: 100vh;
  background-image: url("../assets/testeback.png");
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: cover;
}

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
</style>
