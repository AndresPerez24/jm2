import React from "react";
import { MainContainer, Card, Image, Item, Container } from "./EquipmentsGalleryStyles";

export default function EquipmentsGallery() {
  return (
    <MainContainer>
      <Container>
        <Item>
          <Card>
            <Image src={require("../../Images/montacargas.jpg")} alt="Montacargas" />
          </Card>
        </Item>
        <Item>
          <Card>
            <Image src={require("../../Images/montacargas.jpg")} alt="Montacargas" />
          </Card>
        </Item>
        <Item>
          <Card>
            <Image src={require("../../Images/montacargas.jpg")} alt="Montacargas" />
          </Card>
        </Item>
        <Item>
          <Card>
            <Image src={require("../../Images/montacargas.jpg")} alt="Montacargas" />
          </Card>
        </Item>
        <Item>
          <Card>
            <Image src={require("../../Images/montacargas.jpg")} alt="Montacargas" />
          </Card>
        </Item>
        <Item>
          <Card>
            <Image src={require("../../Images/montacargas.jpg")} alt="Montacargas" />
          </Card>
        </Item>
        <Item>
          <Card>
            <Image src={require("../../Images/montacargas.jpg")} alt="Montacargas" />
          </Card>
        </Item>
        <Item>
          <Card>
            <Image src={require("../../Images/montacargas.jpg")} alt="Montacargas" />
          </Card>
        </Item>
      </Container>
    </MainContainer>
  );
}
