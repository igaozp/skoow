<template>
  <p class="foo bar">My Component</p>
  <p :class="$attrs.class">Hi!</p>
  <span>This is a child component</span>
</template>

<script>
export default {
  name: "MyComponent"
}
</script>

<style scoped>

</style>