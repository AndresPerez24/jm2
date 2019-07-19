import React, { Component } from "react";
import Slider from "react-slick";
import arrow from "../../Images/arrow.png";
import { MainContainer, Slide, Container, Title, Description, Button, Arrow, Label } from "./HomePageHeroStyles";
import hero1 from "../../Images/hero-1.jpg";
import hero2 from "../../Images/hero-2.jpg";
import hero3 from "../../Images/hero-3.jpg";
import hero4 from "../../Images/hero-4.jpg";

class Hero extends Component {
  render() {
    const settings = {
      arrows: false,
      autoplay: true,
      dots: true,
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 1,
      speed: 500
    };
    return (
      <MainContainer>
        <Slider {...settings}>
          <Slide backgroundImage={hero1}>
            <Container>
              <Title maxWidth="520px">Elevamos las Metas de su Empresa</Title>
              <Description>
                Conozca nuestros <Label>equipos disponibles</Label> y descubra cómo podemos hacer crecer su negocio de acuerdo a sus
                necesidades particulares.
              </Description>
              <Button href="#">Conózcalos aquí</Button>
            </Container>
          </Slide>
          <Slide backgroundImage={hero2}>
            <Container>
              <Title maxWidth="520px">Trabajamos con las Mejores Marcas</Title>
              <Description>
                Todos nuestros productos cuentan con la garantía y la confianza de <Label>las mejores marcas del mercado</Label>.
              </Description>
              <Button href="#">Equipos disponibles</Button>
            </Container>
          </Slide>
          <Slide backgroundImage={hero3}>
            <Container>
              <Title maxWidth="730px">Tiempos de Entrega Insuperables en el Mercado</Title>
              <Description>
                Reconocemos el valor de su tiempo, por eso nuestro servicio de atención y entrega personalizada le permite obtener sus
                <Label>productos de manera rápida y segura</Label>.
              </Description>
              <Button href="#">Conozca nuestro equipos</Button>
            </Container>
          </Slide>
          <Slide backgroundImage={hero4} backgroundPosition="top">
            <Container>
              <Title maxWidth="520px">La Mayor Variedad del Mercado</Title>
              <Description>
                Nuestra amplia gama de productos y partes para sus equipos le permite acceder a gran calidad por un precio{" "}
                <Label>ajustado a su presupuesto</Label>.
              </Description>
              <Button href="#">Conozca nuestro equipos</Button>
            </Container>
          </Slide>
        </Slider>
        <Arrow>
          <img src={arrow} alt="Arrow" />
        </Arrow>
      </MainContainer>
    );
  }
}

export default Hero;
