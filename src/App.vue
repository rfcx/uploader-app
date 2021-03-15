<template>
  <div id="app">
    <Navigation/>
    <Home/>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import Home from './electron/primaryWindow/pages/Home'

export default {
  name: 'App',
  components: {
    Navigation, Home
  }
}
</script>

<style lang="scss" scoped>
@import "./globals.scss";

#app {
  padding: 0;
  position: absolute;
  top: $navbar-height;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
  overflow-y: auto;
}

</style>
