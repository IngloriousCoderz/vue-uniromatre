<template>
    <form @submit="onSubmit">
      <input placeholder="What next?" v-model="text" autofocus />
      <button>Add</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            text: ''
        }
    },

    methods: {
        onSubmit(event) {
            event.preventDefault()
            this.$emit('submit', this.text)
            this.text = ''
        }
    }
}
</script>

<style scoped>

</style>