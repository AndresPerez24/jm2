import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import logo from "../../Images/logo.png";
import { BoxShadow, MainContainer, Logo } from "./HeaderStyles";

class Header extends Component {
  render() {
    return (
      <BoxShadow>
        <MainContainer>
          <Logo src={logo} />
          <Navigation />
        </MainContainer>
      </BoxShadow>
    );
  }
}

export default Header;
