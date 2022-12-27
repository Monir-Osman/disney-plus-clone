import React from "react";
import styled from "styled-components";

function Studios() {
  return (
    <Container>
      <Wrap>
        <Disney></Disney>
      </Wrap>
      <Wrap>
        <Pixar></Pixar>
      </Wrap>
      <Wrap>
        <Marvel></Marvel>
      </Wrap>
      <Wrap>
        <Starwars></Starwars>
      </Wrap>
      <Wrap>
        <National></National>
      </Wrap>
    </Container>
  );
}

export default Studios;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 20px;
  padding: 30px 40px;
  width: 100%;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Wrap = styled.div`
  padding: 30px;
  min-height: 11rem;
  background: linear-gradient(rgb(58, 60, 74), rgb(36, 38, 50));
  border: 3px solid rgb(58, 60, 74);
  border-radius: 10px;
  cursor: pointer;
  box-shadow: black 0px 15px 10px -7px;
  @media only screen and (max-width: 600px) {
    width: 90%;
    margin: 0 auto;
  }
  &:hover {
    padding: 0;
  }
`;
const Disney = styled.div`
  height: 100%;
  width: 100%;
  background-image: url("https://static-assets.bamgrid.com/product/disneyplus/images/logo.1a56f51c764022ee769c91d894d44326.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  &:hover {
    background-image: url("https://media.giphy.com/media/QxwnBM8MkgAdqqng5S/giphy.gif");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
const Pixar = styled.div`
  height: 100%;
  width: 100%;
  background-image: url("https://www.pngmart.com/files/22/Pixar-Logo-PNG.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  &:hover {
    background-image: url("https://media.giphy.com/media/duzR6ALR9YRqg/giphy.gif");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
const Marvel = styled.div`
  height: 100%;
  width: 100%;
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  &:hover {
    padding: 0;
    background-image: url("https://media.giphy.com/media/vBjLa5DQwwxbi/giphy.gif");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const Starwars = styled.div`
  height: 100%;
  width: 100%;
  background-image: url("./starwars.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  &:hover {
    padding: 0;
    background-image: url("https://media.giphy.com/media/9E7kUhnT9eDok/giphy.gif");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const National = styled.div`
  height: 100%;
  width: 100%;
  background-image: url("./national.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  &:hover {
    padding: 0;
    background-image: url("https://media.giphy.com/media/26BGHOZFHcCwJ4ZR6/giphy.gif");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
