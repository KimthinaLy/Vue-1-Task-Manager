<script setup lang="ts">
import { Priority } from '@/types/task'
const priorityOptions = Object.entries(Priority).filter(([key]) => isNaN(Number(key))) as [string, Priority][]

const props = defineProps<{
    filter: Priority | null
}>()
const emit = defineEmits<{
    'selected-filter': [filter: Priority | null]
}>()

function selectFilter(filterValue: Priority | null) {
    emit('selected-filter', filterValue)
}
</script>
<template>
    <button @click="selectFilter(null)">All</button>
    <button v-for="[label, value] in priorityOptions" :key="value" @click="selectFilter(value )"
    :class="{ 'active': props.filter === value }">
        {{ label }}
    </button>
</template>