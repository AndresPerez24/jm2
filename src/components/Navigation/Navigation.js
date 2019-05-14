import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

const ListItem = styled.li`
  display: inline-block;
  font-size: 0.75rem;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #888888;
  transition: 0.3s;
  padding-bottom: 5px;
  margin-right: 20px;
  &:hover {
    font-weight: bolder;
    border-bottom: 4px solid #fd7f38;
  }
`;

const StyledButtom = styled(Link)`
  text-decoration: none;
  background-color: #ff8f31;
  color: #ffffff;
  padding: 11px 47px;
  border-radius: 19px;
`;

export default Navigation;
