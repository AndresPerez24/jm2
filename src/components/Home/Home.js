import React, { Component } from "react";
import Service from "../Services/Services";
import Features from "../Features/Features";
import Contact from "../Contact/Contact";
import { HomeContainer, Container, Title, Description } from "./HomeStyles";

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <Container>
          <Title>
            Sobre <strong>Nosotros</strong>
          </Title>
          <Description>
            En JM2 apoyamos la gestión logística de su negocio con soluciones integrales para centros de almacenamiento, a través del
            alquiler y venta de montacargas y ruedas, entre otras soluciones que incrementarán la productividad de sus operaciones.
          </Description>
        </Container>
        <Service />
        <Features />
        <Contact />
      </HomeContainer>
    );
  }
}

export default Home;
