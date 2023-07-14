<template>
    <div>
        <b-card style="background-color: #586F7C">
            <div class="d-flex align-items-center justify-content-center mt-2">
                <button class="mx-3 secondaryBtns" v-on:click="close()">
                    <img src="../assets/university.png" width="30" height="30" />
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
            <div class="d-flex flex-column align-items-center">
                <button class="d-flex flex-column align-items-center backtotop mt-3" v-on:click="close()">
                    <img width="40" src="../assets/up.png" alt="Back to top!" />
                    <span class="mt-2 colorDarkBlue">Back to top!</span>
                </button>
            </div>
        </b-card>
    </div>
    <!--ACADEMIC-->
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