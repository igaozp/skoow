<template>
  <li v-for="item in items">
    {{ item.message }}
  </li>

  <li v-for="(item, index) of items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>

  <ul>
    <li v-for="value in myObject">
      {{ value }}
    </li>

    <li v-for="(value, key) in myObject">
      {{ key }}: {{ value }}
    </li>

    <li v-for="(value, key, index) in myObject">
      {{ index }}. {{ key }}: {{ value }}
    </li>
  </ul>

  <span v-for="n in 10">{{ n }}</span>

  <ul>
    <template v-for="item of items">
      <li>{{ item.message }}</li>
      <li class="divider" role="presentation"></li>
    </template>
  </ul>
</template>

<script setup lang="ts">
import {reactive, ref} from "vue";

const items = ref([
  { message: 'Foo' },
  { message: 'Bar' }
])
const parentMessage = ref('Parent')

const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})
</script>

<style scoped>

</style>