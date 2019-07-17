import React from "react";
import { MainContainer, Background, Title, TextLight, Description, TextBold, Label, LabelItem, LabelImage } from "./WheelsHeroStyles";

export default function WheelsHero() {
  return (
    <Background>
      <MainContainer>
        <Title>
          <TextLight>Nuestras</TextLight> Ruedas
        </Title>
        <Description>
          Distribuimos ruedas de las marcas más reconocidas del mercado, garantizando la calidad de sus productos y su entrega justo cuando lo necesita.. 
          Compare sus características, encuentre la ideal para usted o comuníquese con nosotros{" "}
          <TextBold>para asesorarlo o hacer su compra.</TextBold>.
        </Description>
      </MainContainer>
      <Label>
        <LabelItem>
          <LabelImage src={require("../../Images/phone.svg")} alt="Telefono" />
          (031) 703 7912 - (+57) 318 735 3881
        </LabelItem>
        <LabelItem>
          <LabelImage src={require("../../Images/envelop.svg")} alt="Telefono" />
          info@sljm2.com
        </LabelItem>
      </Label>
    </Background>
  );
}
