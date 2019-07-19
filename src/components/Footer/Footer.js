import React, { Component, Fragment } from "react";
import { Container, InnerContainer, List, ListItem, Image, Label, LogoFooter, StyledLink } from "./FooterStyles";

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <InnerContainer>
            <List>
              <ListItem>
                <StyledLink to="/">Home</StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to="/#sobre-nosotros">Sobre Nosotros</StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to="/#diferenciales">Diferenciales</StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to="/#contacto">Contacto</StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to="/equipos">Equipos</StyledLink>
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
                <a href="https://www.facebook.com/Soluciones-Logisticas-JM2-323220237727522/" rel="noopener noreferrer" target="_blank">
                  <Image src={require("../../Images/facebook.svg")} alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/solucioneslogisticasjm2/" target="_blank" rel="noopener noreferrer">
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
