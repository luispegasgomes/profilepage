<template>
  <!--CERTIFICATE-->
  <div id="collapse-certificate" v-show="getPageOpened === 'certificate'">
    <b-card style="background-color: #586F7C">
      <collapseHeader :collapseName="collapseName" :headerName="headerName"/>
      <div class="row justify-content-center">
        <div class="certificateBox mt-4 mb-3 mx-4 d-flex align-items-center justify-content-center"
          v-for="(info, index) in getExtra" :key="index">
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
    ...mapGetters(["getProgramming", "getExtra", "getPageOpened"]),
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
.download {
  border: none;
  border-radius: 100px;
  background-color: white;
  width: 50px;
  height: 50px;
}

.certificateBox {
  border: solid 6px #123456;
  background-color: white;
  width: 400px;
  height: 300px;
}

.closebtn {
  border: none;
  border-radius: 5px;
  background-color: #b20000;
  height: 30px;
  width: 60px;
  color: white;
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
