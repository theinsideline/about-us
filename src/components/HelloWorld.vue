<script setup>
import { reactive } from 'vue'
import { useMouse } from '../helpers/mouse'

const mouse = reactive(useMouse())
</script>

<template>
  <div class="hello">
    <p>Vue test</p> 
    <p>Mouse position is at: {{ mouse.x }}, {{ mouse.y }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld', 
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
