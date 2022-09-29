<template>
  <!--PROJECTS-->
  <div class="row justify-content-center">
    <div class="col-sm-7">
      <div
        class="
          mx-2
          fontBarlow
          colorDarkBlue
          d-flex
          flex-column
          align-items-start
        "
      >
        <!--PERSONALPAGE-->
        <div
          v-for="(info, index) in getProjects[0].slice().reverse()"
          :key="index"
        >
          <h1 style="font-size: 30px" class="mt-4">
            {{ info.date }}
          </h1>
          <hr class="col-8 mt-0 mb-1" style="height: 2px" />
          <div class="d-flex flex-column mx-3">
            <div class="d-flex align-items-center">
              <img :src="info.logo" width="50" height="50" />
              <p class="mt-3 mx-3">
                <span style="font-weight: bold">{{ info.title }}<br /> </span>
                {{ info.subtitle }}
              </p>
            </div>

            <button
              class="btnShow mt-3"
              v-on:click="openProfilePage(info._id)"
              v-scroll-to="'#projectInfo1'"
            >
              Show More
            </button>
          </div>
        </div>

        <!--PERSONALPAGE-->
      </div>
    </div>
    <div class="col-sm-5 d-flex flex-column align-items-center mt-3">

      <transition name="fade">
        <div
          id="projectInfo1"
          class="
            boxAutme
            col-11
            d-flex
            flex-column
            align-items-center
            justify-content-center
            mt-2
          "
        >
          <p
            v-if="projectinfo == false"
            class="col-10"
            style="text-align: center"
          >
            To find out more about the projects I've developed, click on "Show
            More" on the project you want to know more about.
            <br><br><br><br>
            <span style="font-size:35px; font-weight:bold" class="fontAsap">Luís Gomes</span> 
          </p>
          <div
            v-if="projectinfo == true"
            class="d-flex flex-column align-items-center justify-content-center"
          >
            <div class="d-flex">
              <img :src="getOneProject[0].logo" width="50" height="50" />
              <h1 class="mx-4 fontBarlow colorDarkBlue">
                {{ getOneProject[0].name }}
              </h1>
            </div>
            <p
              style="text-align: center"
              class="mt-3 col-12 fontBarlow colorDarkBlue"
            >
              {{ getOneProject[0].description }}
            </p>
            <p class="colorOrange mt-2" style="font-weight: bold">
              Main tools used
            </p>
            <div class="d-flex mt-3">
              <img
                class="mx-3"
                :src="getOneProject[0].tools[0]"
                width="40"
                height="40"
              />
              <img
                class="mx-3"
                :src="getOneProject[0].tools[1]"
                width="40"
                height="40"
              />
              <img
                class="mx-3"
                :src="getOneProject[0].tools[2]"
                width="40"
                height="40"
              />
              <img
                class="mx-2"
                :src="getOneProject[0].tools[3]"
                width="40"
                height="40"
              />
            </div>
            <div class="d-flex mt-4">
              <a class="mx-2 colorDarkBlue" v-b-modal.modal-1 v-on:click="sample()">See sample</a>
              <a class="mx-2 colorDarkBlue" :href="getOneProject[0].website">
                Go to Website</a
              >
            </div>
          </div>
        </div>
      </transition>
      <b-modal
        id="modal-1"
        title="Conta-nos o teu dia!"
        ok-title="Confirmar"
        hide-header
        hide-footer
      >

          <div class="d-flex flex-column align-items-center justify-content-between">
            <h1 class="mb-4 fontAsap colorDarkBlue" style="font-size:30px">{{projectTitle}}</h1>
            <div class="fontBarlow" style="font-size: 30px">
              <img :src="imgmodal" width="400px"/>
            </div>
            <button v-on:click="closeModal()" class="fontNunito closebtn mt-3">
              <img src="../assets/close.png" width="35px">
            </button>
          </div>

      </b-modal>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Projects",
  created() {
    this.loadProjects("");
  },

  data() {
    return {
      projectinfo: false,
      imgmodal: 'empty',
      projectTitle: 'empty'
    };
  },

  computed: {
    ...mapGetters(["getProjects", "getOneProject"]),
  },

  methods: {
    ...mapActions(["loadProjects", "loadOneProject"]),

    openProfilePage(index) {
      this.loadOneProject(index);
      this.projectinfo = true;
      
    },
    closeModal() {
      this.$bvModal.hide("modal-1");
    },
    sample(){
      this.imgmodal = this.getOneProject[0].promo
      this.projectTitle = this.getOneProject[0].name
    }
  },
};
</script>

<style scoped>
.btnShow {
  width: 100px;
  border: none;
  border-radius: 8px;
  background-color: #95adb6;
  color: #fff;
}

.mainBtns2 {
  border: none;
  background-color: white;
  width: 55px;
  height: 55px;
}

.closebtn {
  border: none;
  border-radius: 30px;
  background-color: white;
  width: 30px;
  height: 30px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.boxAutme {
  border: 6px solid var(--orange);
  border-radius: 30px;
  color: var(--darkBlue);
  box-shadow: 6px 6px 0px var(--orange);
  background: #95adb6;
  min-height: 24rem;
}
</style>
