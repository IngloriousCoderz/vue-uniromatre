<template>
    <div>
        <h1>Hello world!</h1>

        <router-view></router-view>

        <router-link to="/local">Local</router-link> | <router-link to="/remote">Remote</router-link>
    </div>
</template>

<script>
// import { RouterView } from 'vue-router'

export default {
    // components: { RouterView }
}
</script>

<style scoped>

</style>