import styled from "styled-components";

const Container = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  position: absolute;

  background: url('/assets/images/background.png');
  background-size: cover;

  height: 100vh;
  width: 100vw;

  .pokedex {
    display: flex;
    flex-direction: row;
    position: relative;
    height: 85%;
    width: 55%;

    background: url('/assets/images/pokedex.png');
    background-size: contain;
    background-repeat: no-repeat;

    .pokedex-left {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 50%;

      .container-viewer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 15em;
      }

      .screen-pokedex {
        width: 14.3em;
        height: 9.8em;
        margin: 2.6em 2em .5em 0em;

        background: url(${props => props.screen});
        background-repeat: no-repeat;
        background-size: cover;

        border-radius: .5em;

        animation: ${props => `${props.animation} 2s ease-in-out` }
      }

      .title-pokemon {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        
        width: 13em;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .container-features {
        display: flex;
        flex-direction: column;
        justify-content: space-around;;

        height: 12em;
        width: 17em;
        margin-left: 2.2em;

          input {
            padding: .8em;
            color: #3a444d;
            background-color: #D9D9D9;
            outline: none;
            border: 2px solid #333;
            border-radius: 5px;
            box-shadow: -2px 3px 0 #888, -3px 5px 0 #222;
          }

          .container-button {
            display: flex;
            justify-content: space-between;
            align-items: center;

            width: 100%;
            height: 8em;
          }
        }

        img {
          width: 100%;
          height: 100%;
        }
    }

    .pokedex-right {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 50%;

      .button-power {
        display: flex;
        justify-content: flex-end;
        width: 70%;
        
        margin: 1.5em 0em 0em 3em;
      }

      .container-stats {
        height: 74%;
        width: 75%;

        padding: .5em;
        margin: 3.2em 0em 0em 2em;

        background-color: #E3E3E3;
        border-radius: 5px;
      }

    }
  }

  .pokedex-cell {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    height: 75%;
    width: 100%;
  }

  .text-cell {
    font-size: 16px;
    color: #fff;
    text-align: center;
    text-shadow: 2px 2px black;
  }

  .snorlax > img {
    width: 10em;
  }

  @keyframes animateBackgroundOn {
    0% {
      background: #fff;
    }

    50% {
      background: #222;
    }

    100% {
      background: #fff;
    }
  }

  @keyframes animateBackgroundOff {
    0% {
      background: #222;
    }

    50% {
      background: #fff;
    }

    100% {
      background: #222;
    }
  }

  @media (max-width: 1280px) {
    .pokedex {
      height: 78%;
      width: 75%;

      .pokedex-left {

        .container-viewer {
          height: 20em;

          .screen-pokedex {
            width: 18.5em;
            height: 13em;
            margin: 2em 2.7em .5em 0em;
          }

          .title-pokemon {
            width: 16em;
          }
        }

        .container-features {
          height: 14em;
          width: 22em;
          margin-left: 2.8em;
        }

      }

      .pokedex-right {

        .button-power {
          margin: 2em 0em 0em 3em;
        }

        .container-stats {
          margin: 5em 0em 0em 2.5em;
        }
        
      }
    }
  }

  @media (min-width: 1440px) {
    .pokedex {
      height: 75%;

      .pokedex-left {

        .container-viewer {

          .screen-pokedex {
            width: 15.5em;
            height: 10.5em;
            margin: 2em 2em 0.5em 0em;
          }
        }

        .container-features {
          width: 18.5em;
        }
      }

      .pokedex-right {

        .container-stats {
          margin: 3.5em 0em 0em 2em;
        }
      }
    }
  }

  @media (min-width: 1920px) {
    .pokedex {

      .pokedex-left {

        .container-viewer {
          height: 20em;

          .screen-pokedex {
            width: 19em;
            height: 13em;
            margin: 0.5em 5em 0.5em 0em;
          }

          .title-pokemon {
            width: 14em;
          }
        }

        .container-features {
          width: 22.5em;
          margin-left: 2.8em;
        }
      }

      .pokedex-right {
        .button-power {
          width: 65%;
          margin: 2.5em 4em 0em 0em;
        }

        .container-stats {
          margin: 4.5em 4.5em 0em 0em;
          width: 70%;
        }
      }
    }
  }

`

export { Container }
