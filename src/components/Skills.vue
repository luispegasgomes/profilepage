<template>
  <!--SKILLS-->
    <!--NEW SKILLS PAGE-->
    <div class="row justify-content-center">
      <!--FRONT-END-->
      <div class="col-sm-6 skills2Box mt-5">
        <p class="fontBarlow mt-2 px-2" style="font-size: 20px; font-weight: bold">
          Front-End
        </p>
          <div class="d-flex align-items-center justify-content-center col-12" 
            v-for="(info, index) in getskillsFE" :key="index"
          >
            <div class="col-10 mb-4" >
              <div class="d-flex align-items-center">
                <img :src="info.logo" width="20" height="20" class="mb-3">
                <p class="px-2">{{info.title}}</p>
              </div>
              
              <b-progress :value="info.porcentage" variant="primary" :striped="striped"></b-progress>
            </div>
          </div>
      </div>
      <!--BACK-END-->
      <div class="col-sm-6 skills2Box mt-5">
        <p class="fontBarlow mt-2 px-2" style="font-size: 20px; font-weight: bold">
          Back-End | Database
        </p>
          <div class="d-flex align-items-center justify-content-center col-12" 
            v-for="(info, index) in getskillsBE" :key="index"
          >
            <div class="col-10 mb-4" >
              <div class="d-flex align-items-center">
                <img :src="info.logo" width="20" height="20" class="mb-3">
                <p class="px-2">{{info.title}}</p>
              </div>
              
              <b-progress :value="info.porcentage" variant="primary" :striped="striped"></b-progress>
            </div>
          </div>
      </div>
      <!--OTHERS-->
      <div class="col-sm-6 skills2Box mt-5">
        <p class="fontBarlow mt-2 px-2" style="font-size: 20px; font-weight: bold">
          TPW | Project Management | UI/UX
        </p>
          <div class="d-flex align-items-center justify-content-center col-12" 
            v-for="(info, index) in getothers" :key="index"
          >
            <div class="col-10 mb-4" >
              <div class="d-flex align-items-center">
                <img :src="info.logo" width="20" height="20" class="mb-3">
                <p class="px-2">{{info.title}}</p>
              </div>
              
              <b-progress :value="info.porcentage" variant="primary" :striped="striped"></b-progress>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Skills",

  data() {
    return {
    };
  },
    computed: {
    ...mapGetters(["getskillsFE", "getskillsBE", "getothers"]),
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
.skillsBox {
  border: solid 3px #123456;
  border-radius: 10px;
  background-color: white;

}

.skills2Box {
  border: solid 6px #123456;
  border-radius: 20px;
  background-color: white;
  width: 380px;
  margin-left: 40px;
  margin-right: 40px;
}
</style>
