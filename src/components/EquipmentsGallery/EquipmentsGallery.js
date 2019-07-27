import React, { Component } from "react";
import { MainContainer, Card, Image, Item, Container, Link, Bold, Description } from "./EquipmentsGalleryStyles";
import EquipmentModal from "../EquipmentModal/EquipmentModal";

import CROWNPE4500 from "../../Images/CROWN-PE-4500.jpg";
import CROWNPE45001 from "../../Images/CROWN-PE-4500-1.jpg";
import CROWNPE45002 from "../../Images/CROWN-PE-4500-2.jpg";
import CROWNPE45003 from "../../Images/CROWN-PE-4500-3.jpg";

import JUNGHEINRICHESC316Z1 from "../../Images/JUNGHEINRICH-ESC-316Z-1.jpg";
import JUNGHEINRICHESC316Z2 from "../../Images/JUNGHEINRICH-ESC-316Z-2.jpg";

import CROWNWP1 from "../../Images/CROWN-WP-1.jpg";
import CROWNWP2 from "../../Images/CROWN-WP-2.jpg";
import CROWNWP3 from "../../Images/CROWN-WP-3.jpg";

import HELICPD301 from "../../Images/HELI-CPD30-1.jpg";
import HELICPD302 from "../../Images/HELI-CPD30-2.jpg";
import HELICPD303 from "../../Images/HELI-CPD30-3.jpg";

const items = [
  {
    id: 1,
    title: "CROWN",
    label: "PE 4500",
    alt: "Montacargas",
    description: (
      <Description>
        <div>Capacidad de Carga: 3600 Kg</div>
        <div>Freezer</div>
        Incluye Batería y Cargador
      </Description>
    ),
    images: [CROWNPE4500, CROWNPE45001, CROWNPE45002, CROWNPE45003]
  },
  {
    id: 2,
    title: "JUNGHEINRICH",
    label: "ESC 316Z",
    alt: "Montacargas",
    description: (
      <Description>
        <div>Capacidad de Carga: 1600 Kg</div>
        <div>Freezer</div>
        Incluye Batería y Cargador
      </Description>
    ),
    images: [JUNGHEINRICHESC316Z1, JUNGHEINRICHESC316Z2]
  },
  {
    id: 3,
    title: "CROWN",
    label: "WP",
    alt: "Montacargas",
    description: (
      <Description>
        <div>Capacidad de Carga: 2000 Kg</div>
        <div>Freezer</div>
        Incluye Batería y Cargador
      </Description>
    ),
    images: [CROWNWP1, CROWNWP2, CROWNWP3]
  },
  {
    id: 4,
    title: "HELI",
    label: "CPD 30",
    alt: "Montacargas",
    description: (
      <Description>
        <div>Capacidad de Carga: 3000 Kg</div>
        <div>Electrica</div>
        Incluye Batería y Cargador
      </Description>
    ),
    images: [HELICPD301, HELICPD302, HELICPD303]
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
                <Image src={item.images[0]} alt={item.alt} />
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
