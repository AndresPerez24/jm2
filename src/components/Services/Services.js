import React, { Component } from "react";
import forklift from "../../Images/forklift.png";
import magnifyingGlass from "../../Images/magnifying-glass.png";
import tools from "../../Images/tools.png";
import wheel from "../../Images/wheel.png";
import { ServiceContainer, MainContainer, Container, Img, Title, Description } from "./ServicesStyles";

class Services extends Component {
  render() {
    return (
      <ServiceContainer>
        <MainContainer>
          <Container>
            <Img backgroundImage={wheel} />
            <Title>Venta de ruedas</Title>
            <Description>
              Distribuimos las principales marcas de ruedas para montacargas mejorando el rendimiento de los equipos y el traslado de
              materiales.
            </Description>
          </Container>
          <Container>
            <Img backgroundImage={forklift} />
            <Title>Venta y alquiler de montacargas</Title>
            <Description>
              Contamos con equipos eléctricos para todas las necesidades de almacenamiento, así como equipos paletizadores eléctricos de
              operador montado y caminando.
            </Description>
          </Container>
          <Container>
            <Img backgroundImage={tools} />
            <Title>Venta de repuestos de montacargas</Title>
            <Description>
              Distribuimos todas las marcas de equipos eléctricos y combustión, teniendo en cuenta las necesidades de nuestros clientes.
            </Description>
          </Container>
          <Container>
            <Img backgroundImage={magnifyingGlass} />
            <Title>Diagnóstico y mantenimiento</Title>
            <Description>
              Atendemos de manera preventiva y correctiva el funcionamiento de los productos garantizando su mejor desempeño.
            </Description>
          </Container>
        </MainContainer>
      </ServiceContainer>
    );
  }
}

export default Services;
