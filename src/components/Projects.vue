<template>
  <!--PROJECTS-->

  <div class="row justify-content-center">

    <div class="projectBox mt-4 mb-3 mx-4 d-flex flex-column align-items-center justify-content-center bgBlue" v-for="(object, index) in getProjects.slice().reverse()" :key="index" >
      <div class="d-flex mb-3 mt-1">
        <img :src="object.logo" width="50" height="50">
        <div class="d-flex flex-column" >
          <span style="font-size: 18px; font-weight: bold;" class="fontAsap">{{object.name}}</span>
          <span style="font-size: 15px;" class="fontBarlow">{{object.subtitle}}</span>
        </div>
      </div>
      <span style="font-size: 13px;">{{object.description}}</span>
      <span class="colorDarkBlue mt-2" style="font-weight: bold;">Main tools used</span>

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

.projectBox {
  border: solid 6px #123456;
  width: 400px;
  height: 300px;
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
