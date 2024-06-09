import { defineStore } from 'pinia';
import { useHomeStore } from './homestore'; 

export const useVocabularyListStore = defineStore('vocabularyListStore', () => {
    const homeStore = useHomeStore()
    const vocabList = ref([])


     
    const addToVocabList = (uuid) => {
        vocabList.value.push(homeStore.sentenceData.cards.find((card) => card.uuid === uuid))
        console.log(vocabList)
    }  

    const getNouns = computed(() => vocabList.value.filter((word) => word.type == 'subject' || word.type == 'dir_obj' || word.type == 'abl_agent'))
    const getVerbs = computed(() => vocabList.value.filter((word) => word.type == 'verb'))
    const getAdjectives = computed(() => vocabList.value.filter((word) => word.type == 'adjective'))


    return {vocabList, addToVocabList, getNouns, getVerbs, getAdjectives}
}, 
    {
        persist: true,
    }
)