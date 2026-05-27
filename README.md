# Paw Tasks

A task manager app built with Vue 3 and TypeScript — created to practice Vue fundamentals by building something real.

---

## About

Paw Tasks lets you manage daily tasks with priority levels, filtering, completion tracking, and drag-to-reorder. Tasks persist across sessions via localStorage.

**Why I built this:** I'm learning Vue by doing — not just reading docs. This project covers reactivity, component architecture, props/emits, computed properties, v-model, and localStorage persistence in a practical context.

---

## Tech Stack

| Tool | Version |
|------|---------|
| Vue | 3 |
| TypeScript | 6 |
| Vite | 8 |

---

## Setup

**Requirements:**
- Node.js 18+
- VS Code with [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) extension

**Install and run:**

```bash
npm install
npm run dev
```

---

## Features

- Add tasks with priority levels (Urgent / Important / Soon / Later)
- Mark tasks complete with strikethrough
- Delete tasks
- Filter by priority
- Drag to reorder
- Persisted to localStorage
