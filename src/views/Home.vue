<template>
  <div class="bgBeige">
    <div class="home bgBlue d-flex flex-column align-items-center">
      <h1
        class="fontAsap colorDarkBlue mt-4 animate-charcter"
        style="font-weight: bold; font-size: 50px; text-align: center"
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
        class="fontBarlow colorDarkBlue mt-3"
        style="text-align: center; font-size: 20px"
      >
        Software Developer<br />
        Intern at MOG Technologies
      </p>
      <img
        src="../assets/luispegasgomes.jpeg"
        class="mt-4"
        style="border-radius: 50%"
        alt="Luis"
        width="210"
        height="210"
      />

      <div class="d-flex mt-5 mb-2">
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
                v-on:click="openAbout()"
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
                v-on:click="openAcademic()"
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
                v-on:click="openProject()"
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
                v-on:click="openSkills()"
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
                v-on:click="openCertificate()"
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
                v-on:click="openInterests()"
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

    <!--ABOUT ME-->
    <div id="collapse2" v-show="aboutme">
      <b-card style="background-color: #586F7C">
        <div class="d-flex align-items-center justify-content-center mt-2">
          <button class="mx-3 secondaryBtns" v-on:click="close()">
            <img src="../assets/account.png" width="36" height="36" />
          </button>
          <h1 class="colorWhite" style="font-size: 30px">About Me</h1>
        </div>

        <div
          class="
            mt-4
            fontBarlow
            colorWhite
            d-flex
            flex-column
            align-items-center
          "
        >
          <img src="../assets/curriculo.png" width="50px" class="mt-4" />
          <p class="text col-10 mt-3">
            I love programming because I really like to understand how things
            are built, this whole process of construction from protyping to the
            final product, fascinates me because it is a huge satisfaction when
            we see that our work was successful and corresponds to what is
            intended . I also love working in a team, as several people working
            with the same purpose but with different ways of thinking, make each
            of us learn from the tips of other colleagues, making the work more
            solid and consistent and also enriching the our skills and the way
            we deal with other everyday situations because we learn different
            ways of thinking.
          </p>

          <img src="../assets/mail.png" width="50px" class="mt-5" />
          <p class="text mt-3">luispegasgomes@gmail.com</p>

          <img src="../assets/book.png" width="50px" class="mt-5" />
          <p class="text mt-3">
            Technologies and Information Systems for the Web <br />
            ESMAD | Escola Superior de Media Artes e Design
          </p>
          <img src="../assets/casa.png" width="50px" class="mt-5" />
          <p class="text mt-3">Santa Marinha do Zêzere, Baião</p>
          <img src="../assets/birth.png" width="50px" class="mt-5" />
          <p class="text mt-3">September 15, 2002</p>

          <button
            class="d-flex flex-column align-items-center backtotop mt-3"
            v-on:click="close()"
          >
            <img width="40" src="../assets/up.png" alt="Back to top!" />
            <span class="mt-2 colorDarkBlue">Back to top!</span>
          </button>
        </div>
      </b-card>
    </div>
    <!--ABOUT ME-->

    <!--ACADEMIC-->
    <div id="collapse-3" v-show="academic">
      <b-card style="background-color: #586F7C">
        <div class="d-flex align-items-center justify-content-center mt-2">
          <button class="mx-3 secondaryBtns" v-on:click="close()">
            <img src="../assets/university.png" width="30" height="30" />
          </button>
          <h1 class="colorWhite" style="font-size: 30px">Academic</h1>
        </div>

        <div
          class="
            mt-4
            mx-2
            fontBarlow
            colorDarkBlue
            d-flex
            flex-column
            align-items-start
          "
          v-for="(info, index) in getAcademics.slice().reverse()"
          :key="index"
        >
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
        <div class="d-flex flex-column align-items-center">
          <button
            class="d-flex flex-column align-items-center backtotop mt-3"
            v-on:click="close()"
          >
            <img width="40" src="../assets/up.png" alt="Back to top!" />
            <span class="mt-2 colorDarkBlue">Back to top!</span>
          </button>
        </div>
      </b-card>
    </div>
    <!--ACADEMIC-->

    <!--PROJECTS-->
    <div id="collapse-4" v-show="project">
      <b-card style="background-color: #586F7C">
        <div class="d-flex align-items-center justify-content-center mt-2">
          <button class="mx-3 secondaryBtns" v-on:click="close()">
            <img src="../assets/project.png" width="30" height="30" />
          </button>
          <h1 class="colorWhite" style="font-size: 30px">My Projects</h1>
        </div>
        <!--Import projects component to show your content-->
        <Projects />
        <div class="d-flex flex-column align-items-center">
          <button
            class="d-flex flex-column align-items-center backtotop mt-3"
            v-on:click="close()"
          >
            <img width="40" src="../assets/up.png" alt="Back to top!" />
            <span class="mt-2 colorDarkBlue">Back to top!</span>
          </button>
        </div>
      </b-card>
    </div>
    <!--PROJECTS-->
    <!--SKILLS-->
    <div id="collapse-5" v-if="skill">
      <b-card style="background-color: #586F7C">
        <div class="d-flex align-items-center justify-content-center mt-2">
          <button class="mx-3 secondaryBtns" v-on:click="close()">
            <img src="../assets/skill.png" width="30" height="30" />
          </button>
          <h1 class="colorDarkBlue" style="font-size: 30px">My Skills</h1>
        </div>
        <!--Import skills component to show your content-->
        <Skills />
        <div class="d-flex flex-column align-items-center">
          <button
            class="d-flex flex-column align-items-center backtotop mt-3"
            v-on:click="close()"
          >
            <img width="40" src="../assets/up.png" alt="Back to top!" />
            <span class="mt-2 colorDarkBlue">Back to top!</span>
          </button>
        </div>
      </b-card>
    </div>
    <!--SKILLS-->

    <!--CERTIFICATE-->
    <div id="collapse-6" v-show="certificate">
      <b-card style="background-color: #586F7C">
        <div class="d-flex align-items-center justify-content-center mt-2">
          <button class="mx-3 secondaryBtns" v-on:click="close()">
            <img src="../assets/certificate.png" width="30" height="30" />
          </button>
          <h1 class="colorWhite" style="font-size: 30px">My Certificates</h1>
        </div>
        <!--Import certificate component to show your content-->
        <Certificate />
        <div class="d-flex flex-column align-items-center">
          <button
            class="d-flex flex-column align-items-center backtotop mt-3"
            v-on:click="close()"
          >
            <img width="40" src="../assets/up.png" alt="Back to top!" />
            <span class="mt-2 colorDarkBlue">Back to top!</span>
          </button>
        </div>
      </b-card>
    </div>
    <!--CERTIFICATE-->

    <!--INTERESTS-->
    <div id="collapse-7" v-show="interests">
      <b-card style="background-color: #586F7C">
        <div class="d-flex align-items-center justify-content-center mt-2">
          <button class="mx-3 secondaryBtns" v-on:click="close()">
            <img src="../assets/hobby.png" width="30" height="30" />
          </button>
          <h1 class="colorWhite" style="font-size: 30px">My Hobbies</h1>
        </div>
        <!--Import interests component to show your content-->
        <Interests />
        <div class="d-flex flex-column align-items-center">
          <button
            class="d-flex flex-column align-items-center backtotop mt-3"
            v-on:click="close()"
          >
            <img width="40" src="../assets/up.png" alt="Back to top!" />
            <span class="mt-2 colorDarkBlue">Back to top!</span>
          </button>
        </div>
      </b-card>
    </div>
    <!--INTERESTS-->
  </div>
</template>

<script>
import Projects from "../components/Projects.vue";
import Skills from "../components/Skills.vue";
import Certificate from "../components/Certificate.vue";
import Interests from "../components/Interests.vue";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      aboutme: false,
      academic: false,
      project: false,
      skill: false,
      certificate: false,
      interests: false,
    };
  },

  computed: {
    ...mapGetters(["getAcademics"]),
  },

  components: {
    Projects,
    Skills,
    Certificate,
    Interests,
  },
  methods: {
    openAbout() {
      this.aboutme = true;
    },
    openAcademic() {
      this.academic = true;
    },
    openProject() {
      this.project = true;
    },
    openSkills() {
      this.skill = true;
    },
    openCertificate() {
      this.certificate = true;
    },
    openInterests() {
      this.interests = true;
    },
    close() {
      window.scrollTo(0, 0);
      if (this.academic) {
        setTimeout(() => (this.academic = false), 500);
      }
      if (this.aboutme) {
        setTimeout(() => (this.aboutme = false), 500);
      }
      if (this.project) {
        setTimeout(() => (this.project = false), 500);
      }
      if (this.certificate) {
        setTimeout(() => (this.certificate = false), 500);
      }
      if (this.interests) {
        setTimeout(() => (this.interests = false), 500);
      }
      if (this.skill) {
        setTimeout(() => (this.skill = false), 500);
      }
    },
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

.backtotop {
  border: none;
  border-radius: 11px;
  background-color: #586F7C;
  animation: wiggle 1.2s infinite;
}
</style>
