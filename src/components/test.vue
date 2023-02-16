<template>
  <!--CERTIFICATE-->

  <div class="row justify-content-center">

    <div class="certificateBox mt-4 mb-3 mx-4 d-flex align-items-center justufy-content-center" v-for="(info, index) in getExtra" :key="index" >
       <img :src="info.logo" width="380" height="250">
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Certificate",

  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getProgramming", "getExtra"]),
  },
  methods: {
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
</style>
