<template>
    <div>
        <h1 style="font-weight: bold; font-size:3rem ;">Peliculas Estrenos</h1>
        <b-table  fixed bordered :items="destrucMovie" :fields="fields" striped responsive="sm">
            <template #cell(ver_actores)="row">
                <b-button size="sm" @click="getinfo(row)" class="mr-2">
                {{ row.detailsShowing ? 'Hide' : 'Show'}} actors
                </b-button>
            </template>
            <template #row-details>
                <div class=" ">
                    <b-card-group deck>
                        <b-card  v-for="items in trues" :key="items.id"
                        :title="items.node.name.nameText.text"
                        :img-src="items.node.name.primaryImage && items.node.name.primaryImage.url"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2 text-center"
                        >
                        <b-card-text>
                            <h3>
                                       
                            </h3> 
                          
                        </b-card-text>

                        
                    </b-card>
                    </b-card-group>
                   
                </div>
                    
            </template>
        </b-table>
    </div>
</template>


<script>
import MovieServices from "./../services/MovieService";

export default{
    data(){
        return{
            actoresForMovies:[],
            actores:[],
            idMovies:[],
            movies:[],
            destrucMovie:[],
            fields:['titulo','year','ver_actores'],
            trues:[]
        }
    },
    methods:{
        async getActorsAndMovies(){
            try{
                let {data} = await MovieServices.getActors()
                this.actoresForMovies=data.results
                for(let i=0;i<this.actoresForMovies.length;i++){
                    this.idMovies.push(this.actoresForMovies[i].id)
                }
            }catch(e){
                console.log(e)
            }
           
           this.actoresForMovies.forEach(element => {
                this.actores.push(element.cast.edges)
                
           });
            
           
           
        },  
        async getTitle() {
            let peli
            try {
                for (let i = 0; i < this.idMovies.length; i++) {
                const id = this.idMovies[i];
                const response = await MovieServices.getMovieMainActors(id);
                this.movies.push(response.data.results);
                }
                
                
            } catch (error) {
                console.error(error);
            }
            


            for(let i=0;i<this.movies.length;i++){
                peli={
                    id:this.movies[i].id,
                    titulo:this.movies[i].originalTitleText.text,
                    imagen:this.movies[i].primaryImage && this.movies[i].primaryImage.url ,
                    year:this.movies[i].releaseYear.year
                }
                this.destrucMovie.push(peli)
            }
            
        },
        getinfo(row){
            row.toggleDetails()
            let id= row.item.id
            for(let i=0;i< this.actoresForMovies.length;i++){
                if(this.actoresForMovies[i].id == id){
                    this.trues=this.actoresForMovies[i].cast.edges
                }
           }
           console.log(this.trues)
        

        }
    },
    async created(){
        await this.getActorsAndMovies()
        await this.getTitle()

    }
} 

</script>