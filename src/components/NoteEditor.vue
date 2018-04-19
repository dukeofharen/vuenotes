<template>
  <div class="note-editor col-md-12 row">
    <div class="col-md-12">
        <input type="text" v-model="title" class="form-control title" placeholder="Title..." />
    </div>
    <div class="col-md-6">
        <textarea v-model="content" class="form-control"></textarea>
    </div>
    <div class="col-md-6" v-html="renderedContent"></div>
    <div class="col-md-12">
        <button class="btn btn-primary">Save</button>
    </div>
  </div>
</template>

<script>
const md = require('markdown-it')()

export default {
  name: "NoteEditor",
  data() {
    return {
      title: '',
      content: '',
      renderedContent: ''
    };
  },
  watch: {
    content (val) {
      this.renderedContent = md.render(val)
    }
  }
};
</script>

<style scoped>
.title {
  width: 100%;
  margin-bottom: 10px;
}

.btn {
    margin-top: 10px;
}
</style>
