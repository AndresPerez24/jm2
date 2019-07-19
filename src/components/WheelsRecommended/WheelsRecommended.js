import React from "react";
import {
  Bold,
  Card,
  Container,
  Description,
  Flex,
  Image,
  ImageItem,
  Info,
  MainContainer,
  ImageItemContainer,
  MoreInfo,
  Specs,
  SpecsItem,
  SpecsList,
  SpecsTitle,
  SubTitle,
  Title
} from "./WheelsRecommendedStyles";

export default function WheelsRecommended() {
  return (
    <MainContainer>
      <Title>
        Descubra nuestras <Bold>ruedas recomendadas</Bold>
      </Title>
      <Container>
        <Card>
          <Flex>
            <Image src={require("../../Images/wheels-1.png")} alt="Superthane" />
            <Info>
              <SubTitle color="#F07339">Superthane</SubTitle>
              <Description>Reduzca sus costos de mantenimiento</Description>
            </Info>
          </Flex>
          <MoreInfo>
            <ImageItemContainer>
              <ImageItem src={require("../../Images/spec-1.png")} alt="A95" />
            </ImageItemContainer>
            <Specs>
              <SpecsTitle>Caracterìsticas</SpecsTitle>
              <SpecsList>
                <SpecsItem>Especial para recorridos de trabajos intermedios</SpecsItem>
              </SpecsList>
            </Specs>
          </MoreInfo>
        </Card>
        <Card>
          <Flex>
            <Image src={require("../../Images/wheels-2.png")} alt="Superthane" />
            <Info>
              <SubTitle color="#46B0D8">Falconium</SubTitle>
              <Description>Durabilidad Inigualable</Description>
            </Info>
          </Flex>
          <MoreInfo>
            <ImageItemContainer>
              <ImageItem src={require("../../Images/spec-1.png")} alt="A95" />
            </ImageItemContainer>
            <Specs>
              <SpecsTitle>Caracterìsticas</SpecsTitle>
              <SpecsList>
                <SpecsItem>Alta capacidad de carga</SpecsItem>
                <SpecsItem>Extrema resistencia a desprendimientos y lagrimeo</SpecsItem>
                <SpecsItem>Muy baja resistencia a la rodadura</SpecsItem>
              </SpecsList>
            </Specs>
          </MoreInfo>
        </Card>
      </Container>
    </MainContainer>
  );
}
