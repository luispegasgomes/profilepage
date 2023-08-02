<template>
  <div id="collapse-academic" v-show="getPageOpened === 'academic'">
    <collapseHeader :collapseName="collapseName" :headerName="headerName" />
    <!-- NEW -->
    <div class="new col-10 col-sm-10 col-md-10 col-lg-10 col-xl-8 mt-3">
      <span style="font-size: 20px;">10/2020 - 07/2023</span>
      <hr class="col-12 mt-2 mb-3 colorDarkBlue rule" />
      <div class="test d-md-flex align-items-center ">
        <img src="../../assets/logo-esmad.png" alt="esmad" width="90" class="mr-md-4 mb-2 mb-md-0">

        <div class="d-flex flex-column m-2">
          <span style="font-weight: bold; font-size: 20px;" class="fontAsap mb-2">Escola Superior de Media Artes e
            Design</span>
          <span style="font-size: 18px;">Degree, Technologies and Information Systems for the Web</span>
        </div>
      </div>

    </div>

    <scrollToTop :collapseName="collapseName" />
  </div>
</template>


<script>
import { mapGetters, mapMutations } from "vuex";
import scrollToTop from "../parts/scroll-to-top.vue";
import collapseHeader from "../parts/collapse-header.vue"

export default {
  name: "Academic",
  data() {
    return {
      collapseName: 'academic',
      headerName: 'Academic'
    };
  },

  computed: {
    ...mapGetters(["getAcademics", "getPageOpened"]),
  },

  components: {
    scrollToTop,
    collapseHeader
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
#collapse-academic {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #586F7C;
}

@media (max-width: 767.98px) {
    /* Devices smaller than md breakpoint (767.98px) */
    .test {
      text-align: center !important;
    }
  }

.new {
  display: flex;
  flex-direction: column;
  border: solid 6px #123456;
  background-color: #95ADB6;
  padding: 10px;
}


@keyframes textclip {
  to {
    background-position: 200% center;
  }
}

.rule {
  opacity: 1;
  height: 2px;
}
</style>
