<template>
  <div class="bgBeige">
    <div class="home bgBlue d-flex flex-column align-items-center justify-content-center">
      <h1
        class="fontAsap colorDarkBlue animate-charcter mt-4"
        style="font-weight: bold; font-size: 7vh; text-align: center; height: 12vh"
        id="luis"
      >
        <span style="color: #faf9f6">I'm</span>
        Luís G<img
          class="rotateRim"
          src="../assets/wheel.png"
          width="32px"
        />mes
      </h1>
      <p
        class="fontBarlow colorDarkBlue"
        style="text-align: center; font-size: 3vh; height: 12vh"
      >
        Software Developer<br />
        Intern at MOG Technologies
      </p>
      <img
        src="../assets/luisgomes.jpg"
        class="mt-4"
        style="border-radius: 50%; margin-bottom: 5vh"
        alt="Luis"
        width="220vh"
        height="220vh"
      />

      <div class="d-flex align-items-center justify-content-center mb-2" style="height: 14vh">
        <a href="https://github.com/luispegasgomes">
          <button class="mx-3 bgBeige btnBeige">
            <img src="../assets/github.png" width="30" />
          </button>
        </a>
        <a href="mailto:luispegasgomes@gmail.com">
          <button
            class="mx-3 bgDarkBlue btnBeige fontBarlow hireme"
            style="width: 150px"
          >
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

      <!--BUTTONS-->
      <div class="row align-items-center justify-content-center mt-4 mb-5">
        <div class="col-sm-6">
          <div class="d-flex align-items-center justify-content-center">
            <div
              class="
                d-flex
                flex-column
                align-items-center
                justify-content-center
                txt
              "
            >
              <button
                v-on:click="openPage('about')"
                v-scroll-to="'#collapse2'"
                class="mx-4 mainBtns"
              >
                <img src="../assets/account.png" width="36" height="36" />
              </button>

              <p class="colorDarkBlue fontAsap">About Me</p>
            </div>
            <div
              class="
                d-flex
                flex-column
                align-items-center
                justify-content-center
                txt
              "
            >
              <button
                v-on:click="openPage('academic')"
                v-scroll-to="'#collapse-3'"
                class="mx-4 mainBtns"
              >
                <img src="../assets/university.png" width="30" height="30" />
              </button>
              <p class="colorDarkBlue fontAsap">Academic</p>
            </div>
            <div
              class="
                d-flex
                flex-column
                align-items-center
                justify-content-center
                txt
              "
            >
              <button
                v-on:click="openPage('project')"
                v-scroll-to="'#collapse-4'"
                class="mx-4 mainBtns"
              >
                <img src="../assets/project.png" width="30" height="30" />
              </button>
              <p class="colorDarkBlue fontAsap">Projects</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 mt-2">
          <div class="d-flex align-items-center justify-content-center">
            <div
              class="
                d-flex
                flex-column
                align-items-center
                justify-content-center
                txt
              "
            >
              <button
                class="mx-4 mainBtns"
                v-on:click="openPage('skill')"
                v-scroll-to="'#collapse-5'"
              >
                <img src="../assets/skill.png" width="30" height="30" />
              </button>
              <p class="colorDarkBlue fontAsap">Skills</p>
            </div>
            <div
              class="
                d-flex
                flex-column
                align-items-center
                justify-content-center
                txt
              "
            >
              <button
                v-on:click="openPage('certificate')"
                v-scroll-to="'#collapse-6'"
                class="mx-4 mainBtns"
              >
                <img src="../assets/certificate.png" width="30" height="30" />
              </button>
              <p class="colorDarkBlue fontAsap">Certificates</p>
            </div>
            <div
              class="
                d-flex
                flex-column
                align-items-center
                justify-content-center
                txt
              "
            >
              <button
                class="mx-4 mainBtns"
                v-on:click="openPage('hobbies')"
                v-scroll-to="'#collapse-7'"
              >
                <img src="../assets/hobby.png" width="30" height="30" />
              </button>
              <p class="colorDarkBlue fontAsap">Hobbies</p>
            </div>
          </div>
        </div>
      </div>
      <!--BUTTONS-->
    </div>

    <!-- Import all collapses -->

    <About/>

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
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Home",
  data() {
    return {

    };
  },

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
  background-image: linear-gradient(
    -225deg,
    #dbc7be 0%,
    #ffffff 29%,
    #102b3f 67%,
    #102b3f 100%
  );
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
