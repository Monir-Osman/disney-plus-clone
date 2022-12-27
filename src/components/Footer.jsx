import { style } from "@mui/system";
import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <LogoCon>
        <img
          src="https://static-assets.bamgrid.com/product/disneyplus/images/logo.1a56f51c764022ee769c91d894d44326.svg"
          alt="disney logo"
        />
      </LogoCon>
      <Privacy>
        <span>Privacy Policy</span>
        <span>Data Protection in Brazil</span>
        <span>Subscriber Agreement</span>
        <span>Help</span>
      </Privacy>
      <About>
        <span>Supported devices</span>
        <span>About us</span>
        <span>Interest-based Ads</span>
      </About>
      <ParaCon>
        <p>
          Disney+ is a paid service, based on subscription and subject to terms and conditions. The
          Disney+ service is marketed by The Walt Disney Company (Brazil) Ltda., World Trade Center,
          Av. Das Nações Unidas, 12.551, 12.555, 12.559, Piso 10, São Paulo / SP - CEP 04578-903,
          Brazil and CNPJ / M 73.042.962 / 0004-20
        </p>
      </ParaCon>
      <p>© Disney. All Rights Reserved.</p>
      <p>Developed by Monir Osmani.</p>
      <p>Data from www.themoviedb.org.</p>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  background-color: rgb(9, 11, 19);
  width: 100%;
  display: grid;
  place-items: center;
  padding-bottom: 3rem;
  div span {
    color: white;
    padding: 0 1rem;
  }
  p {
    color: white;
  }
`;

const Privacy = styled.div`
  @media screen and (max-width: 450px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;

const About = styled.div`
  margin-top: 2rem;
  @media screen and (max-width: 450px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;

const LogoCon = styled.div`
  width: 180px;
  height: 180px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const ParaCon = styled.div`
  max-width: 390px;
  p {
    color: white;
    margin: 3rem 1rem;
  }
`;
