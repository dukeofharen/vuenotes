<template>
  <div class="note col-md-12 row" v-on:click="noteClick(id)">
    <strong>{{title}}</strong>
  </div>
</template>

<script>
export default {
  name: "Note",
  props: {
    id: Number,
    title: String,
    content: String
  },
  methods: {
    noteClick (id) {
      this.$router.push({ name: 'EditNote', params: { id } })
    }
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
    cursor: pointer;
}
</style>
