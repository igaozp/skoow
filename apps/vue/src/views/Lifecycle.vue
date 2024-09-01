<template>
  <button @click="count++">{{ count }}</button>
</template>

<script setup lang="ts">
import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref} from "vue";

const count = ref(0)

onBeforeMount(() => {
  console.log('Before Mounted')
})

onMounted(() => {
  console.log('Mounted')
})

onBeforeUnmount(() => {
  console.log('Before Unmount')
})

onUnmounted(() => {
  console.log('Unmounted')
})

onBeforeUpdate(() => {
  console.log('Before Update')
})

onUpdated(() => {
  console.log('Update')
})
</script>

<style scoped>

</style>