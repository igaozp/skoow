<template>
  <button @click="count++">Add</button>
  <p>Count is: {{ count }}</p>

  <button @click="greet">Greet</button>

  <button @click="say('hello')">Say Hello</button>
  <button @click="say('bye')">Say bye</button>

  <button @click="warn('Form cannot be submitted yet.', $event)">Submit</button>
  <button @click="(event) => warn('Form cannot be submitted yet.', event)">
    Submit
  </button>
</template>

<script setup lang="ts">
import {ref} from "vue";

const count = ref(0);

const name = ref("Vue.js");

function greet(event: any) {
  alert(`Hello ${name.value}!`);
  if (event) {
    alert(event.target.tagName);
  }
}

function say(message: string) {
  alert(message);
}

function warn(message: string, event: any) {
  if (event) {
    event.preventDefault();
  }
  alert(message);
}
</script>

<style scoped></style>
