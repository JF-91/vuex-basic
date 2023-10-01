<template>
  <div class="app">
    <h1>Hi!</h1>
    <Countercomponent />
  </div>
</template>

<script>
  import { defineAsyncComponent } from 'vue'

export default {
  name: 'App',
  components: {
    Countercomponent: defineAsyncComponent ( () => import('./components/CounterComponent.vue') )
  }

}
</script>

<style lang="scss">

</style>
