import React from "react";
import { MainContainer, Background, Title, TextLight, Description, TextBold, Label, LabelItem, LabelImage } from "./EquipmentsHeroStyles";

export default function EquipmentsHero() {
  return (
    <Background>
      <MainContainer>
        <Title>
          <TextLight>Equipos</TextLight> Disponibles
        </Title>
        <Description>
          Nuestros equipos abarcan la más grande <TextBold>variedad de marcas y gamas del mercado</TextBold>. Contamos con equipos
          exclusivos que garantizan la productividad de sus operaciones. Conozca nuestra galería de equipos disponibles y{" "}
          <TextBold>contáctenos para dar inicio al proceso</TextBold>.
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
