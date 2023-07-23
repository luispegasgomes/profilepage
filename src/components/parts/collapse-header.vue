<template>
    <div class="d-flex align-items-center justify-content-center mt-2">
        <button class="mx-3 secondaryBtns" v-on:click="openPage(collapseName)">
          <img :src="iconPath" width="30" height="30"/>
        </button>
        <h1 class="colorWhite" style="font-size: 30px">{{headerName}}</h1>
    </div>
</template>


<script>
import { mapGetters, mapMutations } from "vuex";
import { getIcon } from '../../helpers/getImgSrc.js'; // Substitua o caminho pelo caminho correto


export default {
  name: "CollapseHeader",
  props: ['collapseName', 'headerName'],

  computed: {
    iconPath() {
      return getIcon(this.collapseName);
    },
    ...mapGetters(["getPageOpened"]),
  },

  components: {
    
  },

  methods: {
    openPage(value) {
      this.CHANGE_PAGE_OPEN(value);
    },

    ...mapMutations(["CHANGE_PAGE_OPEN"]),
  },
};
</script>

<style scoped>
.secondaryBtns {
  border: none;
  border-radius: 100px;
  background-color: #102b3f;
  width: 60px;
  height: 60px;
}


</style>