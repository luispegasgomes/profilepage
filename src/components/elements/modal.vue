<template>
    <div class="modalContentClass">
        <b-modal v-model="show" title="Minha Modal" centered @hidden="onModalHidden" hide-header hide-footer
            body-bg-variant="dark">
            <!-- Modal Body -->
            <div class="d-flex flex-column align-items-center m-2">
                <span style="font-size: 20px; width: 100%;" class="colorBlue">{{academicInfo.date}}</span>
                <hr class="col-12 mt-2 mb-3 colorBlue rule" />
                <img :src="getInstitutionLogo(academicInfo.logo)" width="100" class="m-2">
                <span class="colorBlue fontAsap m-2">{{ academicInfo.title }}</span>
                <span class="colorWhite m-2 text-center">{{ academicInfo.subtitle }}</span>
                <span class="colorWhite m-2 mb-4">Final average grade : {{ academicInfo.average }} values</span>

                <b-card no-body class="col-11 mb-4 cardSkills bgBlue" v-if="academicInfo.skills">
                    <span class="p-2 bgBlue fontAsap text-center" style="font-size: 1.2rem;">Acquired Skills</span>
                    <div class="container colorWhite justify-content-center mb-2">
                        <img class="m-2" style="border-radius: 4px; height: 30px; width: 80px;"
                            v-for="(info, index) in academicInfo.skills" :key="index"
                            :src="getSkillIcon(info.text, info.name, info.color)">
                    </div>

                </b-card>
                <img :src="getIcon('close')" width="10%" @click="hideModal" style="cursor: pointer;">
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