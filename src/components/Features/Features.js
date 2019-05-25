import React, { Component } from "react";
import feature1 from "../../Images/feature1.png";
import feature2 from "../../Images/feature2.png";
import feature3 from "../../Images/feature3.png";
import feature4 from "../../Images/feature4.png";
import {
  MainContainer,
  Container,
  MainTitle,
  TitleDescription,
  FeatureContainer,
  Feature,
  Image,
  Title,
  Description
} from "./FeaturesStyles";

class Features extends Component {
  render() {
    return (
      <MainContainer>
        <Container>
          <MainTitle>
            Lo que nos <strong>Diferencia</strong>
          </MainTitle>
          <TitleDescription>
            Además de brindarle los mejores servicios y productos del mercado, cuidamos cada detalle de su proceso de compra. Por eso
            también asesoramos y hacemos seguimiento personal a sus pedidos y necesidades.
          </TitleDescription>
          <FeatureContainer>
            <Feature>
              <Image src={feature1} />
              <div>
                <Title>Tiempos de entrega</Title>
                <Description>
                  Nuestros tiempos de entrega son inigualables. Hacemos el envío personalmente asegurando que lleguen en el momento
                  indicado.
                </Description>
              </div>
            </Feature>
            <Feature>
              <Image src={feature2} />
              <div>
                <Title>Productos únicos en el mercado</Title>
                <Description>
                  Nuestros productos de todas las gamas cubren el espectro de sus necesidades y garantizan la solución de sus necesidades
                  particulares.
                </Description>
              </div>
            </Feature>
            <Feature>
              <Image src={feature3} />
              <div>
                <Title>Soporte y mantenimiento</Title>
                <Description>
                  Atendemos necesidades posteriores que se le presenten a nuestros clientes. Asesoramos y garantizamos la experiencia
                  completa.
                </Description>
              </div>
            </Feature>
            <Feature>
              <Image src={feature4} />
              <div>
                <Title>Servicio y atención</Title>
                <Description>
                  Tratamos a cada uno de nuestros clientes de manera personalizada, por eso estamos pendientes de cada detalle del proceso.
                </Description>
              </div>
            </Feature>
          </FeatureContainer>
        </Container>
      </MainContainer>
    );
  }
}

export default Features;
