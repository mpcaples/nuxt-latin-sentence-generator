<template>
    <div class="vocab-card-container" >
        <div class="vocab-card " 
            @click="cardOne == 'start' ? (cardOne = 'flipped' ) : (cardOne = 'start' )"
            v-bind:class="{ flipme: cardOne == 'flipped' }"
        >
                <Card class="card-face card-front">
                    <template #title>
                        <div class="flex">
                            <Toast />
                            <Button class="no-padding" aria-label="Add to vocab list" @click="addToList(card.uuid)">
                                <Icon name="prime:plus-circle" size="2em" />
                            </Button>
                            <span> Add to vocab</span>
                        </div>
                    </template>
                    <template #content>
                        <ScrollPanel 
                            style="width: 100%; height: 350px" 
                            :pt="{
                                wrapper: {
                                    style: { 'border-right': '10px solid var(--surface-ground)' }
                                },
                                barY: 'hover:bg-primary-400 bg-primary-300 opacity-100'
                            }"
                        >
                            <!-- <p v-for="option, value in props.options"><span class="pos-title">{{ option[0] }}:</span> {{ option[1] }}</p> 
                            {{ card.flipped ? card.back : card.front }} -->
                            <!-- {{ card.front }} -->
                            <CardFront :front="card.front" />
                        </ScrollPanel>
                    </template>
               </Card>
                <Card class="card-face card-back">
                    <template #title>
                        <h3> Translation </h3>
                    </template>
                    <template #content>
                        <ScrollPanel 
                            style="width: 100%; height: 150px" 
                            :pt="{
                                wrapper: {
                                    style: { 'border-right': '10px solid var(--surface-ground)' }
                                },
                                bary: 'hover:bg-primary-400 bg-primary-300 opacity-100'
                            }"
                        >
                            <!-- <p v-for="option, value in props.options"><span class="pos-title">{{ option[0] }}:</span> {{ option[1] }}</p> 
                            {{ card.flipped ? card.back : card.front }} -->
                            {{ card.back  }}
                        </ScrollPanel>
                    </template>
               </Card>
        </div>
    </div>
    
    
    </template>
    
    <script setup>
    import { ref } from 'vue';
    import Card from 'primevue/card';
    import ScrollPanel from 'primevue/scrollpanel';

    import Toast from 'primevue/toast';

    import { useToast } from 'primevue/usetoast';

    const toast = useToast();


    import { useVocabularyListStore } from '../stores/vocabulary-list'; 
    const vocabularyListStore = useVocabularyListStore(); 
    
    const cardOne = ref('start');   
    
    const props = defineProps({
        card: Object,
    })
    
    
    const addToList = (uuid) => {
        console.log(uuid)
        vocabularyListStore.addToVocabList(uuid)
        toast.add({ severity: 'info', summary: 'Success!!', detail: 'You added a word to your vocabulary list!', life: 5000 })
    }
    
    </script>
    
    <style lang="scss">
    .vocab-card-container{
        .flipped{
        transform: rotateY(180deg);
        transition: transform 0.5s ease;
      }
    
        .vocab-card{
    
        background-color: transparent;
        border: none;
        min-height: 400px;
        max-width: 200px;
        min-width: 300px;
        transition: transform 1s;
        transform-style: preserve-3d;
        cursor: pointer;
        position: relative;
        h3{
           margin: 0; 
           
        }
        .p-button.p-component.no-padding{
                padding: 0; 
                margin: 0; 
                margin-left: 10px;
                border-radius: 50%;
                height: 34px;
                width: 34px;
            }
        .pos-title{
           color: darkblue;
           font-weight: bold; 

          
        }

        .p-card-body{
            min-height: 400px;
            max-width: 200px;
            min-width: 300px;
        }
    }
    
  

    .card-face{
        position: absolute;
        backface-visibility: hidden;
    }
    
    .card-front{
        // .flex{
        //     display: flex;
        // }
    }
    
    .card-back{
    transform: rotateY(180deg);
    }
    
    .flipme {
      transform: rotateY(180deg);
    }
    }
    
    </style>