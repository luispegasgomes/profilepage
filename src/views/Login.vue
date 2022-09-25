<template>
  <div class="bgBlue d-flex flex-column align-items-center home">
    <div>
        
    </div>
    <div class="d-flex flex-column align-items-center mt-5 box">
      <p class="fontBarlow mt-3" style="font-weight: bold; font-size: 30px">
        Admin Reserved Area
      </p>
      <img
        src="../assets/luis2.png"
        class="mt-4"
        alt="Luis"
        width="200"
        height="200"
        style="border-radius: 100px"
      />
      <p class="fontBarlow mt-3" style="font-weight: bold; font-size: 25px">
        Login
      </p>
      <input
        type="text"
        name="txtUsername"
        id="txtUsername"
        placeholder="Username"
        class="form-control"
        style="width:200px"
      />
      <input
        type="text"
        class="mt-3 form-control"
        name="txtPassword"
        id="txtPassword"
        placeholder="Password"
        style="width:200px"
      />
      <b-button class="mt-4 mb-4 btn btn-dark">LOGIN</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
};
</script>

<style scoped>
.home {
  position: relative;
  height: 100vh;
}

.box {
  background-color: #dbc7be;
  border-radius: 12px;
  width: 380px;
}
</style>
