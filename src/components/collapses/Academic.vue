<template>
  <div id="collapse-academic" v-show="getPageOpened === 'academic'">
    <collapseHeader :collapseName="collapseName" :headerName="headerName" class="mt-4" />
    <!-- NEW -->
    <div class="academic col-10 col-sm-10 col-md-10 col-lg-10 col-xl-8 mt-3 mb-3" v-for="(info, index) in getAcademics" :key="index">
      <div class="d-flex align-items-center">
        <span style="font-size: 20px; width: 98%;">{{info.date}}</span>
        <button class="btnMoreInfoTop" @click="openModal(info.logo)"><img :src="getIcon('info')" width="100%"></button>
      </div>
      <hr class="col-12 mt-2 mb-3 colorDarkBlue rule" />
      <div class="content d-md-flex align-items-center">
        <img :src="getInstitutionLogo(info.logo)" alt="esmad" width="80" class="mr-md-4 mb-2 mb-md-0">
        <div class="d-flex flex-column textInfo" style="width: 100%;">
          <span style="font-weight: bold; font-size: 20px;" class="fontAsap mb-2">{{info.title}}</span>
          <span style="font-size: 18px;">{{info.subtitle}}</span>
        </div>
        <button class="btnMoreInfoBottom" @click="openModal(info.logo)"><img :src="getIcon('info')" width="100%"></button>
      </div>
    </div>
    <Modal ref="modalAcademic" :course="collapseName"/>
    <scrollToTop :collapseName="collapseName" />
  </div>
</template>


<script>
import { mapGetters, mapMutations } from "vuex";
import scrollToTop from "../parts/scroll-to-top.vue";
import collapseHeader from "../parts/collapse-header.vue"
import Modal from "../modals/modal-academic.vue";
import { getInstitutionLogo, getIcon } from "../../helpers/getImgSrc";

export default {
  name: "Academic",
  data() {
    return {
      collapseName: 'academic',
      headerName: 'Academic',
      showModal: false,
    };
  },

  computed: {
    ...mapGetters(["getAcademics", "getPageOpened"]),
  },

  components: {
    scrollToTop,
    collapseHeader,
    Modal,
  },
  methods: {
    getInstitutionLogo,
    getIcon,
    openPage(value) {
      this.CHANGE_PAGE_OPEN(value);
    },
    openModal(logo) {
      this.$refs.modalAcademic.showModal(logo);
    },
    closeModal() {
      this.$refs.modalAcademic.hideModal();
    },
    ...mapMutations(["CHANGE_PAGE_OPEN"]),
  },
};
</script>

<style scoped>

#collapse-academic {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #586F7C;
}

.rule {
  opacity: 1;
  height: 2px;
}
.btnMoreInfoTop {
  background-color: #95ADB6;
  border: none;
  width: 35px;
  height: 35px;
}

.btnMoreInfoBottom {
  background-color: #95ADB6;
  border: none;
  width: 60px;
  height: 50px;
}

.academic {
  display: flex;
  flex-direction: column;
  border: solid 6px #123456;
  background-color: #95ADB6;
  padding: 10px;
}

@media (max-width: 767.98px) {
  /* Devices smaller than md breakpoint (767.98px) */
  .content {
    text-align: center !important;
  }

  .btnMoreInfoBottom {
    display: none;
  }
}

@media (min-width: 767.98px) {
  /* Devices greater than md breakpoint (767.98px) */
  .textInfo {
    margin: 10px;
    margin-left: 20px;
  }

  .btnMoreInfoTop {
    display: none;
  }
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
</style>
