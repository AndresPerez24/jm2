import React from "react";
import { MainContainer, Text, Wheel, Container, Item, Title, InnerContainer } from "./WheelsTypesStyles";

export default function WheelsTypes() {
  return (
    <MainContainer>
      <InnerContainer>
        <Title>Huellas</Title>
        <Container>
          <Item>
            <Wheel src={require("../../Images/wheel-smooth-flat.png")} alt="Smooth Flat" />
            <Text>Smooth Flat</Text>
          </Item>
          <Item>
            <Wheel src={require("../../Images/wheel-smooth-crown.png")} alt="Smooth Crown" />
            <Text>Smooth Crown</Text>
          </Item>
          <Item>
            <Wheel src={require("../../Images/wheel-semi-crown.png")} alt="Semi Crown" />
            <Text>Semi Crown</Text>
          </Item>
          <Item>
            <Wheel src={require("../../Images/wheel-full-width.png")} alt="Full Width" />
            <Text>Full Width</Text>
          </Item>
          <Item>
            <Wheel src={require("../../Images/wheel-traction-contour.png")} alt="Traction Contour" />
            <Text>Traction Contour</Text>
          </Item>
          <Item>
            <Wheel src={require("../../Images/wheel-cross-grove.png")} alt="Cross Grove" />
            <Text>Cross Grove</Text>
          </Item>
          <Item>
            <Wheel src={require("../../Images/wheel-diamond-tread.png")} alt="Diamond Tread" />
            <Text>Diamond Tread</Text>
          </Item>
          <Item>
            <Wheel src={require("../../Images/wheel-grooved.png")} alt="Grooved" />
            <Text>Grooved</Text>
          </Item>
          <Item>
            <Wheel src={require("../../Images/wheel-cross-grove.png")} alt="Cross Grove" />
            <Text>Cross Grove</Text>
          </Item>
          <Item>
            <Wheel src={require("../../Images/wheel-extreme-diamond.png")} alt="Extreme Diamond" />
            <Text>Extreme Diamond</Text>
          </Item>
          <Item>
            <Wheel src={require("../../Images/wheel-sensor-siping.png")} alt="Sensor Siping" />
            <Text>Sensor Siping</Text>
          </Item>
        </Container>
      </InnerContainer>
    </MainContainer>
  );
}
