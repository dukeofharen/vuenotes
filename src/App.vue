<template>
  <div id="app">
    <nav class="navbar navbar-light bg-faded navbar-bk">
      <a class="navbar-brand" href="#">Vue Notes</a>
    </nav>
    <div class="container application">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
</style>
