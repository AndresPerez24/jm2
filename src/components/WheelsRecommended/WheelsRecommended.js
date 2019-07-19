import React, { Component } from "react";
import {
  Arrow,
  Bold,
  Card,
  Container,
  Description,
  Flex,
  Image,
  ImageItem,
  ImageItemContainer,
  Info,
  MainContainer,
  MoreInfo,
  Specs,
  SpecsItem,
  SpecsList,
  SpecsTitle,
  SubTitle,
  Title
} from "./WheelsRecommendedStyles";

export default class WheelsRecommended extends Component {
  state = {
    selectedCard: ""
  };

  selectCard = value => {
    this.setState(({ selectedCard }) => ({ selectedCard: selectedCard === value ? "" : value }));
  };

  render() {
    const { selectedCard } = this.state;

    return (
      <MainContainer>
        <Title>
          Descubra nuestras <Bold>ruedas recomendadas</Bold>
        </Title>
        <Container>
          <Card isSelected={selectedCard === "superthane"}>
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
                <SpecsTitle>Características</SpecsTitle>
                <SpecsList>
                  <SpecsItem>Especial para recorridos de trabajos intermedios</SpecsItem>
                </SpecsList>
              </Specs>
            </MoreInfo>
            <Arrow
              isSelected={selectedCard === "superthane"}
              src={require("../../Images/arrow.svg")}
              alt="Flecha"
              onClick={() => this.selectCard("superthane")}
            />
          </Card>
          <Card isSelected={selectedCard === "falconium"}>
            <Flex>
              <Image src={require("../../Images/wheels-2.png")} alt="Falconium" />
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
                <SpecsTitle>Características</SpecsTitle>
                <SpecsList>
                  <SpecsItem>Alta capacidad de carga</SpecsItem>
                  <SpecsItem>Extrema resistencia a desprendimientos y lagrimeo</SpecsItem>
                  <SpecsItem>Muy baja resistencia a la rodadura</SpecsItem>
                </SpecsList>
              </Specs>
            </MoreInfo>
            <Arrow
              isSelected={selectedCard === "falconium"}
              src={require("../../Images/arrow.svg")}
              alt="Flecha"
              onClick={() => this.selectCard("falconium")}
            />
          </Card>
        </Container>
      </MainContainer>
    );
  }
}
