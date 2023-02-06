import React, { useState } from "react";
import { Container } from "./index.styled";


import { Button } from "../../components/buttonDark/index.styled";
import Lights from "../../components/lights";
import BoxStats from "../../components/boxStats";
import InfoPoke from "../../components/boxStats/infoPoke";


import { toast } from 'react-toastify';
import { isTherePokemon, isPokedexOn } from "../../services/validations";


import Api from "../../services/api.js";
const api = new Api();





export default function Pokedex() {
  const [pokemonInfo, setPokemonInfo] = useState();
  const [pokemonSearch, setPokemonSearch] = useState('');
  const [animation, setAnimation] = useState('');
  const [animationRunning, setAnimationRunning] = useState(false);
  const [screen, setScreen] = useState('/assets/images/screen-off.png');
  const [pokedexOn, setPokedexOn] = useState(false);
  const [handleRequest, setHandleRequest] = useState(false);

  const pathPokemon = pokemonInfo?.sprites?.versions['generation-v']['black-white'].animated.front_default;


  
  function handleAnimation() {
    if(animationRunning) return

    if(animation === 'animateBackgroundOff' || !animation) {
      setAnimationRunning(true);
      setAnimation('animateBackgroundOn');

      setTimeout(() => {
        setScreen('/assets/images/screen-on.png');
        setPokedexOn(true);
        setAnimationRunning(false);
      }, 1900);
    } else {
      setAnimationRunning(true);
      setAnimation('animateBackgroundOff');
      setPokedexOn(false);
      setPokemonInfo();
      setPokemonSearch('');

      setTimeout(() => {
        setScreen('/assets/images/screen-off.png');
        setAnimationRunning(false);
      }, 2000);
    }
  }



  async function findPokemon() {
      try {
        setHandleRequest(true);
        isPokedexOn(pokedexOn);
        isTherePokemon(pokemonSearch);

        const pokemon = await api.findPokemon(pokemonSearch.toLowerCase());
        setHandleRequest(false);
        setPokemonInfo(pokemon);

      } catch (err) {
        setHandleRequest(false);
        setPokemonInfo();
        return err.response 
          ? toast.warning(err.response.data)
          : toast.warning(err.message)
      }
  }



  async function prevOrNext(action) {
    try { 
      isPokedexOn(pokedexOn);
      isTherePokemon(pokemonSearch);

      if(pokemonInfo){
        if(pokemonInfo.id > 1 && action === "prev") {
          const pokemon = await api.findPokemon(pokemonInfo.id - 1);
          setPokemonInfo(pokemon)
          setPokemonSearch('')
        } else if(action === "next") {
          const pokemon = await api.findPokemon(pokemonInfo.id + 1);
          setPokemonInfo(pokemon)
          setPokemonSearch('')
        } else {
          toast.warning("Action not allowed")
        }
      } else {
        if(action === "prev"){ 
          toast.warning("Action not allowed")
        }  else {
          const pokemon = await api.findPokemon(1);
          setPokemonInfo(pokemon)
          setPokemonSearch('')
        }
      }
    } catch(err) {
      setPokemonInfo();
      return err.response 
          ? toast.warning(err.response.data)
          : toast.warning(err.message)
    }
  }


  

  return (
    <Container innerWidth={window} animation={animation} screen={screen}>

      {
        window.innerWidth <= 800 
          ? 
            <div className="pokedex-cell"> 
                <div className="text-cell"> Responsividade em Desenvolvimento... </div>
                <div className="snorlax"> <img src="/assets/images/snorlax.gif" alt="gif-snorlax"/> </div> 
            </div>
          : 
            <div className="pokedex">
              <div className="pokedex-left">
                
                <Lights animation={animation}/>

                <div className="container-viewer">
                 
                  <div className="screen-pokedex"> 
                    <div className="pokemon" id="pokemon"> 
                      {
                        pokemonInfo ? <img src={pathPokemon} alt="img-pokemon"/> : ""
                      }
                    </div>
                  </div>            
                  <div className="title-pokemon" title={pokemonInfo ? pokemonInfo?.forms[0].name : ''}>
                    {
                      handleRequest === false ? 
                        <>
                          <span> {pokemonInfo ? pokemonInfo?.id : '??'} - </span>
                          <span className="name-pokemon"> { pokemonInfo?.forms[0].name ?? '?????'} </span>
                        </>
                      : <span>Searching...</span>
                    }
                  </div>
                </div>
          
                <div className="container-features">
                    <div className="search">
                      <input placeholder="Name or Number" value={pokemonSearch} onChange={e => setPokemonSearch(e.target.value)}/>
                      <Button onClick={() => findPokemon()}> <img src="/assets/icones/pesquisar.svg" alt="svg-lupa"/> </Button>
                    </div>
                    <div className="container-button">
                      <Button onClick={() => prevOrNext('prev')}> {"< PREV"} </Button>
                      <Button onClick={() => prevOrNext('next')}> {"NEXT >"} </Button>
                    </div>
                </div>
              </div>

              <div className="pokedex-right">
                <div className="button-power"> <Button onClick={() => handleAnimation()}> POWER </Button> </div>

                <div className="container-stats">
                  <BoxStats title="Info Pokemon">
                    
                    <div className="stats">
                      <InfoPoke pokedexOn={pokedexOn} field="Name" value={pokemonInfo?.name}/>
                      <InfoPoke pokedexOn={pokedexOn} field="Height" value={pokemonInfo?.height}/>
                      <InfoPoke pokedexOn={pokedexOn} field="HP" value={pokemonInfo?.stats[0].base_stat}/>
                    </div>

                    <div className="stats">
                      <InfoPoke pokedexOn={pokedexOn} field="Type" value={pokemonInfo?.types[0].type.name}/>
                      <InfoPoke pokedexOn={pokedexOn} field="weight" value={pokemonInfo?.weight}/>
                      <InfoPoke pokedexOn={pokedexOn} field="Speed" value={pokemonInfo?.stats[5].base_stat}/>
                    </div>

                  </BoxStats>

                  <BoxStats title="Attack Info">
                    <div>
                      <InfoPoke pokedexOn={pokedexOn} field="Attack" value={pokemonInfo?.stats[1].base_stat}/>
                      <InfoPoke pokedexOn={pokedexOn} field="Special-Attack" value={pokemonInfo?.stats[3].base_stat}/>
                    </div>
                  </BoxStats>

                  <BoxStats title="Defense Info">
                      <div>
                        <InfoPoke pokedexOn={pokedexOn} field="Defense" value={pokemonInfo?.stats[2].base_stat}/>
                        <InfoPoke pokedexOn={pokedexOn} field="Special-Defense" value={pokemonInfo?.stats[4].base_stat}/>
                      </div>
                  </BoxStats>

                  <BoxStats title="Location Area" scroll={true}>
                      <div className="cities">
                        {pokemonInfo?.location_area_encounters.length <= 0 || !pokemonInfo
                            ? <InfoPoke pokedexOn={pokedexOn} field="location" value=""/>
                            :
                            pokemonInfo?.location_area_encounters.map(item => 
                              (
                              <InfoPoke pokedexOn={pokedexOn} field="location" value={item.location_area.name}/>
                              ) 
                            )}
                      </div>
                  </BoxStats>
                </div>
              </div>
            </div>
      }

    </Container>
  );
}
