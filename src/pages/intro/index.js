import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./index.styled";





export default function IntroPokedex() {
  const navigate = useNavigate();
  const ano = new Date().getFullYear();

  const [text, setText] = useState('');
  const [className, setClassName] = useState();
  const [animation, setAnimation] = useState(false);



  document.addEventListener('keypress', (event) => {
    if(event.key === 'Enter'){
      setClassName('display-none');
      setAnimation(true);

      setTimeout(() => {
        navigate('/pokedex');
      }, 1000);
    } else {
      return;
    } 
  })



  function navig() {
    setClassName('display-none');
    setAnimation(true);


    setTimeout(() => {
      navigate('/pokedex');
    }, 1000);
  }


  
  useEffect(() => {
    
    if(window.innerWidth <= 1200) 
      setText('Click here');
    else
      setText('Press Enter');

  }, [])




  return (
    <Container animation={animation}>
        <img className={className ?? "title"} src="assets/images/title.png" alt="img-title-pokémon"/>
        <div className={className ?? "text"} onClick={() => navig()}> {text} </div>
        <div className={className ?? "footer"}> {ano} - Dev Brothers - Beta Version  </div>
        <div className={className ?? "snorlax"}> <img src="/assets/images/snorlax.gif" alt="gif-snorlax"/> </div>
    </Container>
  );
}
