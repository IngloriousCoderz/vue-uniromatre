<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <TodoForm @submit="addTodo" />
    <TodoList
      :todos="todos"
      @span-click="toggleDone"
      @button-click="removeTodo"
    />
    <footer>
      Active: {{ active }}, Completed: {{ completed }}, Total: {{ total }}
    </footer>
  </div>
</template>

<script>
import axios from "axios";
import TodoForm from "./components/TodoForm.vue";
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    TodoForm,
    TodoList,
  },

  data() {
    return {
      todos: [],
    };
  },

  mounted() {
    this.fetchTodos();
  },

  computed: {
    active() {
      return this.todos.filter((todo) => !todo.done).length;
    },

    completed() {
      return this.todos.filter((todo) => todo.done).length;
    },

    total() {
      return this.todos.length;
    },
  },

  methods: {
    async fetchTodos() {
      const { data } = await axios.get("http://localhost:3000/todos");
      this.todos = data;
    },

    async addTodo(text) {
      await axios.post("http://localhost:3000/todos", { text });
      await this.fetchTodos();
    },

    async toggleDone(id) {
      const todo = this.todos.find((todo) => todo.id === id);
      await axios.patch(`http://localhost:3000/todos/${id}`, {
        done: !todo.done,
      });
      await this.fetchTodos();
    },

    async removeTodo(id) {
      await axios.delete(`http://localhost:3000/todos/${id}`);
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
