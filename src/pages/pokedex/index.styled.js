import styled from "styled-components";

const Container = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  position: absolute;

  background: url('/assets/images/background.png');
  background-size: cover;

  height: 100%;
  width: 100%;

  .pokedex {
    background: url('/assets/images/pokedex.png');
    display: flex;
    flex-direction: row;
    position: relative;
    height: 600px;
    width: 800px;

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
        height: 40%;

        .pokemon {
          display: flex;
          align-items: center;
          justify-content: center;
          height:100%;
          width: 100%;

          img {
            width: 45%;
          }
        }

        .screen-pokedex {
          width: 60%;
          height: 70%;
          margin: 7% 9% 2% 0;

          background: url(${props => props.screen});
          background-repeat: no-repeat;
          background-size: cover;

          border: 2px solid;
          border-radius: .7em;

          animation: ${props => `${props.animation} 2s ease-in-out` }
        }

        .title-pokemon {
          display: flex;
          flex-direction: row;

          .name-pokemon {
            color: #636363;
            width: 10em;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          span {
            color: #c0c0c0;
            margin-right: .3em;
          }
        }
      }

      .container-features {
        display: flex;
        flex-direction: column;
        justify-content: space-around;;

        height: 34%;
        width: 73%;
        margin-left: 10%;

          .search {
            display: flex;
            flex-direction: row;
            width: 100%;

            input {
              width: 100%;
              padding: .6em .8em;
              color: #3a444d;
              background-color: #D9D9D9;
              outline: none;
              border: 2px solid #333;
              border-radius: 5px;
              box-shadow: -2px 3px 0 #888, -3px 5px 0 #222;
              margin-right: 0.5em;
            }

            button {
              width: 25%;
            }

            button > img {
              width: 40%;
            }
          }

          .container-button {
            display: flex;
            justify-content: space-between;
            align-items: center;

            width: 100%;
            height: 40%;
          }
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
        
        margin: 6% 0 0 12%;
      }

      .container-stats {
        height: 74%;
        width: 75%;

        padding: .5em;
        margin: 14% 0 0 8%;

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

  @media (width <= 1280px) {
    .pokedex {
      .pokedex-left {
        .container-viewer {
          .screen-pokedex {
            margin: 8% 9% 2% 0;
          }
        }
      }
    }
  }


  @media (width >= 1440px) {
    .pokedex {
      .pokedex-left {
        .container-viewer {
          height: 43%;

          .screen-pokedex {
            height: 66%;
            margin: 13% 9% 2% 0;
          }
        }
      }
    }
  }

  @media (width >= 1920px ) {
    .pokedex {
      height: 850px;
      width: 1120px;

      .pokedex-left {

         .container-viewer {
            height: 45%;

            .screen-pokedex {
              width: 60%;
              height: 62%;
              margin: 10% 9% 2% 0;
            }

            .title-pokemon {
              font-size: 1.3em;
            }
         }
         
      }

      .pokedex-right {

        .container-stats {
          margin: 17% 0 0 8%;
        }

      }
    }
  }
`
export { Container } 
