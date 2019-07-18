import React from "react";
import { MainContainer, Text, Wheel, Container, Item, Title, SubTitle, Description, MoreInfo, Flex, Specs, SpecsItem, SpecsTitle } from "./WheelsTypesStyles";

export default function WheelsTypes() {
  return (
    <MainContainer>
      <Title>Huellas</Title>
      <Container>
        <Item>
          <Wheel  src={require("../../Images/wheel-1.png")} alt="Smooth Flat" />
          <Text>Smooth Flat</Text>
        </Item>
        <Item>
          <Wheel  src={require("../../Images/wheel-1.png")} alt="Smooth Crown" />
          <Text>Smooth Crown</Text>
        </Item>
        <Item>
          <Wheel  src={require("../../Images/wheel-1.png")} alt="Semi Crown" />
          <Text>Semi Crown</Text>
        </Item>
        <Item>
          <Wheel  src={require("../../Images/wheel-1.png")} alt="Full Width" />
          <Text>Full Width</Text>
        </Item>
        <Item>
          <Wheel  src={require("../../Images/wheel-1.png")} alt="Traction Contour" />
          <Text>Traction Contour</Text>
        </Item>
        <Item>
          <Wheel  src={require("../../Images/wheel-1.png")} alt="Cross Grove" />
          <Text>Cross Grove</Text>
        </Item>
        <Item>
          <Wheel  src={require("../../Images/wheel-1.png")} alt="Diamond Tread" />
          <Text>Diamond Tread</Text>
        </Item>
        <Item>
          <Wheel  src={require("../../Images/wheel-1.png")} alt="Grooved" />
          <Text>Grooved</Text>
        </Item>
        <Item>
          <Wheel  src={require("../../Images/wheel-1.png")} alt="Cross Grove" />
          <Text>Cross Grove</Text>
        </Item>
        <Item>
          <Wheel  src={require("../../Images/wheel-1.png")} alt="Extreme Diamond" />
          <Text>Extreme Diamond</Text>
        </Item>
        <Item>
          <Wheel  src={require("../../Images/wheel-1.png")} alt="Sensor Siping" />
          <Text>Sensor Siping</Text>
        </Item>
      </Container>
    </MainContainer>
  );
}
