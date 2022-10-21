<template>
  <!--CERTIFICATE-->

  <div class="row justify-content-center">
    <div class="col-sm-6 certificateBox mt-5">
      <p class="fontBarlow" style="font-size: 20px; font-weight: bold">
        Programming
      </p>
      <div>
        <div v-for="(info, index) in getProgramming" :key="index">
          <h1 style="font-size: 30px" class="mt-3">{{ info.date }}</h1>
          <hr class="col-8 mt-0 mb-1" style="height: 2px" />
          <div class="d-flex align-items-center mx-3">
            <img :src="info.logo" width="50" height="50" />
            <p class="mt-3 mx-3 col-5">
              <span style="font-weight: bold">{{ info.title }} <br /> </span>
              {{ info.subtitle }}
            </p>
            <button class="mx-4 download" v-b-modal.modal-2>
              <img src="../assets/download.png" width="30" height="30" />
            </button>
            <button class="download" v-b-modal.modal-2>
              <img src="../assets/eye.png" width="30" height="30" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-6 certificateBox mx-5 mt-5">
      <p class="fontBarlow" style="font-size: 20px; font-weight: bold">Extra</p>
      <div>
        <div v-for="(info, index) in getExtra" :key="index">
          <h1 style="font-size: 30px" class="mt-3">{{ info.date }}</h1>
          <hr class="col-8 mt-0 mb-1" style="height: 2px" />
          <div class="d-flex align-items-center mx-3">
            <img :src="info.logo" width="50" height="50" />
            <p class="mt-3 mx-3 col-5">
              <span style="font-weight: bold">{{ info.title }} <br /> </span>

              {{ info.subtitle }}
            </p>
            <button class="mx-4 download" v-b-modal.modal-2>
              <img src="../assets/download.png" width="30" height="30" />
            </button>
            <button class="download" v-b-modal.modal-2>
              <img src="../assets/eye.png" width="30" height="30" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <b-modal
      id="modal-2"
      title="Conta-nos o teu dia!"
      ok-title="Confirmar"
      hide-header
      hide-footer
    >
      <div
        class="d-flex flex-column align-items-center justify-content-between"
      >
        <h1 class="mb-4 fontAsap colorDarkBlue" style="font-size: 30px">
          Forbidden!
        </h1>
        <div class="fontBarlow d-flex flex-column align-items-center justify-content-center" style="font-size: 20px">
          <img src="../assets/forbidden.png" width="120px">
          <p class="mt-3">You don't have permission to access this feature!</p>
        </div>
        <button v-on:click="closeModal()" class="fontNunito closebtn mt-2">
          Close
        </button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Certificate",
  created() {
    this.loadProgrammingCertificates("");
    this.loadExtraCertificates("");
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getProgramming", "getExtra"]),
  },
  methods: {
    ...mapActions(["loadProgrammingCertificates", "loadExtraCertificates"]),
    closeModal() {
      this.$bvModal.hide("modal-2");
    },
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
  border-radius: 20px;
  background-color: white;
  width: 440px;
}
.closebtn {
  border: none;
  border-radius: 5px;
  background-color: #b20000;
  height: 30px;
  width: 60px;
  color: white;
}
</style>
