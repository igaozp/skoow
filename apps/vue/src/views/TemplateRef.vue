<template>
  <input ref="input"/>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";

const input = ref(null);

onMounted(() => {
  if (input.value) {
    input.value.focus();
    console.log("Input focus");
  }
});
</script>

<style scoped></style>
