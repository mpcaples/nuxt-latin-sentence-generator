<template>
    <div class="sentence-section">
        <Card>
            <template #title>
            </template>
            <template #content>
                <div class="typewriter" :key="homeStore.sentenceData.sentence">
                    <p>{{ homeStore.sentenceData.sentence }}.</p>
                </div>
                <Button label="New Sentence" @click="homeStore.getSentence"/>
            </template>
        </Card>
    </div>
</template>

<script setup>
import Button from 'primevue/button';
import Card from 'primevue/card';
import { useHomeStore } from '../stores/homestore'
const homeStore = useHomeStore();


</script>

<style lang="scss">
.sentence-section{
    padding: 20px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .typewriter p {
        overflow: hidden; /* Ensures the content is not revealed until the animation */
        border-right: .15em solid orange; /* The typwriter cursor */
        white-space: nowrap; /* Keeps the content on a single line */
        margin: 0 auto; /* Gives that scrolling effect as the typing happens */
        letter-spacing: .15em; /* Adjust as needed */
        animation: 
            typing 3.5s steps(40, end),
            blink-caret .75s step-end infinite;
        }

    /* The typing effect */
    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
    }

    /* The typewriter cursor effect */
    @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: orange; }
    }   

    p{
        font-size: 18px;
        font-weight: bold;
        margin: 1rem;
         
        text-align: center;
        font-family: 'Courier New', Courier, monospace;
    }
    .p-card-title{
        background-color: rgba(245, 245, 245, 0.538);
    }
    .p-card-content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
</style>

