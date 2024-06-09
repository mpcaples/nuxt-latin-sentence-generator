<script setup>
const props = defineProps(['front'])

const titleObj = ref({
        abl_agent: "Ablative Agent",
        adjective: "Adjective",
        dir_obj: "Direct Object",   
        subject: "Subject",
        verb: "Verb", 
        gender: "Gender", 
        fem: "Feminine", 
        masc: "Masculine", 
        neut: "Neuter", 
        noun_base: "Noun base", 
        noun_decl: "Declension", 
        nom: "Nominative", 
        perf_act_inf: "Perfect active infinitive", 
        transitive: "Transitive", 
        perf_pass_part: "Perfect passive participle", 
        verb_stem_act: "Verb stem active", 
        pres_act_1st_sg: "Present active 1st person singular", 
        pres_act_inf: "Present active infinitive", 
        translation: "Translation"
    })
</script>

<template>
    <div class="card-front-component" v-for="item, key in props.front">
        <Tag :value="titleObj[key]" />
        <span>{{ item }}</span>
    </div>
</template>

<style lang="scss">
.card-front-component{
    .p-tag.p-component{
        margin-right: 5px;
    }
}
</style>