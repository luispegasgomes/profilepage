<template>
    <div class="modalContentClass">
        <b-modal v-model="show" centered @hidden="onModalHidden" hide-header hide-footer body-bg-variant="dark">
            <div class="d-flex flex-column align-items-center justify-content-between">
                <h1 class="mb-4 fontAsap colorBlue" style="font-size:30px">{{ projectInfo.name }}</h1>
                <div class="fontBarlow" style="font-size: 30px">
                    <img :src="projectInfo.promo" width="300px" />
                </div>
                <img src="../../assets/icons/close.png" width="10%" @click="hideModal" style="cursor: pointer;" class="mt-3">
            </div>
        </b-modal>
    </div>
</template>

<script>

import { mapGetters } from "vuex";
import { getInstitutionLogo, getSkillIcon, getIcon } from '../../helpers/getImgSrc';

export default {
    data() {
        return {
            show: false,
            projectInfo: {},
        };
    },


    computed: {
        ...mapGetters(["getProject"]),
    },

    methods: {
        getInstitutionLogo,
        getSkillIcon,
        getIcon,
        showModal(value) {
            this.show = true;
            this.projectInfo = this.getProject(value)
        },
        hideModal() {
            this.show = false;
        },
        onModalHidden() {
            console.log('Modal fechado');
        },
    },

};
</script>

<style scoped>
</style>