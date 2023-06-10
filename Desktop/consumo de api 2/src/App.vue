<template>
  <div id="app">
    <!-- <perros></perros>    aqui consumo unas imagenes de una api de perros -->
    <!-- <actor></actor>
    <perros></perros> -->
    <div class="d-flex justify-content-center">
      <button class="btn btn-primary gap-2"  @click="verActors">ver actores</button>
      <button class="btn btn-primary "  @click="verMovies">ver peliculas</button>
    </div>
      
    <nuevo v-if="viewActors"></nuevo>
      <actors-table v-if="viewMovies"></actors-table>
  </div>
</template>

<script>
// import perros from "./components/imagenesPerros.vue";
// import actor from "./components/TablaInformacion.vue";

import ActorsTable from "@/components/ActorsTable.vue"
import nuevo from "@/components/MoviesForActors.vue"
export default {
  name: "App",
  components: {
   
    ActorsTable,
    nuevo
  },
  data(){
    return{
      viewActors:false,
      viewMovies:false
    }
  },
  methods:{
    verActors(){
      this.viewActors= !this.viewActors 
    },
    verMovies(){
      this.viewMovies= !this.viewMovies
    }
    }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
