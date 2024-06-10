import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';


export const useHomeStore = defineStore('homeStore', {
    state: () => ({
        sidebarVisible: false,
        sentenceData: {}
    }),
    actions: {
       async getSentence() {
            const url = "https://latin-sentence-generator.onrender.com/api/sentence"    

            const resp = await fetch(url,  { mode: 'no-cors' })
            const data = await resp.json()
            this.sentenceData = this.formCard(this.formatTranslations(data))
            console.log(this.sentenceData)
        }, 
        formatTranslations(data) {
            Object.keys(data.sentence_info).forEach((key) => {
                data.sentence_info[key].translation = data.sentence_info[key].translation.join('/')
            })
           
            return data
        }, 
        formCard(data) {
            const cards = []
            for (const [key, value] of Object.entries(data.sentence_info)) {
                const card = {
                    uuid: uuidv4(), 
                    type: key, 
                    flipped: false,
                    front: value,
                    back: value.translation
                }
                cards.push(card)
            }
            console.log(data)
            return {
                cards: cards,
                ...data
            }
        }, 
        toggleCard(card) {
            card.flipped = !card.flipped;
        },
    }
});