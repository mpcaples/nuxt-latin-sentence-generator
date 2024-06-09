<script setup>
import { useVocabularyListStore } from '../stores/vocabulary-list'; 
const vocabularyListStore = useVocabularyListStore(); 
</script>

<template>
    <div class="vocab-list">
        <div class="header-thing">
            <h1>My Vocab list</h1>
            <NuxtLink to="/">home</NuxtLink>
        </div>
     
        <div v-if="vocabularyListStore.getNouns.length > 0">
            <h3>Nouns</h3>
            <div v-for="vocabItem in vocabularyListStore.getNouns" >
                <VocabListCard :vocab="vocabItem.front" />
            </div>
        </div>
        <div v-if="vocabularyListStore.getVerbs.length > 0">
            <h3>Verbs</h3>
            <div v-for="vocabItem in vocabularyListStore.getVerbs" >
                <VocabListCard :vocab="vocabItem.front" />
            </div>
        </div>
        <div v-if="vocabularyListStore.getAdjectives.length > 0">
            <h3>Adjectives</h3>
            <div v-for="vocabItem in vocabularyListStore.getAdjectives" >
                <VocabListCard :vocab="vocabItem.front" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.vocab-list{
    padding: 10px 25vw; 

    .header-thing{
        display: flex; 
        justify-content: space-between;
        align-items: center;

        a{
            text-decoration: none;
            border: solid 1px; 
            border-radius: 20px;
            padding: 10px; 
        }
    }
}
</style>