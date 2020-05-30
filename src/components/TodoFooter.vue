<template>
  <footer>
    Active: {{ active }}, Completed: {{ completed }}, Total: {{ total }}
  </footer>
</template>

<script>
export default {
  props: {
    todos: Array,
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
};
</script>

<style scoped></style>
