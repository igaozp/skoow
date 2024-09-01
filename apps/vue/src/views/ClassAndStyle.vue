<template>
  <div :class="{ active: isActive }">Class</div>
  <div class="static" :class="{ active: isActive, 'text-danger': hasError }">
    Class
  </div>
  <div :class="classObject">Class</div>
  <div :class="[activeClass, errorClass]">Class</div>
  <MyComponent class="baz foo"></MyComponent>
</template>

<script setup lang="ts">
import {reactive, ref} from "vue";
import MyComponent from "../components/MyComponent.vue";

const isActive = ref(true);
const hasError = ref(false);

const classObject = reactive({
  active: true,
  "text-danger": false,
});

const activeClass = ref("active");
const errorClass = ref("text-danger");
</script>

<style scoped></style>
