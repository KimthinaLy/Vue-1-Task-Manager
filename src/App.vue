<script setup lang="ts">
import type { Task } from '@/types/task'
import { ref, watchEffect } from 'vue'
import TaskInput from '@/components/TaskInput.vue'
import TaskList from '@/components/TaskList.vue'  


const tasks = ref<Task[]>(JSON.parse(localStorage.getItem('tasks') || '[]') )

watchEffect(() => {
  localStorage.setItem('tasks', JSON.stringify(tasks.value))
})

function addNewTask(task: Task) {
  tasks.value.push(task)
}

function toggleComplete(id: Task['id']) {
  const task = tasks.value.find(t => t.id === id)
  if (task) {
    task.completed = !task.completed
  }
}

function deleteTask(id: Task['id']) {
  tasks.value = tasks.value.filter(t => t.id !== id)
}
</script>

<template>
  <header>
    <h1>Task Manager</h1>
  </header>
  <main>
    <TaskInput @add="addNewTask" />
    <TaskList :tasks="tasks" @toggle-complete="toggleComplete" @delete-task="deleteTask" />
  </main>
</template>