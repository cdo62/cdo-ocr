<template>
  <v-sheet>
    {{ getResult }}
  </v-sheet>

</template>

<script>
export default {
  name: "ResultInfo",
  computed: {
    getResult() {
      console.log(this.$store.state.ocr.result)
      return this.$store.state.ocr.result;
    }
  }
}
</script>

<style scoped>

</style>
