<template>
    <div class="modalContentClass">
        <b-modal v-model="show" centered @hidden="onModalHidden" hide-header hide-footer
            body-bg-variant="dark">
            <!-- Modal Body -->
            <div class="d-flex flex-column align-items-center m-2">
                <span style="font-size: 20px; width: 100%;" class="colorBlue">{{professionalInfo.date}}</span>
                <hr class="col-12 mt-2 mb-3 colorBlue rule" />
                <img :src="getInstitutionLogo(professionalInfo.logo)" width="100" class="m-2">
                <span class="colorBlue fontAsap m-2" style="font-size: 20px;">{{ professionalInfo.title }}</span>
                <span class="colorWhite m-1 text-center">{{ professionalInfo.description }}</span>
                <b-card no-body class="col-11 col-xl-10 mb-4 mt-3 cardSkills bgBlue" v-if="professionalInfo.skills">
                    <span class="p-2 bgBlue fontAsap text-center" style="font-size: 1.2rem;">Acquired Skills</span>
                    <div class="container colorWhite justify-content-center mb-2">
                        <img class="m-2" style="border-radius: 4px; height: 30px; width: 80px;"
                            v-for="(info, index) in professionalInfo.skills" :key="index"
                            :src="getSkillIcon(info.text, info.name, info.color)">
                    </div>

                </b-card>
                <div class="btns-info mb-3" v-if="professionalInfo.poster && professionalInfo.video">
                    <a class="colorWhite m-3" :href="professionalInfo.poster" target="_blank">Preview Poster</a>
                    <a class="colorWhite m-3" :href="professionalInfo.video" target="_blank">Preview Video</a>
                </div>
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
            professionalInfo: {},
        };
    },


    computed: {
        ...mapGetters(["getProfessional", "getOneProfessional"]),
    },

    methods: {
        getInstitutionLogo,
        getSkillIcon,
        getIcon,
        showModal(value) {
            this.show = true;
            this.professionalInfo = this.getOneProfessional(value)
        },
        hideModal() {
            this.show = false;
        },
        onModalHidden() {
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