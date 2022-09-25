<template>
  <!--SKILLS-->

  <div
    class="d-flex flex-column align-items-center justify-content-center mt-4"
  >
    <div
      class="
        container
        skillsBox
        align-items-center
        justify-content-center
        col-8
      "
    >
      <div class="d-flex mt-2">
        <img src="../assets/code.png" width="30" height="30" />
        <p
          class="fontBarlow mx-3"
          style="font-size: 15px; font-weight: bold; text-align: center"
        >
          Front-End
        </p>
      </div>
      <div class="row d-flex align-items-center justify-content-center mb-3">
        <div
          class="col-sm-4 d-flex align-items-center justify-content-center mt-3"
        >
          <img class="col-4 mx-3" src="../assets/icons/html.png" />
          <img class="col-4 mx-3" src="../assets/icons/css.png" />
        </div>
        <div
          class="col-sm-4 d-flex align-items-center justify-content-center mt-3"
        >
          <img class="col-4 mx-3" src="../assets/icons/vue.png" />
          <img class="col-4 mx-3" src="../assets/icons/react.png" />
        </div>
        <div
          class="col-sm-4 d-flex align-items-center justify-content-center mt-3"
        >
          <img class="col-4 mx-3" src="../assets/icons/js.png" />
          
        </div>
      </div>
    </div>
    <div
      class="
        container
        skillsBox
        align-items-center
        justify-content-center
        col-8
        mt-5
      "
    >
      <div class="d-flex mt-2">
        <img src="../assets/code.png" width="30" height="30" />
        <p
          class="fontBarlow mx-3"
          style="font-size: 15px; font-weight: bold; text-align: center"
        >
          Back-End
        </p>
      </div>
      <div class="row d-flex align-items-center justify-content-center mb-3">
        <div
          class="col-sm-4 d-flex align-items-center justify-content-center mt-3"
        >
          <img class="col-4 mx-3" src="../assets/icons/python.png" />
          <img class="col-4 mx-3" src="../assets/icons/mongo.png" />
        </div>
        <div
          class="col-sm-4 d-flex align-items-center justify-content-center mt-3"
        >
          <img class="col-4 mx-3" src="../assets/icons/sequelize.png" />
          <img class="col-4 mx-3" src="../assets/icons/mysql.png" />
        </div>
        <div
          class="col-sm-4 d-flex align-items-center justify-content-center mt-3"
        >
          <img class="col-4 mx-3" src="../assets/icons/node.png" />
          <img class="col-4 mx-3" src="../assets/icons/restapi.png" />
        </div>
      </div>
    </div>

        <div
      class="
        container
        skillsBox
        align-items-center
        justify-content-center
        col-8
        mt-5
      "
    >
      <div class="d-flex mt-2">
        <img src="../assets/code.png" width="30" height="30" />
        <p
          class="fontBarlow mx-3"
          style="font-size: 15px; font-weight: bold; text-align: center"
        >
          Project management and UI/UX
        </p>
      </div>
      <div class="row d-flex align-items-center justify-content-center mb-3">
        <div
          class="col-sm-4 d-flex align-items-center justify-content-center mt-3"
        >
          <img class="col-4 mx-3" src="../assets/icons/trello.png" />
          <img class="col-4 mx-3" src="../assets/icons/agile.png" />
        </div>
        <div
          class="col-sm-4 d-flex align-items-center justify-content-center mt-3"
        >
          <img class="col-4 mx-3" src="../assets/icons/xd.png" />
          <img class="col-4 mx-3" src="../assets/icons/figma2.png" />
        </div>
        <div
          class="col-sm-4 d-flex align-items-center justify-content-center mt-3"
        >

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",

  data() {
    return {};
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
</style>
