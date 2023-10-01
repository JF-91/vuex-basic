<template>

        <h1>Counter</h1>
        <p>Direct access: {{ countComputed}}</p>
        <p>Computed: {{ countComputed }}</p>
        <p>List: {{ list }}</p>
        <p>Double count: {{ $store.getters['counter/doubleCount'] }}</p>
        <button @click="$store.commit('counter/increment')">Increment</button>
        <button @click="$store.commit('counter/decrement')">Decrement</button>
        <button @click="$store.commit('counter/incrementBy', 5)">incrementBy(5)</button>
</template>
<script>

import { mapState} from 'vuex'
//mapAction para acciones
//mapGetter para getters
export default {
    computed:{
        ...mapState({
            countComputed: state => state.counter.count,
            list : state => state.counter.list
        })
    },

}
</script>
<style lang="scss">
    
</style>