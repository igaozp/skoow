<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>

<script>
export default {
  name: "OptionStyle",

  data() {
    return {
      count: 0,
    };
  },

  methods: {
    increment() {
      this.count++;
    },
  },

  mounted() {
    console.log("The initial count is ${this.count}.");
  },
};
</script>

<style scoped></style>
