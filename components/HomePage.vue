<template>
    <div class="home">
        <h1>SALVE, MUNDE!</h1>
        <NuxtLink to="/my-vocabulary">my vocab</NuxtLink>
        <info-sidebar />
        <sentence />
        <sentence-info />
    </div>
</template>

<script setup>
import InfoSidebar from '../components/InfoSidebar.vue';
import Sentence from '../components/Sentence.vue';
import SentenceInfo from '../components/SentenceInfo.vue';

</script>

<style lang="scss"> 
.home{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>