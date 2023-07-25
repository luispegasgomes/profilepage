<template>
    <div class="d-flex flex-column align-items-center justify-content-center txt col-4">
        <button v-on:click="openPage(collapseName)" v-scroll-to="collapseNumber" class="mx-4 mainBtns">
            <img :src="getIconPath(collapseName)" width="30" height="30" />
        </button>

        <p class="colorDarkBlue fontAsap">{{headerName}}</p>
    </div>
</template>

<script>
import { getIcon } from '../../helpers/getImgSrc';
import { mapGetters, mapMutations } from "vuex";
export default {
    name: "MainButton",
    props: ['collapseName', 'headerName', 'collapseNumber'],

    computed: {
        ...mapGetters(["getPageOpened"]),
    },

    components: {
    },

    methods: {
        openPage(value) {
            this.CHANGE_PAGE_OPEN(value);
        },
        getIconPath(value) {
            return getIcon(value);
        },
        ...mapMutations(["CHANGE_PAGE_OPEN"]),
    },
};
</script>

<style scoped>
.txt:hover {
    transform: scale(1.4);
    transition: all 0.5s;
}

.mainBtns {
    border: none;
    border-radius: 100px;
    background-color: #102b3f;
    width: 60px;
    height: 60px;
}

.mainBtns:hover {
    background-color: #DBC7BE;
}
</style>