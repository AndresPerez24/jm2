import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import hero from "../../Images/hero-1.jpg";
import arrow from "../../Images/arrow.png";

class Hero extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <MainContainer>
        <Slider {...settings}>
          <Slide>
            <Container>
              <Title>Elevamos las Metas de su Empresa</Title>
              <Description>
                Conozca nuestros equipos disponibles y descubra cómo podemos
                hacer crecer su negocio de acuerdo a sus necesidades
                particulares.
              </Description>
              <Button href="#">Conózcalos aquí</Button>
            </Container>
          </Slide>
          <Slide>
            <Container>
              <Title>Elevamos las Metas de su Empresa</Title>
              <Description>
                Conozca nuestros equipos disponibles y descubra cómo podemos
                hacer crecer su negocio de acuerdo a sus necesidades
                particulares.
              </Description>
              <Button href="#">Conózcalos aquí</Button>
            </Container>
          </Slide>
          <Slide>
            <Container>
              <Title>Elevamos las Metas de su Empresa</Title>
              <Description>
                Conozca nuestros equipos disponibles y descubra cómo podemos
                hacer crecer su negocio de acuerdo a sus necesidades
                particulares.
              </Description>
              <Button href="#">Conózcalos aquí</Button>
            </Container>
          </Slide>
          <Slide>
            <Container>
              <Title>Elevamos las Metas de su Empresa</Title>
              <Description>
                Conozca nuestros equipos disponibles y descubra cómo podemos
                hacer crecer su negocio de acuerdo a sus necesidades
                particulares.
              </Description>
              <Button href="#">Conózcalos aquí</Button>
            </Container>
          </Slide>
        </Slider>
        <Arrow src={arrow} />
      </MainContainer>
    );
  }
}

const MainContainer = styled.div`
  position: relative;
`;

const Slide = styled.div`
  background-image: url(${hero});
  background-size: cover;
  background-position: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 180px 20px 290px;
`;

const Title = styled.h1`
  font-size: 3.1875rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  max-width: 500px;
  color: #ffffff;
  line-height: 1;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.25rem;
  font-family: "Montserrat", sans-serif;
  color: #ffffff;
  font-weight: 100;
  max-width: 600px;
  margin-bottom: 60px;
`;

const Button = styled.span`
  color: white;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 0.875rem;
  cursor: pointer;
  letter-spacing: 5px;
  border: 4px solid #fd7f38;
  padding: 17px 115px 17px 40px;
  border-radius: 30px;
`;

const Arrow = styled.img`
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  position: absolute;
  bottom: 10px;
  &:before {
    content: "";
    display: inline-block;
    width: 15px;
    height: 15px;
    -moz-border-radius: 7.5px;
    -webkit-border-radius: 7.5px;
    border-radius: 7.5px;
    background-color: #69b6d5;
  }
`;

export default Hero;
