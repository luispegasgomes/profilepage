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
          v-for="(info, index) in getProjects.slice().reverse()"
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
              v-on:click="openProfilePage(info.name)"
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
            <div class="d-flex col-10 align-items-center justify-content-center mb-1 mt-3">
              <img :src="object.logo" width="40" height="40"/>
              <h1 class="mx-4 fontBarlow colorDarkBlue" style="font-size: 28px;">
                {{ object.name }}
              </h1>
            </div>
            <p
              style="text-align: center"
              class="mt-2 col-10 fontBarlow colorDarkBlue"
            >
              {{ object.description }}
            </p>
            <p class="colorOrange mt-3" style="font-weight: bold">
              Main tools used
            </p>
            <div class="d-flex flex-column align-items-center justify-content-center mt-2 mb-2">
                <div class="d-flex align-items-center justify-content-center">
                  <img
                  class="mx-2"
                  :src="object.tools[0]"
                  height="32"
                  style="border-radius: 15px;"
                />
                <img
                  class="mx-2"
                  :src="object.tools[1]"
                  height="32"
                  style="border-radius: 15px;"
                />
              </div>
              <div class="d-flex align-items-center justify-content-center mt-3">
                  <img
                  class="mx-2"
                  :src="object.tools[2]"
                  height="32"
                  style="border-radius: 15px;"
                />
                <img
                  class="mx-2"
                  :src="object.tools[3]"
                  height="32"
                  style="border-radius: 15px;"
                />
              </div>
            </div>
            <div class="d-flex mt-2 mb-3">
              <a class="mx-2 colorDarkBlue" v-b-modal.modal-1 v-on:click="sample()">See sample</a>
              <a class="mx-2 colorDarkBlue" :href="object.website">
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
              <img :src="imgmodal" width="300px"/>
            </div>
            <button v-on:click="closeModal()" class="fontNunito closebtn mt-3">
              Close
            </button>
          </div>

      </b-modal>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Projects",
  data() {
    return {
      projectinfo: false,
      imgmodal: 'empty',
      projectTitle: 'empty',
      object:{},
    };
  },

  computed: {
    ...mapGetters(["getProjects", "getOneProject"]),
  },

  methods: {
    openProfilePage(index) {
      this.object = this.getOneProject(index)
      console.log(this.object);
      this.projectinfo = true;
      
    },
    closeModal() {
      this.$bvModal.hide("modal-1");
    },
    sample(){
      this.imgmodal = this.object.promo
      this.projectTitle = this.object.name
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

.btnShow:hover {
  width: 100px;
  border: none;
  border-radius: 8px;
  background-color: #b20000;
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
  border-radius: 5px;
  background-color: #b20000;
  height: 30px;
  width: 60px;
  color: white;
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
