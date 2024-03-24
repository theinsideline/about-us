<template>
    <TheHero />
</template>

<script>
import TheHero from './components/the-hero.vue'

export default {
  name: 'App',
  components: {
    TheHero
  }
}
</script>

<style>
body {
  margin: 0;
}


#about_us {
  width: calc(100% - 2* var(--component-padding));
  margin-left: auto;
  margin-left: auto;
  background-color: grey;
}
</style>
