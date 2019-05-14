import React, { Component } from "react";
import styled from "styled-components";
import feature from "../../Images/feature.png";

class Features extends Component {
  render() {
    return (
      <MainContainer>
        <Container>
          <MainTitle>Lo que nos Diferencia</MainTitle>
          <TitleDescription>
            Además de brindarle los mejores servicios y productos del mercado,
            cuidamos cada detalle de su proceso de compra. Por eso también
            asesoramos y hacemos seguimiento personal a sus pedidos y
            necesidades.
          </TitleDescription>
          <FeatureContainer>
            <Feature>
              <Image src={feature} />
              <InnerContainer>
                <Title>Tiempos de entrega</Title>
                <Description>
                  Nuestros tiempos de entrega son inigualables. Hacemos el envío
                  personalmente asegurando que lleguen en el momento indicado.
                </Description>
              </InnerContainer>
            </Feature>
            <Feature>
              <Image src={feature} />
              <InnerContainer>
                <Title>Tiempos de entrega</Title>
                <Description>
                  Nuestros tiempos de entrega son inigualables. Hacemos el envío
                  personalmente asegurando que lleguen en el momento indicado.
                </Description>
              </InnerContainer>
            </Feature>
            <Feature>
              <Image src={feature} />
              <InnerContainer>
                <Title>Tiempos de entrega</Title>
                <Description>
                  Nuestros tiempos de entrega son inigualables. Hacemos el envío
                  personalmente asegurando que lleguen en el momento indicado.
                </Description>
              </InnerContainer>
            </Feature>
            <Feature>
              <Image src={feature} />
              <InnerContainer>
                <Title>Tiempos de entrega</Title>
                <Description>
                  Nuestros tiempos de entrega son inigualables. Hacemos el envío
                  personalmente asegurando que lleguen en el momento indicado.
                </Description>
              </InnerContainer>
            </Feature>
          </FeatureContainer>
        </Container>
      </MainContainer>
    );
  }
}

const MainContainer = styled.div``;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 20px 120px;
  font-family: "Montserrat", sans-serif;
  text-align: center;
`;

const MainTitle = styled.h1`
  font-size: 2.3125rem;
  color: #ffffff;
  &:after {
    content: "";
    height: 15px;
    border-bottom: 8px solid white;
    top: 0;
    width: 70px;
    display: block;
    margin: 0 auto;
  }
`;

const TitleDescription = styled.div`
  max-width: 750px;
  color: #ffffff;
  margin: 0 auto;
  font-size: 1.1875rem;
  margin-bottom: 90px;
`;

const FeatureContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Feature = styled.div`
  width: 49%;
  text-align: left;
  border: 1px solid black;
  border-radius: 17px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 45px 0px;
`;

const InnerContainer = styled.div`
  padding: 0 20px;
`;

const Image = styled.img`
  margin-left: 20px;
`;

const Title = styled.h2`
  font-size: 1.125rem;
  color: #6d6d6d;
  font-weight: bold;
  text-transform: uppercase;
`;

const Description = styled.p`
  font-size: 0.875rem;
  color: #555555;
  max-width: 370px;
`;

export default Features;
