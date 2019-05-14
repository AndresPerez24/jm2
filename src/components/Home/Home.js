import React, { Component } from "react";
import styled from "styled-components";
import Service from "../Services/Services";
import Features from "../Features/Features";
import Contact from "../Contact/Contact";

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <Container>
          <Title>Sobre Nosotros</Title>
          <Description>
            En JM2 apoyamos la gestión logística de su negocio con soluciones
            integrales para centros de almacenamiento, a través del alquiler y
            venta de montacargas y ruedas, entre otras soluciones que
            incrementarán la productividad de sus operaciones.
          </Description>
        </Container>
        <Service />
        <Features />
        <Contact />
      </HomeContainer>
    );
  }
}

const HomeContainer = styled.div`
  background-color: #f3f3f3;
`;

const Container = styled.div`
  text-align: center;
  font-family: "Montserrat", sans-serif;
  color: #656464;
  border-top: transparent;
  padding: 30px 0 45px;
  background-color: #ffffff;
`;

const Title = styled.h1`
  font-size: 2.3125rem;
`;

const Description = styled.p`
  max-width: 960px;
  padding: 0 20px;
  margin: 0 auto;
`;

export default Home;
