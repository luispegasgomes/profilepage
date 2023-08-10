<template>
  <div id="collapse-project" v-show="getPageOpened === 'project'">
    <b-card style="background-color: #586F7C">
      <collapseHeader :collapseName="collapseName" :headerName="headerName"/>
      <div class="row justify-content-center">
        <div class="projectBox mt-4 mb-3 mx-4 d-flex flex-column bgBlue"
          v-for="(object, index) in getProjects.slice().reverse()" :key="index">
          <div class="d-flex mb-3 mt-3">
            <img :src="object.logo" width="50" height="50">
            <div class="d-flex flex-column mx-3">
              <span style="font-size: 18px; font-weight: bold;" class="fontAsap">{{ object.name }}</span>
              <span style="font-size: 15px;" class="fontBarlow">{{ object.subtitle }}</span>
            </div>
          </div>
          <div class="d-flex flex-column align-items-center">
            <div class="d-flex align-items-center" style="height: 80px;">
              <span style="font-size: 13px; text-align:center;">{{ object.description }}</span>
            </div>
            <span class="colorDarkBlue mt-2" style="font-weight: bold;">Main tools used</span>
            <div class="d-flex flex-column align-items-center justify-content-center mt-2 mb-2">
              <div class="d-flex align-items-center justify-content-center">
                <img class="mx-2" :src="object.tools[0]" height="32" style="border-radius: 15px;" />
                <img class="mx-2" :src="object.tools[1]" height="32" style="border-radius: 15px;" />
              </div>
              <div class="d-flex align-items-center justify-content-center mt-3">
                <img class="mx-2" :src="object.tools[2]" height="32" style="border-radius: 15px;" />
                <img class="mx-2" :src="object.tools[3]" height="32" style="border-radius: 15px;" />
              </div>
            </div>
            <div class="d-flex mt-2 mb-3">
              <a class="mx-2 colorDarkBlue" v-b-modal.modal-1 v-on:click="openModal(object.name)">See sample</a>
              <a class="mx-2 colorDarkBlue" :href="object.website">
                Go to Website</a>
            </div>
          </div>
        </div>
      </div>
      <Modal ref="modalProjects"/>
      <scrollToTop :collapseName="collapseName" />
    </b-card>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import scrollToTop from "../parts/scroll-to-top.vue";
import collapseHeader from "../parts/collapse-header.vue"
import Modal from "../modals/modal-projects.vue";

export default {
  name: "Projects",
  data() {
    return {
      projectinfo: false,
      imgmodal: 'empty',
      projectTitle: 'empty',
      object: {},
      collapseName: 'project',
      headerName: "Projects"
    };
  },

  computed: {
    ...mapGetters(["getProjects", "getOneProject", "getPageOpened"]),
  },

  components: {
    scrollToTop,
    collapseHeader,
    Modal
  },

  methods: {
    openModal(name) {
      this.$refs.modalProjects.showModal(name);
    },
    closeModal() {
      this.$refs.modalProjects.hideModal();
    },
    openPage(value) {
      this.CHANGE_PAGE_OPEN(value);
    },
    ...mapMutations(["CHANGE_PAGE_OPEN"]),
  },
};
</script>

<style scoped>

#collapse-project{
  background-color: #586F7C;
}
.btnShow {
  width: 100px;
  border: none;
  border-radius: 8px;
  background-color: #95adb6;
  color: #fff;
}

.projectBox {
  border: solid 6px #123456;
  width: 350px;
  height: 350px;
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

.backtotop {
  border: none;
  border-radius: 11px;
  background-color: #586F7C;
  animation: wiggle 1.2s infinite;
}

.secondaryBtns {
  border: none;
  border-radius: 100px;
  background-color: #102b3f;
  width: 60px;
  height: 60px;
}
</style>
