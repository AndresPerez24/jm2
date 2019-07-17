import React from "react";
import { MainContainer, Card, Image, Container, Bold, Title, SubTitle, Description, MoreInfo, Flex, Specs, SpecsItem, SpecsTitle } from "./WheelsRecommendedStyles";

export default function WheelsRecommended() {
  return (
    <MainContainer>
      <Title>Descubra nuestras <Bold>ruedas recomendadas</Bold></Title>
      <Container>
        <Card>
          <Flex>
            <Image src={require("../../Images/wheels-1.png")} alt="Superthane" />
            <div>
              <SubTitle>Superthane</SubTitle>
              <Description>Reduzca sus costos de mantenimiento</Description>
            </div>
          </Flex>
          <MoreInfo>
            <Image src={require("../../Images/spec-1.png")} alt="A95" />
            <Specs>
              <SpecsTitle>Caracterìsticas</SpecsTitle>
              <SpecsItem>-  Especial para recorridos de trabajos intermedios</SpecsItem>
            </Specs>
          </MoreInfo>
        </Card>
        <Card>
          <Flex>
            <Image src={require("../../Images/wheels-2.png")} alt="Superthane" />
            <div>
              <SubTitle>Falconium</SubTitle>
              <Description>Durabilidad Inigualable</Description>
            </div>
          </Flex>
          <MoreInfo>
            <Image src={require("../../Images/spec-1.png")} alt="A95" />
            <Specs>
              <SpecsTitle>Caracterìsticas</SpecsTitle>
              <SpecsItem>- Alta capacidad de carga</SpecsItem>
              <SpecsItem>- Extrema resistencia a desprendimientos y lagrimeo</SpecsItem>
              <SpecsItem>- Muy baja resistencia a la rodadura</SpecsItem>
            </Specs>
          </MoreInfo>
        </Card>
      </Container>
    </MainContainer>
  );
}
