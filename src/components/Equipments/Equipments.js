import React, { Component, Fragment } from "react";
import Hero from "../Hero/Hero";
import EquipmentsGallery from "../EquipmentsGallery/EquipmentsGallery";
import { Title, TextLight, Description, TextBold } from "./EquipmentsStyles";

class Equipments extends Component {
  render() {
    return (
      <Fragment>
        <Hero
          title={
            <Title>
              <TextLight>Equipos</TextLight> Disponibles
            </Title>
          }
          description={
            <Description>
              Nuestros equipos abarcan la más grande <TextBold>variedad de marcas y gamas del mercado</TextBold>. Contamos con equipos
              exclusivos que garantizan la productividad de sus operaciones. Conozca nuestra galería de equipos disponibles y{" "}
              <TextBold>contáctenos para dar inicio al proceso</TextBold>.
            </Description>
          }
        />
        <EquipmentsGallery />
      </Fragment>
    );
  }
}

export default Equipments;
