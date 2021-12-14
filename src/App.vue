<template>
    <nav class="mb-8 space-x-2 text-blue-500">
        <router-link class="hover:underline hover:text-blue-600" :to="{ name: 'home' }">Home</router-link>
        <router-link class="hover:underline hover:text-blue-600" :to="{ name: 'about' }">About</router-link>
    </nav>

    <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'App'
})
</script>
