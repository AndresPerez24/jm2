import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { ListItem, StyledLink, StyledButton, List } from "./NavigationStyles";
import HamburgerButton from "../HamburgerButton/HamburgerButton";

class Navigation extends Component {
  state = {
    navigationIsActive: false
  };

  toggleNavigation = () => {
    this.setState(({ navigationIsActive }) => ({ navigationIsActive: !navigationIsActive }));
  };

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location.pathname !== prevProps.location.pathname || location.hash !== prevProps.location.hash) {
      this.setState({ navigationIsActive: false });
    }
  }

  render() {
    const { navigationIsActive } = this.state;

    return (
      <div>
        <List isActive={navigationIsActive}>
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
        </List>
        <HamburgerButton onClick={this.toggleNavigation} isActive={navigationIsActive} />
      </div>
    );
  }
}

export default withRouter(Navigation);
