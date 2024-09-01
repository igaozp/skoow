<template>
  <p>
    Ask a yes/no question:
    <input v-model="question"/>
  </p>
  <p>{{ answer }}</p>

  <button @click="x++">{{ x }}</button>
</template>

<script setup lang="ts">
import {reactive, ref, watch, watchEffect} from "vue";

const question = ref("");
const answer = ref("Questions usually contain a question mark. ;-)");

watch(
    question,
    async (newQuestion, oldQuestion) => {
      if (newQuestion.indexOf("?") > -1) {
        answer.value = "Thinking...";
        try {
          const res = await fetch("https://yesno.wtf/api");
          answer.value = (await res.json()).answer;
        } catch (error) {
          answer.value = "Error! Could not reach the API. " + error;
        }
      }
    },
    {immediate: true},
);

const x = ref(0);
const y = ref(0);

watch(x, (newX) => {
  console.log(`x is ${newX}`);
});

watch(
    () => x.value + y.value,
    (sum) => {
      console.log(`sum of x + y is: ${sum}`);
    },
);

watch([x, () => y.value], ([newX, newY]) => {
  console.log(`x is ${newX} and y is ${newY}`);
});

const obj = reactive({count: 0});
watch(
    () => obj.count,
    (count) => {
      console.log(`count is : ${count}`);
    },
);

const todoId = ref(1);
const data = ref(null);

watchEffect(async () => {
  const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId.value}`,
  );
  data.value = await response.json();
});
</script>

<style scoped></style>
