import React, { useEffect, useState } from "react";
import { Container } from "./index.styled";


import { Button } from "../../components/buttonDark/index.styled";
import Lights from "../../components/lights";
import BoxStats from "../../components/boxStats";
import InfoPoke from "../../components/boxStats/infoPoke";


import simuPoke from "../simulacao";





export default function Pokedex() {
  const [pokemonInfo] = useState(simuPoke());
  const [animation, setAnimation] = useState('');
  const [animationRunning, setAnimationRunning] = useState(false);
  const [screen, setScreen] = useState('/assets/images/screen-off.png');
  const [pokedexOn, setPokedexOn] = useState(false);

  

  function handleAnimation() {
    if(animationRunning) {
      return
    } else {
      if(animation === 'animateBackgroundOff' || !animation) {
        setAnimationRunning(true);
        setAnimation('animateBackgroundOn');
        setPokedexOn(true);

        setTimeout(() => {
          setScreen('/assets/images/screen-on.png');
          setAnimationRunning(false);
        }, 1900);
      } else {
        setAnimationRunning(true);
        setAnimation('animateBackgroundOff');
        setPokedexOn(false);

        setTimeout(() => {
          setScreen('/assets/images/screen-off.png');
          setAnimationRunning(false);
        }, 2000);
      }
    }
  }


  


  return (
    <Container animation={animation} screen={screen}>

      {
        window.innerWidth <= 1024 
          ? 
            <div className="pokedex-cell"> 
                <div className="text-cell">Responsividade para celular em desenvolvimento, acesse pelo Computador para ter acesso a pokedex. </div>
                <div className="snorlax"> <img src="/assets/pokemons/snorlax.gif" alt="gif-snorlax"/> </div> 
            </div>
          : 
            <div className="pokedex">
              <div className="pokedex-left">
                
                <Lights animation={animation}/>

                <div className="container-viewer">
                  <div className="screen-pokedex" />            
                  <div className="title-pokemon" title={pokemonInfo.forms[0].name}>
                    {pokemonInfo.id}
                      -
                    {pokemonInfo.forms[0].name} 
                  </div>
                </div>
          
                <div className="container-features">
                    <input placeholder="Name or Number"/>
                    <div className="container-button">
                      <Button> {"< PREV"} </Button>
                      <Button> {"NEXT >"} </Button>
                    </div>
                </div>
              </div>

              <div className="pokedex-right">
                <div className="button-power"> <Button onClick={() => handleAnimation()}> POWER </Button> </div>

                <div className="container-stats">
                  <BoxStats title="Info Pokemon">
                    
                    <div className="stats">
                      <InfoPoke pokedexOn={pokedexOn} field="Name" value="Charmanderkkkk"/>
                      <InfoPoke pokedexOn={pokedexOn} field="Height" value="21M"/>
                      <InfoPoke pokedexOn={pokedexOn} field="HP" value="1200"/>
                    </div>

                    <div className="stats">
                      <InfoPoke pokedexOn={pokedexOn} field="Type" value="Fire"/>
                      <InfoPoke pokedexOn={pokedexOn} field="weight" value="210KG"/>
                      <InfoPoke pokedexOn={pokedexOn} field="Speed" value="1200"/>
                    </div>

                  </BoxStats>

                  <BoxStats title="Attack Info">
                    <div>
                      <InfoPoke pokedexOn={pokedexOn} field="Attack" value="Charmanderkkkk"/>
                      <InfoPoke pokedexOn={pokedexOn} field="Special-Attack" value="21M"/>
                    </div>
                  </BoxStats>

                  <BoxStats title="Defense Info">
                      <div>
                        <InfoPoke pokedexOn={pokedexOn} field="Name" value="Charmanderkkkk"/>
                        <InfoPoke pokedexOn={pokedexOn} field="Height" value="21M"/>
                      </div>
                  </BoxStats>

                  <BoxStats title="Location Area" scroll={true}>
                      <div>

                        <InfoPoke pokedexOn={pokedexOn} field="°" value=""/>
                        <InfoPoke pokedexOn={pokedexOn} field="Name" value="Charmanderkkkk"/>
                        <InfoPoke pokedexOn={pokedexOn} field="Name" value="Charmanderkkkk"/>
                        <InfoPoke pokedexOn={pokedexOn} field="Name" value="Charmanderkkkk"/>

                      </div>
                  </BoxStats>
                </div>
              </div>
            </div>
      }

    </Container>
  );
}
