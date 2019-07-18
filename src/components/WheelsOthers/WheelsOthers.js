import React from "react";
import { MainContainer, Card, Image, Container, Bold, Title, SubTitle, Description, MoreInfo , Specs, SpecsItem, SpecsTitle } from "./WheelsOthersStyles";

export default function WheelsOthers() {
  return (
    <MainContainer>
      <Title>Conozca <Bold>nuestras otras opciones</Bold></Title>
      <Container>
        <Card>
          <Image src={require("../../Images/wheels-3.png")} alt="Superthane" />
          <div>
            <SubTitle>SPS</SubTitle>
            <Description>La Próxima Generación de Neumáticos de Prensado de Poliuretano Blando.</Description>
          </div>
          <MoreInfo>
            <Specs>
              <SpecsTitle>Caracterìsticas</SpecsTitle>
              <SpecsItem>- Especiales para caba de congelamiento</SpecsItem>
              <SpecsItem>- Manejo más suave en pisos ásperos</SpecsItem>
              <SpecsItem>- Muelles de carga Congeladores</SpecsItem>
            </Specs>
            <Image src={require("../../Images/spec-2.png")} alt="A95" />
          </MoreInfo>
        </Card>
        <Card>
          <div>
            <Image src={require("../../Images/wheels-4.png")} alt="Superthane" />
            <div>
              <SubTitle>Hyload</SubTitle>
              <Description>La Solución Definitiva</Description>
            </div>
          </div>
          <MoreInfo>
            <Specs>
              <SpecsTitle>Caracterìsticas</SpecsTitle>
              <SpecsItem>- Trabajo liviano</SpecsItem>
              <SpecsItem>- Preparación depedidos</SpecsItem>
            </Specs>
            <Image src={require("../../Images/spec-1.png")} alt="A95" />
          </MoreInfo>
        </Card>
        <Card>
          <div>
            <Image src={require("../../Images/wheels-5.png")} alt="Superthane" />
            <div>
              <SubTitle>Vulkollan</SubTitle>
              <Description>Máximo Rendimiento</Description>
            </div>
          </div>
          <MoreInfo>
            <Specs>
              <SpecsTitle>Caracterìsticas</SpecsTitle>
              <SpecsItem>- Extrema resistenciaa desprendimientos y lagrimeo</SpecsItem>
              <SpecsItem>- Extrema resistencia a desprendimientos y lagrimeo</SpecsItem>
              <SpecsItem>- Muy baja resistencia a la rodadura</SpecsItem>
            </Specs>
            <Image src={require("../../Images/spec-3.png")} alt="A95" />
          </MoreInfo>
        </Card>
      </Container>
    </MainContainer>
  );
}
