<template>
  <!--CERTIFICATE-->

  <div class="row justify-content-center">
    <div class="col-sm-6 certificateBox mt-5" >
      <p class="fontBarlow" style="font-size: 20px; font-weight: bold">
        Programming
      </p>
      <div>
        <div v-for="(info, index) in getProgramming[0]" :key="index">
          <h1 style="font-size: 30px" class="mt-3">{{info.date}}</h1>
          <hr class="col-8 mt-0 mb-1" style="height: 2px" />
          <div class="d-flex align-items-center mx-3">
            <img :src="info.logo" width="50" height="50" />
            <p class="mt-3 mx-3 col-5">
              <span style="font-weight: bold">{{info.title}} <br /> </span>
              {{info.subtitle}}
            </p>
            <button class="mx-4 download">
              <img src="../assets/download.png" width="30" height="30" />
            </button>
            <button class="download">
              <img src="../assets/eye.png" width="30" height="30" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-6 certificateBox mx-5 mt-5">
      <p class="fontBarlow" style="font-size: 20px; font-weight: bold">Extra</p>
      <div>
        <div v-for="(info, index) in getExtra[0]" :key="index">
          <h1 style="font-size: 30px" class="mt-3">{{info.date}}</h1>
          <hr class="col-8 mt-0 mb-1" style="height: 2px" />
          <div class="d-flex align-items-center mx-3">
            <img :src="info.logo" width="50" height="50" />
            <p class="mt-3 mx-3 col-5">
              <span style="font-weight: bold">{{info.title}} <br /> </span>

              {{info.subtitle}}
            </p>
            <button class="mx-4 download">
              <img src="../assets/download.png" width="30" height="30" />
            </button>
            <button class="download">
              <img src="../assets/eye.png" width="30" height="30" />
            </button>
          </div>
        </div>
      </div>
    </div>
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
</style>
