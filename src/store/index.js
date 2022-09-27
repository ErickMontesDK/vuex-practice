import { createStore } from 'vuex'

export default createStore({
  state: {
    pokemon:{},
    status:"",
    pokemonNotFound:{
      name:"Pokemon not found",
      img:"https://www.latercera.com/resizer/vx1_S0T1j_as_Uto1SJAUURxcqs=/768x0/smart/filters:quality(70):format(webp):no_upscale()/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/LUOOHUM2OVEEXG7ZTRSNI6XWLY.png",
      cross:"https://image.similarpng.com/very-thumbnail/2021/06/Cross-mark-icon-in-red-color-on-transparent-background-PNG.png"
    }
  },
  getters: {
    getinfoPokemon(state){
      let info=state.pokemon;
      return info
    },
    getStats(state){
      let stats=[]
      for(let i=0;i<state.pokemon.stats.length;i++){
        let key=state.pokemon.stats[i].stat.name;
        let value=state.pokemon.stats[i].base_stat;

        let stat={key,value}
        stats.push(stat);
      }
      return stats;
    }
  },
  mutations: {
    updateInfo(state,data){
      console.log(data)

      let PokemonObj={};
      if(typeof data === 'object'){
        PokemonObj.name=data.species.name;
        PokemonObj.img={
          default:data.sprites.front_default,
          shiny:data.sprites.front_shiny,
          female:data.sprites.front_female,
        },
        PokemonObj.stats=data.stats
        PokemonObj.types=data.types;
        PokemonObj.weight=data.weight;
        PokemonObj.height=data.height;
        PokemonObj.habitat=data.habitat.name;
        PokemonObj.entry=data.flavor_text_entries[0].flavor_text;
        PokemonObj.nickname=data.genera[7].genus;


        state.pokemon=PokemonObj;
      }
    },
    updateStatus(state,status){
      state.status=status;
    },
    cleanData(state){
      state.pokemon={};
    }
  },
  actions: {
    fetchPokemon({commit},urlPokemon){
      let AllDataPokemon={}
      
      commit('cleanData');

      fetch(urlPokemon).then((response)=>{
        return response.json();
      }).then((data)=>{
        AllDataPokemon={...AllDataPokemon,...data};
        return data.species.url;
      }).then((urlSpecie)=>{
        return fetch(urlSpecie)
      }).then((resSpecie)=>{
        return resSpecie.json();
      }).then((data)=>{
        AllDataPokemon={...AllDataPokemon,...data};
        return data.evolution_chain.url;
      }).then((urlChain)=>{
        return fetch(urlChain);
      }).then((resChain)=>{
        return resChain.json();
      }).then((data)=>{
        AllDataPokemon={...AllDataPokemon,...data}; 
        commit('updateInfo',AllDataPokemon);
        commit('updateStatus', "Founded");
      }).catch((error)=>{
        commit('updateStatus', "Error");
      });
    }
  },
  modules: {
  }
})
