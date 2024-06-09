<script setup>
const props = defineProps(['vocab'])
</script>

<template>
    <div class="vocab-list-card">
        <Panel :header="props.vocab.translation" toggleable collapsed>
            <CardFront :front="props.vocab" />
        </Panel>
    </div>
</template>

<style scoped lang="scss">
.vocab-list-card{
    margin: 20px 0; 
}
</style>