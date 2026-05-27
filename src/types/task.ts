export enum Priority {
  URGENT = 1,
  IMPORTANT = 2,
  LESS_URGENT = 3,
  LESS_IMPORTANT = 4
}

export interface Task {
  id: number
  description: string
  completed: boolean
  priority: Priority
}


