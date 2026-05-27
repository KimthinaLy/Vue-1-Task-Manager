<script setup lang="ts">
import { ref } from 'vue'
import { Priority } from '@/types/task'
import type { Task } from '@/types/task'

const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]')
let id = savedTasks.length > 0 ? Math.max(...savedTasks.map((t: Task) => t.id)) + 1 : 0
const description = ref('')
const priority = ref<Priority>(Priority.URGENT)
const priorityOptions = Object.entries(Priority).filter(([key]) => isNaN(Number(key)))

const emit = defineEmits<{
  add: [task: Task]
}>()

function addTask() {
  if (!description.value.trim()) return
  emit('add', {
    id: id++,
    description: description.value.trim(),
    completed: false,
    priority: priority.value
  })
  description.value = ''
}
</script>

<template>
  <input v-model.trim="description" placeholder="Task description" required />
  <select v-model="priority">
    <option v-for="[label, value] in priorityOptions" :key="value" :value="value">
      {{ label }}
    </option>
  </select>
  <button @click="addTask">Add</button>
</template>