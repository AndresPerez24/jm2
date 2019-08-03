import React, { Component } from "react";
import { ListItem, StyledLink, StyledButton, Nav } from "./NavigationStyles";

class Navigation extends Component {
  render() {
    return (
      <Nav>
        <ul>
          <ListItem>
            <StyledLink to="/">Home</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/#sobre-nosotros">Nosotros</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/#diferenciales">Diferenciales</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/ruedas">Ruedas</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/#contacto">Contacto</StyledLink>
          </ListItem>
          <ListItem>
            <StyledButton to="/equipos">Equipos</StyledButton>
          </ListItem>
        </ul>
      </Nav>
    );
  }
}

export default Navigation;
