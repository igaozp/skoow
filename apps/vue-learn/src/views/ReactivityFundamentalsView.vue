<template>
  <button @click="increment">
    {{ state.count }}
  </button>
  <button @click="mutateDeeply">{{ obj.nested.count }}</button>
</template>

<script setup>
import { ref } from "vue"

const state = ref({ count: 1 })

const obj = ref({
  nested: { count: 0 },
  arr: ['foo', 'bar']
})

function increment() {
  state.value.count++
}

function mutateDeeply() {
  obj.value.nested.count++
  obj.value.arr.push('bza')
}

</script>

<style scoped>

</style>