<template>
  <div class="note col-md-12 row">
    <strong>{{title}}</strong>
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
.note {
    width: 100%;
    color: #FFFFFF;
    background-color: #00AAFF;
    margin-bottom: 10px;
    font-size: 1.5em;
}
</style>
