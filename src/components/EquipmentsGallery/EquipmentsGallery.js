import React from "react";
import { MainContainer, Card, Image, Item, Container, Link, Bold } from "./EquipmentsGalleryStyles";
import EquipmentModal from "../EquipmentModal/EquipmentModal";

export default function EquipmentsGallery() {
  return (
    <MainContainer>
      <Container>
        <Item>
          <Card>
            <Image src={require("../../Images/montacargas.jpg")} alt="Montacargas" />
            <Link href="/">
              <Bold>FORKLIFT CROWN</Bold>PE 4500
            </Link>
          </Card>
        </Item>
        <Item>
          <Card>
            <Image src={require("../../Images/montacargas.jpg")} alt="Montacargas" />
            <Link href="/">
              <Bold>FORKLIFT CROWN</Bold>PE 4500
            </Link>
          </Card>
        </Item>
        <Item>
          <Card>
            <Image src={require("../../Images/montacargas.jpg")} alt="Montacargas" />
            <Link href="/">
              <Bold>FORKLIFT CROWN</Bold>PE 4500
            </Link>
          </Card>
        </Item>
        <Item>
          <Card>
            <Image src={require("../../Images/montacargas.jpg")} alt="Montacargas" />
            <Link href="/">
              <Bold>FORKLIFT CROWN</Bold>PE 4500
            </Link>
          </Card>
        </Item>
        <Item>
          <Card>
            <Image src={require("../../Images/montacargas.jpg")} alt="Montacargas" />
            <Link href="/">
              <Bold>FORKLIFT CROWN</Bold>PE 4500
            </Link>
          </Card>
        </Item>
        <Item>
          <Card>
            <Image src={require("../../Images/montacargas.jpg")} alt="Montacargas" />
            <Link href="/">
              <Bold>FORKLIFT CROWN</Bold>PE 4500
            </Link>
          </Card>
        </Item>
      </Container>
      <EquipmentModal />
    </MainContainer>
  );
}
