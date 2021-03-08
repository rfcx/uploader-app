<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <p>
      <button v-on:click="start">Start</button>
      <button v-on:click="stop">Stop</button>
    </p>
    <p>
      <button v-on:click="seed">Seed</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    start: function () {
      window.ipcRenderer.send('start')
    },
    stop: function () {
      window.ipcRenderer.send('stop')
    },
    seed: function () {
      this.$db
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
