<template>
  <div class="container-fluid app">
    <banner :title="header"/>
    <div class="main">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
      <router-view/>
    </div>
    <foot/>
  </div>
</template>
<script>
  import banner from "./components/header.vue";
  import foot from "./components/foot.vue";

export default {
  components: {
    banner,foot
  },
  data(){
    return {
      header:"Pokedex by myself"
    }
  }
}
</script>

<style> 
.app{
  position:absolute;
  background-color:cyan;
  min-height: 100%;

  display:flex;
  flex-direction: column;
  justify-content: space-between;
  padding:0px;

}

</style>
