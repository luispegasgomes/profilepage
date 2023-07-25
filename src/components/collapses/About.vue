<template>
    <div id="collapse-about" v-show="getPageOpened === 'about'">
      <b-card style="background-color: #586F7C">
        <collapseHeader :collapseName="collapseName" :headerName="headerName"/>
        <div
          class="
            mt-4
            fontBarlow
            colorWhite
            d-flex
            flex-column
            align-items-center
          "
        >
          <img src="../../assets/curriculo.png" width="50px" class="mt-4" />
          <p class="text col-10 mt-3">
            I love programming because I really like to understand how things
            are built, this whole process of construction from protyping to the
            final product, fascinates me because it is a huge satisfaction when
            we see that our work was successful and corresponds to what is
            intended . I also love working in a team, as several people working
            with the same purpose but with different ways of thinking, make each
            of us learn from the tips of other colleagues, making the work more
            solid and consistent and also enriching the our skills and the way
            we deal with other everyday situations because we learn different
            ways of thinking.
          </p>

          <img src="../../assets/mail.png" width="50px" class="mt-5" />
          <p class="text mt-3">luispegasgomes@gmail.com</p>

          <img src="../../assets/book.png" width="50px" class="mt-5" />
          <p class="text mt-3">
            Technologies and Information Systems for the Web <br />
            ESMAD | Escola Superior de Media Artes e Design
          </p>
          <img src="../../assets/casa.png" width="50px" class="mt-5" />
          <p class="text mt-3">Santa Marinha do Zêzere, Baião</p>
          <img src="../../assets/birth.png" width="50px" class="mt-5" />
          <p class="text mt-3">September 15, 2002</p>

          <scrollToTop :collapseName="collapseName"/>
        </div>
      </b-card>
    </div>
</template>


<script>

import { mapGetters, mapMutations } from "vuex";
import scrollToTop from "../parts/scroll-to-top.vue";
import collapseHeader from "../parts/collapse-header.vue"

export default {
  name: "About",
  data() {
    return {
      collapseName: 'about',
      headerName: 'About Me'
    };
  },

  computed: {
    ...mapGetters(["getPageOpened"]),
  },

  components: {
    scrollToTop,
    collapseHeader,
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
.text {
  font-size: 25px;
  text-align: center;
}

</style>
