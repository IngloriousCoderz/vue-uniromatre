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

export default {
  name: "App",

  components: { TodoForm, TodoList, TodoFooter },

  data() {
    return {
      todos: [
        { id: 1, text: "Learn Vue.js", done: true },
        { id: 2, text: "Graduate", done: false },
        { id: 3, text: "Forget everything" },
      ],
    };
  },

  methods: {
    addTodo(text) {
      const maxId = this.todos.length
        ? this.todos[this.todos.length - 1].id
        : 0;
      this.todos.push({ id: maxId + 1, text });
    },

    toggleDone(id) {
      const todo = this.todos.find((todo) => todo.id === id);
      this.$set(todo, "done", !todo.done);
    },

    removeTodo(id) {
      const index = this.todos.findIndex((todo) => todo.id === id);
      this.todos.splice(index, 1);
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
