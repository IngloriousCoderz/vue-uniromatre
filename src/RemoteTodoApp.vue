<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    
    <TodoForm @submit="addTodo" />

    <TodoList :todos="todos" @span-click="toggleDone" @button-click="removeTodo" />

    <TodoFooter :todos="todos" />
  </div>
</template>

<script>
import axios from 'axios'

import TodoForm from './components/TodoForm.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

const http = axios.create({ baseURL: 'http://localhost:3000/todos' })

export default {
  name: 'App',

  components: { TodoForm, TodoList, TodoFooter },

  data() {
    return {
      todos: []
    }
  },

  mounted() {
    this.fetchTodos()
  },

  methods: {
    async fetchTodos() {
      const response = await http.get('')
      this.todos = response.data
    },

    async addTodo(text) {
      const maxId = this.todos.length ? this.todos[this.todos.length - 1].id : 0
      const todo = { id: maxId + 1, text }
      this.todos.push(todo)
        
      const index = this.todos.findIndex((t) => t.id === todo.id)

      try {
        const response = await http.post('', { text })
        this.todos[index] = response.data
      } catch (error) {
        this.todos.splice(index, 1)
      }
    },

    async toggleDone(id) {
      const todo = this.todos.find((todo) => todo.id === id)
      // // todo.done = !todo.done
      // this.$set(todo, 'done', !todo.done)
      await http.patch('/' + id, { done: !todo.done })
      await this.fetchTodos()
    },

    async removeTodo(id) {
      // const index = this.todos.findIndex((todo) => todo.id === id)
      // this.todos.splice(index, 1)
      await http.delete('/' + id)
      await this.fetchTodos()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 400px;
  margin: 0 auto;
  margin-top: 60px;
}
</style>
