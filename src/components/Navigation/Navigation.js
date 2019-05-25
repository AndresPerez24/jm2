import React, { Component } from "react";
import { ListItem, StyledLink, StyledButtom } from "./NavigationStyles";

class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
          <ListItem>
            <StyledLink to="/">Home</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/">Nosotros</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/">Diferenciales</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/contact/">Contacto</StyledLink>
          </ListItem>
          <ListItem>
            <StyledButtom to="/equipos/">Equipos</StyledButtom>
          </ListItem>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
