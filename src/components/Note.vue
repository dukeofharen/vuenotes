<template>
  <div class="note">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: "Note",
  props: {
    title: String,
    content: String
  }
};
</script>

<style scoped>
</style>
