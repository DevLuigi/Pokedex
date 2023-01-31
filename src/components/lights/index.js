import React, { useEffect } from "react";
import Container from "./index.styled";





export default function Lights(props) {
  const red = document.getElementById('red');
  const yellow = document.getElementById('yellow');
  const green = document.getElementById('green');



  useEffect(() => {

   if((props.animation === 'animateBackgroundOn' || props.animation === '') && red && yellow && green) {
      red.style.opacity = 1;
      setTimeout(() => yellow.style.opacity = 1, 1000);
      setTimeout(() => green.style.opacity = 1, 2000);
   } else if (red && yellow && green) {
      green.style.opacity = 0.5;
      setTimeout(() => yellow.style.opacity = 0.5, 1000);
      setTimeout(() => red.style.opacity = 0.5, 2000);
   }
  // eslint-disable-next-line
  }, [props.animation]);

  return(
    <Container>
        <div id="red"/>
        <div id="yellow"/>
        <div id="green"/>
    </Container>
  )
}