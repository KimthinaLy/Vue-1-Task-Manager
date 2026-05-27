<script setup lang="ts">
import type { Task } from '@/types/task'

const props = defineProps<{
    task: Task
}>()

const emit = defineEmits<{
    'toggle-complete': [id: Task['id']]
    'delete-task': [id: Task['id']]
}>()

function toggleComplete() {
   emit('toggle-complete', props.task.id) 
}
function deleteTask() {
    emit('delete-task', props.task.id)
}
</script>
<template>
    <div>
        <input type="checkbox" :checked="props.task.completed" @change="toggleComplete" />
        <span :class="{ 'line-through': props.task.completed}">{{ props.task.description }}</span>
        <button @click="deleteTask">Delete</button>
    </div>
</template>