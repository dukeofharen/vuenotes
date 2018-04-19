<template>
  <div class="note-editor col-md-12 row">
    <div class="col-md-12">
      <button class="btn btn-primary" v-on:click="back">Back to overview</button>
    </div>
    <div class="col-md-12">
        <input type="text" v-model="title" class="form-control title" placeholder="Title..." />
    </div>
    <div class="col-md-6">
        <textarea v-model="content" class="form-control"></textarea>
    </div>
    <div class="col-md-6" v-html="renderedContent"></div>
    <div class="col-md-12">
        <button class="btn btn-primary" v-on:click="save">Save</button>
    </div>
  </div>
</template>

<script>
const md = require('markdown-it')()
import { getNote, addOrUpdateNote } from './../data/storage'

export default {
  name: "NoteEditor",
  data() {
    return {
      id: 0,
      title: '',
      content: '',
      renderedContent: ''
    };
  },
  created () {
    let id = parseInt(this.$route.params.id)
    if(id) {
      // If id set; edit mode.
      this.id = id
      let note = getNote(id)
      this.title = note.title
      this.content = note.content
    } else {
      // If id not set; add mode.
      this.id = (new Date()).getTime()
    }
  },
  methods: {
    save () {
      let note = {
        id: this.id,
        title: this.title,
        content: this.content
      }
      addOrUpdateNote(this.id, note)
      this.$router.push({ name: 'Overview' })
    },
    back () {
      this.$router.push({ name: 'Overview' })
    }
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
    margin-bottom: 10px;
}
</style>
