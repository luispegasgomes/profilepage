<template>
    <div class="d-flex flex-column align-items-center">
        <button
            class="d-flex flex-column align-items-center backtotop mt-3"
            v-on:click="openPage(collapseName)"
          >
            <img width="40" src="../../assets/icons/up.png" alt="Back to top!" />
            <span class="mt-2 colorDarkBlue">Back to top!</span>
          </button>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "ScrollToTop",
  props: ['collapseName'],

  computed: {
    ...mapGetters(["getPageOpened"]),
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

.backtotop {
  border: none;
  border-radius: 11px;
  background-color: #586F7C;
  animation: wiggle 1.2s infinite;
}

@keyframes wiggle {
  2% {
    -webkit-transform: translateY(-3px);
    transform: translateY(-3px);
  }
  4% {
    -webkit-transform: translateY(3px);
    transform: translateY(3px);
  }
  6% {
    -webkit-transform: translateY(-3px);
    transform: translateY(-3px);
  }
  8% {
    -webkit-transform: translateY(3px);
    transform: translateY(3px);
  }
  10% {
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
  }
  12% {
    -webkit-transform: translateY(2px);
    transform: translateY(2px);
  }
  14% {
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
  }
  16% {
    -webkit-transform: translateY(2px);
    transform: translateY(2px);
  }
  18% {
    -webkit-transform: translateY(-1px);
    transform: translateY(-1px);
  }
  20% {
    -webkit-transform: translateY(1px);
    transform: translateY(1px);
  }
}
</style>