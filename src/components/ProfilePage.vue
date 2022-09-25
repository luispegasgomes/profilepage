<template>
  <div
    class="
      boxAutme
      col-11
      d-flex
      flex-column
      align-items-center
      justify-content-center
      mt-2
    "
  >
    <div class="d-flex">
      <img src="../assets/icon.png" width="50" height="50" />
      <h1 class="mx-4 fontBarlow colorDarkBlue">My Profile Page</h1>
    </div>
    <p style="text-align: center" class="mt-3 col-12 fontBarlow colorDarkBlue">
      This is my personal information page, which contains information about me,
      my projects, academic background, my skills, certificates and my personal
      interests. <span style="color:red">Warning!! All the information of this website is hard coded, i will connect api soon.</span>
    </p>
    <p class="colorOrange mt-2" style="font-weight: bold">Main tools used</p>
    <div class="d-flex mt-3">
      <img class="mx-3" src="../assets/icons/vue.png" width="40" height="40" />
      <img
        class="mx-3"
        src="../assets/icons/bootstrap.png"
        width="40"
        height="40"
      />
      <img class="mx-3" src="../assets/icons/node.png" width="70" height="40" />
      <img
        class="mx-2"
        src="../assets/icons/figma.png"
        width="30"
        height="40"
      />
    </div>
    <div class="d-flex mt-4">
      <a class="mx-2 colorDarkBlue" href="">Promo Video</a>
      <a class="mx-2 colorDarkBlue" href="https://luisgomes.vercel.app/">
        Go to Website</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfilePage",

  data() {
    return {};
  },
};
</script>

<style scoped>
.boxAutme {
  border: 6px solid var(--orange);
  border-radius: 30px;
  color: var(--darkBlue);
  box-shadow: 6px 6px 0px var(--orange);
  background: #95adb6;
  min-height: 24rem;
}
</style>
