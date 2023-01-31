import styled from "styled-components";

const Container = styled.div`
  background-color: #373737;
  
  padding: 1em;
  margin: 1em 0em;

  height: ${props => props.scroll === true ? '20%' : 'unset'};
  overflow-y: ${props => props.scroll === true ? 'auto' : 'unset'};

  font-size: .5em;
  color: #fff;
  border-radius: 5px;

  /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #e3e3e3;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #373737;
  border-radius: 2px;
  border: 1px solid #000;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

  .titulo {
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      width: 1.5em;
      height: 1.5em;
      margin-right: 1em;
    }

    div {
      width: 100%;

      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-top: 1em;

    .stats {
      width: 50%;
    }
  }

  @media (max-width: 1280px) {
    height: ${props => props.scroll === true ? '38%' : 'unset'};
  }

  @media (min-width: 1440px) {
    height: ${props => props.scroll === true ? '25%' : 'unset'};
  }

  @media (min-width: 1920px) {
    height: ${props => props.scroll === true ? '39%' : 'unset'};
  }

`

export default Container;