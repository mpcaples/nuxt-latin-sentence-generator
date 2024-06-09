<template>
    <div  class="vocab-cards">
        <Splitter style="height: 400px" class="mb-5">
    <SplitterPanel v-for="card in homeStore.sentenceData.cards">  
        <VocabCard 
            :card="card"
        />
    </SplitterPanel>
</Splitter>
      
    </div>
</template>

<script setup>
import { useHomeStore } from '../stores/homestore';
import VocabCard from './VocabCard.vue';
const homeStore = useHomeStore();
await homeStore.getSentence();
</script>

<style lang="scss">
.vocab-cards{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 20px; 
}
</style>