import React from "react";
import Slider from "react-slick";
import { Container, Modal, Header, Bold, Description, Close, ImageContainer, Image, Thumbnail, Thumbnails } from "./EquipmentModalStyles";

import Image1 from "../../Images/hero-1.jpg";
import Image2 from "../../Images/hero-2.jpg";
import Image3 from "../../Images/hero-3.jpg";
import Image4 from "../../Images/hero-4.jpg";

const images = [Image1, Image2, Image3, Image4];

export default function EquipmentModal() {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
    appendDots: dots => {
      console.log(dots);
      return (
        <div
          style={{
            backgroundColor: "#ddd",
            borderRadius: "10px",
            padding: "10px"
          }}
        >
          <Thumbnails>
            {dots.map(({ key, props }) => (
              <Thumbnail backgroundImage={images[key]} key={key} {...props} />
            ))}
          </Thumbnails>
        </div>
      );
    }
  };
  return (
    <Container>
      <Modal>
        <Close>X</Close>
        <Header>
          <Bold>FORKLIFT CROWN</Bold> PE 4500
        </Header>
        <Description>
          <div>Capacidad de Carga: 6,000 libras</div>
          <div>Freezer Condición</div>
          Incluye Batería y Cargador
        </Description>
        <Slider {...settings}>
          {images.map((image, i) => (
            <div key={i}>
              <ImageContainer>
                <Image src={image} alt="Item" />
              </ImageContainer>
            </div>
          ))}
        </Slider>
      </Modal>
    </Container>
  );
}
