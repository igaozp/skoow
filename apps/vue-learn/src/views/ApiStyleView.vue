<template>
  <OptionStyle></OptionStyle>
  <CompositionStyle></CompositionStyle>
</template>

<script>
import OptionStyle from "@/components/apistyle/OptionsStyle.vue";
import CompositionStyle from "@/components/apistyle/CompositionStyle.vue";

export default {
  name: "ApiStyleView",
  components: {CompositionStyle, OptionStyle}
}
</script>

<style scoped>

</style>