import axios from "axios";


const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/"
})





export default class Api {

    async findPokemon(pokemon) {
      if(!pokemon) throw new Error('Not Found');

      const resp = await api.get(`pokemon/${pokemon}`);

      if(!resp?.data?.sprites?.versions['generation-v']['black-white'].animated.front_default){ 
        throw new Error('Not Found');
      }

      const location = await this.locationAreaEncounters(resp?.data.location_area_encounters); 
     
      if(resp.data.id === undefined && location[0]?.location_area.name === undefined) {
        throw new Error('Not Found');
      } else {
        resp.data.location_area_encounters = [...location];
        return resp.data ?? {};
      }
    }


    
    async locationAreaEncounters(url) {
      const resp = await api.get(url);
      return resp.data ?? [];
    }
}



