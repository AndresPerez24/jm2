import React from "react";
import { MainContainer, Background, Label, LabelItem, LabelImage } from "./HeroStyles";

export default function Hero({ title, description }) {
  return (
    <Background>
      <MainContainer>
        {title}
        {description}
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
