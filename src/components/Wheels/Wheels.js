import React, { Component, Fragment } from "react";
import Hero from "../Hero/Hero";
import WheelsRecommended from "../WheelsRecommended/WheelsRecommended";
import WheelsOthers from "../WheelsOthers/WheelsOthers";
import WheelsTypes from "../WheelsTypes/WheelsTypes";
import { Title, TextLight, Description, TextBold } from "./WheelsStyles";

class Wheels extends Component {
  render() {
    return (
      <Fragment>
        <Hero
          title={
            <Title>
              <TextLight>Nuestras</TextLight> Ruedas
            </Title>
          }
          description={
            <Description>
              Distribuimos ruedas de las marcas más reconocidas del mercado, garantizando la calidad de sus productos y su entrega justo
              cuando lo necesita.. Compare sus características, encuentre la ideal para usted o comuníquese con nosotros{" "}
              <TextBold>para asesorarlo o hacer su compra.</TextBold>.
            </Description>
          }
        />
        <WheelsRecommended />
        <WheelsOthers />
        <WheelsTypes />
      </Fragment>
    );
  }
}

export default Wheels;
