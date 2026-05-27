<script setup lang="ts">
import type { Task } from '@/types/task'
import { Priority } from '@/types/task'
import { ref, computed} from 'vue'
import TaskItem from '@/components/TaskItem.vue'
import TaskFilter from '@/components/TaskFilter.vue'

const props = defineProps<{
    tasks: Task[]
}>()

const emit = defineEmits<{
    'toggle-complete': [id: Task['id']]
    'delete-task': [id: Task['id']]
}>()

const selectedFilter = ref<Priority | null>(null)

const filteredTasks = computed(
    () =>{
        if (selectedFilter.value === null) {
            return props.tasks
        }
        return props.tasks.filter(task => task.priority === selectedFilter.value)
    }
)
function handleToggleComplete(id: Task['id']) {
    emit('toggle-complete', id)
}

function handleDeleteTask(id: Task['id']) {
    emit('delete-task', id)
}

function handleFilterChange(filter: Priority | null) {
    selectedFilter.value = filter
}
</script>

<template>
    <div v-for="task in filteredTasks" :key="task.id" class="task-item">
        <TaskItem :task="task" @toggle-complete="handleToggleComplete" @delete-task="handleDeleteTask" />
    </div>

    <TaskFilter :filter="selectedFilter" @selected-filter="handleFilterChange" />
</template>