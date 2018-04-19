<template>
  <div class="overview">
    <button class="btn btn-primary" v-on:click="add">Add note</button>
    <Note v-for="note in notes" v-bind:key="note.id" v-bind="note" />
  </div>
</template>

<script>
import { getNotes } from './../data/storage'
import Note from './Note'

export default {
  name: 'Overview',
  components: {
    Note
  },
  data () {
    return {
      notes: []
    }
  },
  created () {
    this.notes = getNotes()
  },
  methods: {
    add () {
      this.$router.push({ name: 'AddNote' })
    }
  }
}
</script>

<style scoped>
.btn {
  margin-bottom: 10px;
}
</style>
