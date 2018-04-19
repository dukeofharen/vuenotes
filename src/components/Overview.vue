<template>
  <div class="overview">
    <Note v-for="note in notes" v-bind:key="note.id" v-bind="note" />
  </div>
</template>

<script>
import Note from './Note'

export default {
  name: 'Overview',
  components: {
    Note
  },
  data () {
    // TODO return this from a data source / local storage.
    return {
      notes:[{
        id: 1,
        title: 'Note 1',
        contents: '# This is note 1'
      },
      {
        id: 2,
        title: 'Note 2',
        contents: '# This is note 2'
      }]
    }
  },
  created () {

  }
}
</script>

<style scoped>
</style>
