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
            <SubTitle>Superthane</SubTitle>
            <Description>Reduzca sus costos de mantenimiento</Description>
          </div>
          <MoreInfo>
            <Specs>
              <SpecsTitle>Caracterìsticas</SpecsTitle>
              <SpecsItem>-  Especial para recorridos de trabajos intermedios</SpecsItem>
            </Specs>
            <Image src={require("../../Images/spec-1.png")} alt="A95" />
          </MoreInfo>
        </Card>
        <Card>
          <div>
            <Image src={require("../../Images/wheels-4.png")} alt="Superthane" />
            <div>
              <SubTitle>Falconium</SubTitle>
              <Description>Durabilidad Inigualable</Description>
            </div>
          </div>
          <MoreInfo>
            <Specs>
              <SpecsTitle>Caracterìsticas</SpecsTitle>
              <SpecsItem>- Alta capacidad de carga</SpecsItem>
              <SpecsItem>- Extrema resistencia a desprendimientos y lagrimeo</SpecsItem>
              <SpecsItem>- Muy baja resistencia a la rodadura</SpecsItem>
            </Specs>
            <Image src={require("../../Images/spec-1.png")} alt="A95" />
          </MoreInfo>
        </Card>
        <Card>
          <div>
            <Image src={require("../../Images/wheels-5.png")} alt="Superthane" />
            <div>
              <SubTitle>Falconium</SubTitle>
              <Description>Durabilidad Inigualable</Description>
            </div>
          </div>
          <MoreInfo>
            <Specs>
              <SpecsTitle>Caracterìsticas</SpecsTitle>
              <SpecsItem>- Alta capacidad de carga</SpecsItem>
              <SpecsItem>- Extrema resistencia a desprendimientos y lagrimeo</SpecsItem>
              <SpecsItem>- Muy baja resistencia a la rodadura</SpecsItem>
            </Specs>
            <Image src={require("../../Images/spec-1.png")} alt="A95" />
          </MoreInfo>
        </Card>
      </Container>
    </MainContainer>
  );
}
