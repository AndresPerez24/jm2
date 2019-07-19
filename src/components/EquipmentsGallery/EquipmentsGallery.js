import React, { Component } from "react";
import { MainContainer, Card, Image, Item, Container, Link, Bold, Description } from "./EquipmentsGalleryStyles";
import EquipmentModal from "../EquipmentModal/EquipmentModal";

import Image1 from "../../Images/hero-1.jpg";
import Image2 from "../../Images/hero-2.jpg";
import Image3 from "../../Images/hero-3.jpg";
import Image4 from "../../Images/hero-4.jpg";

const images = [Image1, Image2, Image3, Image4];

const items = [
  {
    id: 1,
    title: "FORKLIFT CROWN",
    label: "PE 4500",
    image: "montacargas",
    alt: "Montacargas",
    description: (
      <Description>
        <div>Capacidad de Carga: 6,000 libras</div>
        <div>Freezer Condición</div>
        Incluye Batería y Cargador
      </Description>
    ),
    images
  }
];

export default class EquipmentsGallery extends Component {
  state = {
    isModalActive: false,
    selectedItem: { images: [] }
  };

  onClickCard = (e, data) => {
    e.preventDefault();
    this.setState({ selectedItem: data, isModalActive: true });
  };

  onCloseModal = () => {
    this.setState({ isModalActive: false });
  };

  render() {
    const { isModalActive, selectedItem } = this.state;

    return (
      <MainContainer>
        <Container>
          {items.map(item => (
            <Item key={item.id}>
              <Card>
                <Image src={require(`../../Images/${item.image}.jpg`)} alt={item.alt} />
                <Link href="/" onClick={e => this.onClickCard(e, item)}>
                  <Bold>{item.title}</Bold>
                  {item.label}
                </Link>
              </Card>
            </Item>
          ))}
        </Container>
        <EquipmentModal isActive={isModalActive} data={selectedItem} onCloseModal={this.onCloseModal} />
      </MainContainer>
    );
  }
}
