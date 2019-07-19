import React, { Component } from "react";
import {
  Arrow,
  Bold,
  Card,
  Container,
  Description,
  Image,
  ImageItem,
  MainContainer,
  MoreInfo,
  Specs,
  SpecsItem,
  SpecsTitle,
  SubTitle,
  TextAlignCenter,
  Title
} from "./WheelsOthersStyles";

export default class WheelsOthers extends Component {
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
          Conozca <Bold>nuestras otras opciones</Bold>
        </Title>
        <Container>
          <Card isSelected={selectedCard === "sps"} height="809px">
            <TextAlignCenter>
              <Image src={require("../../Images/wheels-3.png")} alt="Superthane" />
            </TextAlignCenter>
            <div>
              <SubTitle color="#ED3833">SPS</SubTitle>
              <Description>La Próxima Generación de Neumáticos de Prensado de Poliuretano Blando.</Description>
            </div>
            <MoreInfo>
              <Specs>
                <SpecsTitle>Características</SpecsTitle>
                <SpecsItem>- Especiales para caba de congelamiento</SpecsItem>
                <SpecsItem>- Manejo más suave en pisos ásperos</SpecsItem>
                <SpecsItem>- Muelles de carga Congeladores</SpecsItem>
              </Specs>
              <ImageItem src={require("../../Images/spec-2.png")} alt="A95" />
            </MoreInfo>
            <Arrow
              isSelected={selectedCard === "sps"}
              src={require("../../Images/arrow.svg")}
              alt="Flecha"
              onClick={() => this.selectCard("sps")}
            />
          </Card>
          <Card isSelected={selectedCard === "hyload"} height="718px">
            <div>
              <TextAlignCenter>
                <Image src={require("../../Images/wheels-4.png")} alt="Superthane" />
              </TextAlignCenter>
              <div>
                <SubTitle color="#A4C239">Hyload</SubTitle>
                <Description>La Solución Definitiva</Description>
              </div>
            </div>
            <MoreInfo>
              <Specs>
                <SpecsTitle>Características</SpecsTitle>
                <SpecsItem>- Trabajo liviano</SpecsItem>
                <SpecsItem>- Preparación depedidos</SpecsItem>
              </Specs>
              <ImageItem src={require("../../Images/spec-1.png")} alt="A95" />
            </MoreInfo>
            <Arrow
              isSelected={selectedCard === "hyload"}
              src={require("../../Images/arrow.svg")}
              alt="Flecha"
              onClick={() => this.selectCard("hyload")}
            />
          </Card>
          <Card isSelected={selectedCard === "vulkollan"} height="809px">
            <div>
              <TextAlignCenter>
                <Image src={require("../../Images/wheels-5.png")} alt="Superthane" />
              </TextAlignCenter>
              <div>
                <SubTitle color="#E2C242">Vulkollan</SubTitle>
                <Description>Máximo Rendimiento</Description>
              </div>
            </div>
            <MoreInfo>
              <Specs>
                <SpecsTitle>Características</SpecsTitle>
                <SpecsItem>- Extrema resistenciaa desprendimientos y lagrimeo</SpecsItem>
                <SpecsItem>- Extrema resistencia a desprendimientos y lagrimeo</SpecsItem>
                <SpecsItem>- Muy baja resistencia a la rodadura</SpecsItem>
              </Specs>
              <ImageItem src={require("../../Images/spec-3.png")} alt="A95" />
            </MoreInfo>
            <Arrow
              isSelected={selectedCard === "vulkollan"}
              src={require("../../Images/arrow.svg")}
              alt="Flecha"
              onClick={() => this.selectCard("vulkollan")}
            />
          </Card>
        </Container>
      </MainContainer>
    );
  }
}
