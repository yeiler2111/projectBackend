import MoviesApi from "./Api/MoviesApi";

export default {
  async getMovieTitles() {
    try {
      return await MoviesApi().get("/titles?limit=50");
    } catch (e) {
      throw new Error(e);
    }
  },
  async getActores(){
    try{
      return await MoviesApi().get("/actors?limit=50&page=2");
    }catch(e){
      throw new Error(e);
    }
  },
  async getMovieMainActors(id){
    try{
      return await MoviesApi().get(`/titles/${id}`);
    }catch(e){
      throw new Error(e);
    }
  },
  async getActors(){
    try{
      return await MoviesApi().get(`/titles/x/upcoming?page=2&info=extendedCast&limit=10`);
    }catch(e){
      throw new Error(e);
    }
  }
};
