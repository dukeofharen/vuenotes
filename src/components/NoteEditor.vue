<template>
  <div class="note-editor col-md-12 row">
    <div class="col-md-12">
        <input type="text" v-model="title" class="form-control title" placeholder="Title..." />
    </div>
    <div class="col-md-6">
        <textarea v-model="content" class="form-control"></textarea>
    </div>
    <div class="col-md-6">
        {{content}}
    </div>
  </div>
</template>

<script>
export default {
  name: "NoteEditor",
  data() {
    return {
      title: '',
      content: ''
    };
  },
  watch: {
      content: (val) => {
      }
  }
};
</script>

<style scoped>
.title {
  width: 100%;
  margin-bottom: 10px;
}
</style>
