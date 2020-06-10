<template>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <span
            :class="{ done: todo.done }"
            @click="onSpanClick(todo.id)">
            {{ todo.text }}
        </span>
        <button @click="onButtonClick(todo.id)">x</button>
      </li>
    </ul>
</template>

<script>
export default {
    props: {
        todos: Array
    },

    methods: {
        onSpanClick(id) {
            this.$emit('span-click', id)
        },

        onButtonClick(id) {
            this.$emit('button-click', id)
        }
    }
}
</script>

<style scoped>
ul {
  text-align: left;
}

.done {
  text-decoration: line-through;
}
</style>
