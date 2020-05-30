<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <TodoForm @submit="addTodo" />
    <TodoList
      :todos="todos"
      @span-click="toggleDone"
      @button-click="removeTodo"
    />
    <TodoFooter :todos="todos" />
  </div>
</template>

<script>
import TodoForm from "./components/TodoForm.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";
import axios from "axios";

const http = axios.create({ baseURL: "http://localhost:3000/todos" });

export default {
  name: "App",

  components: { TodoForm, TodoList, TodoFooter },

  data() {
    return {
      todos: [],
    };
  },

  mounted() {
    this.fetchTodos();
  },

  methods: {
    async fetchTodos() {
      const { data } = await http.get("");
      this.todos = data;
    },

    async addTodo(text) {
      await http.post("", { text });
      await this.fetchTodos();
    },

    async toggleDone(id) {
      const todo = this.todos.find((todo) => todo.id === id);
      await http.patch(`/${id}`, {
        done: !todo.done,
      });
      await this.fetchTodos();
    },

    async removeTodo(id) {
      await http.delete(`/${id}`);
      await this.fetchTodos();
    },
  },
};
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
