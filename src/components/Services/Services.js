import React, { Component } from "react";
import styled from "styled-components";
import service1 from "../../Images/service1.png";

class Services extends Component {
  render() {
    return (
      <ServiceContainer>
        <MainContainer>
          <Container>
            <Img src={service1} alt="" />
            <Title>Venta de ruedas</Title>
            <Description>
              Distribuimos las principales marcas de ruedas para montacargas
              mejorando el rendimiento de los equipos y el traslado de
              materiales.
            </Description>
          </Container>
          <Container>
            <Img src={service1} alt="" />
            <Title>Venta de ruedas</Title>
            <Description>
              Distribuimos las principales marcas de ruedas para montacargas
              mejorando el rendimiento de los equipos y el traslado de
              materiales.
            </Description>
          </Container>
          <Container>
            <Img src={service1} alt="" />
            <Title>Venta de ruedas</Title>
            <Description>
              Distribuimos las principales marcas de ruedas para montacargas
              mejorando el rendimiento de los equipos y el traslado de
              materiales.
            </Description>
          </Container>
          <Container>
            <Img src={service1} alt="" />
            <Title>Venta de ruedas</Title>
            <Description>
              Distribuimos las principales marcas de ruedas para montacargas
              mejorando el rendimiento de los equipos y el traslado de
              materiales.
            </Description>
          </Container>
        </MainContainer>
      </ServiceContainer>
    );
  }
}

const ServiceContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 20px 120px;
`;

const MainContainer = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;
  justify-content: space-between;
  color: #ffffff;
`;

const Container = styled.div`
  width: 24%;
  text-align: center;
  border-radius: 15px;
  background-color: #fb7d0b;
  padding: 50px 0 80px;
`;

const Img = styled.img`
  margin-bottom: 35px;
`;

const Title = styled.h2`
  font-size: 1rem;
  max-width: 220px;
  margin: 0 auto;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 25px;
`;

const Description = styled.p`
  font-size: 1rem;
  max-width: 220px;
  margin: 0 auto;
`;

export default Services;
