<template>
  <!-- Text interpolation -->
  <span>Message: {{ msg }}</span>

  <!-- Raw html -->
  <p>Using text interpolation: {{ rawHtml }}</p>
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>

  <!-- Attribute bindings -->
  <div v-bind:id="dynamicId">Attribute bindings</div>
  <div :id="dynamicId">Another attribute bindings</div>

  <!-- Boolean attribute -->
  <button :disabled="isButtonDisabled">Button</button>

  <!-- Dynamically binding multiple attributes -->
  <div v-bind="objectOfAttrs">Dynamically binding multiple attributes</div>

  <p v-if="seen">Now you see me</p>

  <a v-bind:href="url">Google</a>
</template>

<script>
export default {
  name: "TemplateSyntaxView",

  data() {
    return {
      msg: "Mustache value",
      rawHtml: '<span style="color: red">This should be red.</span>',
      dynamicId: "This is a id attribute",
      isButtonDisabled: true,
      objectOfAttrs: {
        id: "container",
        class: "wrapper",
      },
      seen: true,
      url: "https://www.google.com",
    };
  },
};
</script>

<style scoped></style>
