<template>
  <div class="home">
    <div class="search">
      <input type="text" v-model="Pokemon">
      <button @click="searchPokemon()" >Buscar</button>
    </div>
    
    
    
    <div class="row">
      <div class="col-sm-4">
        <card v-if="getPokemon.name" :name="getPokemon.name" :img="getPokemon.img.default" :type="getPokemon.types[0].type.name"/>
        <basic v-if="getPokemon.name" :weight="getPokemon.weight" :height="getPokemon.height" :habitat="getPokemon.habitat" :types="getPokemon.types"/>
      </div>
      <div class="col-sm-8">
        <entry v-if="getPokemon.name" :nickname="getPokemon.nickname" :entry="getPokemon.entry"/>
        <stats v-if="getPokemon.name" :stats="getPokemon.stats"/>
      </div>
    </div>
    
    <img v-if="$store.state.status=='Error'" :src=$store.state.pokemonNotFound.img>
    <img v-if="$store.state.status=='Error'" :src=$store.state.pokemonNotFound.cross>
  </div>
</template>

<script>
// @ is an alias to /src
import card from "./../components/card.vue"
import entry from "./../components/entry.vue"
import stats from "./../components/stats.vue"
import basic from "./../components/basic.vue"

export default {
  name: 'HomeView',
  components: {
    card,entry,stats,basic
  },
  data(){
    return {
      Pokemon:"eevee"
    }
  },
  methods: {
    searchPokemon(){
      let Pokemon=this.Pokemon.toLowerCase();
      let urlPokemon=`https://pokeapi.co/api/v2/pokemon/${Pokemon}`
      this.$store.dispatch('fetchPokemon', urlPokemon);
    }
  },
  computed:{
    getPokemon(){
      let info=this.$store.getters.getinfoPokemon;
      return info;
    }
  }
}
</script>

<style scoped>
.home{
  background: darkred;
}
.col-sm-4{
 display:flex;
 flex-direction: column;
 align-items: center; 
 background:green;
}
.col-sm-8{
  background: blue;
}
</style>
