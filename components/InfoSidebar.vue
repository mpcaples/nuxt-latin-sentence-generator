<template>
    <div class="info-sidebar">
        <Sidebar v-model:visible="homeStore.sidebarVisible" header="About the Latin Random Sentence Generator" >
            <p>Thank you for visiting the Latin Sentence Generator!</p>
            <small>developed by Madeline Caples</small>
            <p>This program generates a sentence in the present tense from a trivial subset of the Latin language. It is written in Python, with grammar rules specified for forming grammatically correct sentences from vocabulary that was scraped from <a href="http://latindictionary.wikidot.com/printer--friendly/">Wikidot's Latin Dictionary</a>.</p> 
            <p>Please don't take the sentences too seriously, as they are not representative of language people would actually use. Rather, this program is meant to demonstrate the capabilities of Python in generating sentences according to regular rules. Enjoy!</p>
        </Sidebar>
        <Button label="Info" @click="showSidebar" />
    </div>
</template>

<script setup>
import Sidebar from 'primevue/sidebar';
import Button from 'primevue/button';
import { useHomeStore } from '../stores/homestore'
const homeStore = useHomeStore();
const showSidebar = () => {
    homeStore.sidebarVisible = true
}

</script>

<style lang="scss">
    .p-sidebar-header{
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        font-size: 18px;
    }

    .p-sidebar-content{
        font-family: 'Roboto', sans-serif;
    }
 
    .p-sidebar-mask{
        background-color:rgba(245, 245, 245, 0.754);
    }

    .p-button.p-component{
        border: none;
        border-radius: 5px;
        font-size: 16px;
        font-weight: bold;
        margin: 1rem;
        padding: .5rem 1rem;
        box-shadow: 0 0 5px 0 rgba(0,0,0,.2);
    }
</style>