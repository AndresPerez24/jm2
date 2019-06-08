import React, { Component, Fragment } from "react";
import ruedas from "../../Images/ruedas.png";
import partes from "../../Images/partes.png";
import equipos from "../../Images/equipos.png";
import { Container, Images, InnerContainer, Logo, List, ListItem, Image, Label, LogoFooter, ImagesContainer } from "./FooterStyles";

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <ImagesContainer>
          <Images>
            <Logo src={ruedas} />
            <Logo src={partes} />
            <Logo src={equipos} />
          </Images>
        </ImagesContainer>
        <Container>
          <InnerContainer>
            <List>
              <ListItem>
                <a href="/">Home</a>
              </ListItem>
              <ListItem>
                <a href="/">Sobre Nosotros</a>
              </ListItem>
              <ListItem>
                <a href="/">Diferenciales</a>
              </ListItem>
              <ListItem>
                <a href="/">Contacto</a>
              </ListItem>
              <ListItem>
                <a href="/">Equipos</a>
              </ListItem>
            </List>
            <List>
              <ListItem marginBottom="24px">
                <Image src={require("../../Images/phone.svg")} alt="Telefono" />
                <Label>(031) 703 7912 - (+57) 318 735 3881</Label>
              </ListItem>
              <ListItem marginBottom="24px">
                <Image src={require("../../Images/envelop.svg")} alt="Correo" />
                <Label>info@sljm2.com</Label>
              </ListItem>
              <ListItem marginBottom="24px">
                <Image src={require("../../Images/landmark.svg")} alt="Ubicación" />
                <Label>Bogotá, Colombia</Label>
              </ListItem>
            </List>
            <List>
              <ListItem>
                <a href="/" target="_blank">
                  <Image src={require("../../Images/facebook.svg")} alt="Facebook" />
                </a>
                <a href="/" target="_blank">
                  <Image src={require("../../Images/instagram.svg")} alt="Instagram" />
                </a>
              </ListItem>
            </List>
          </InnerContainer>
          <LogoFooter src={require("../../Images/logo-footer.png")} alt="Logo" />
        </Container>
      </Fragment>
    );
  }
}

export default Footer;
