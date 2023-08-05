<template>
  <div id="collapse-work" v-show="getPageOpened === 'work'">
    <b-card style="background-color: #586F7C">
      <collapseHeader :collapseName="collapseName" :headerName="headerName"/>
      <div class="d-flex flex-column align-items-center mt-5 mb-5">
        <img src="../../assets/work-in-progress.png" width="20%">

      </div>
      <scrollToTop :collapseName="collapseName" />
    </b-card>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import scrollToTop from "../parts/scroll-to-top.vue";
import collapseHeader from "../parts/collapse-header.vue"

export default {
  name: "Work",

  data() {
    return {
      collapseName: 'work',
      headerName: 'Work'
    };
  },

  components: {
    scrollToTop,
    collapseHeader
  },

  computed: {
    ...mapGetters(["getskillsFE", "getskillsBE", "getothers", "getPageOpened"]),
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

</style>
