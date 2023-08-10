<template>
    <div class="modalContentClass">
        <b-modal id="modal-1" title="Conta-nos o teu dia!" ok-title="Confirmar" hide-header hide-footer>

            <div class="d-flex flex-column align-items-center justify-content-between">
                <h1 class="mb-4 fontAsap colorDarkBlue" style="font-size:30px">{{ projectTitle }}</h1>
                <div class="fontBarlow" style="font-size: 30px">
                    <img :src="imgmodal" width="300px" />
                </div>
                <img src="../../assets/icons/close.png" width="10%" @click="hideModal" style="cursor: pointer;">
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
            academicInfo: {},
        };
    },


    computed: {
        ...mapGetters(["getAcademic"]),
    },

    methods: {
        getInstitutionLogo,
        getSkillIcon,
        getIcon,
        showModal(value) {
            this.show = true;
            this.academicInfo = this.getAcademic(value)
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

.rule {
  opacity: 1;
  height: 2px;
}
.cardSkills {
    background-color: #95ADB6;
    border: solid 6px #586F7C;
}

.container {
    display: flex;
    flex-wrap: wrap;
}
</style>