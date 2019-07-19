import React from "react";
import Slider from "react-slick";
import { Container, Modal, Header, Bold, Close, ImageContainer, Image, Thumbnail, Thumbnails } from "./EquipmentModalStyles";

export default function EquipmentModal({ isActive, onCloseModal, data }) {
  const { title, label, description, images } = data;
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
    appendDots: dots => {
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
    <Container isActive={isActive}>
      <Modal>
        <Close onClick={onCloseModal}>X</Close>
        <Header>
          <Bold>{title}</Bold>
          {label}
        </Header>
        {description}
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
