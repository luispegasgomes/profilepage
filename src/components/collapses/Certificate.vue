<template>
  <!--CERTIFICATE-->
  <div id="collapse-certificate" v-show="getPageOpened === 'certificate'">
    <b-card style="background-color: #586F7C">
      <collapseHeader :collapseName="collapseName" :headerName="headerName"/>
      <div class="row justify-content-center">
        <div class="certificateBox mt-4 mb-3 mx-4 d-flex align-items-center justify-content-center"
          v-for="(info, index) in getCertificates" :key="index">
          <img :src="getCertificateImage(info.image)" width="380" height="250">
        </div>
      </div>
      <scrollToTop :collapseName="collapseName" />
    </b-card>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import scrollToTop from "../parts/scroll-to-top.vue";
import collapseHeader from "../parts/collapse-header.vue"
import { getCertificateImage } from "../../helpers/getImgSrc";

export default {
  name: "Certificate",

  data() {
    return {
      collapseName: 'certificate',
      headerName: 'Certificates'
    };
  },

  components: {
    scrollToTop,
    collapseHeader
  },

  computed: {
    ...mapGetters(["getCertificates", "getPageOpened"]),
  },

  methods: {
    getCertificateImage,
    closeModal() {
      this.$bvModal.hide("modal-2");
    },
    openPage(value) {
      this.CHANGE_PAGE_OPEN(value);
    },
    ...mapMutations(["CHANGE_PAGE_OPEN"]),
  },
};
</script>

<style scoped>

.certificateBox {
  border: solid 6px #123456;
  background-color: white;
  width: 400px;
  height: 300px;
}
</style>
