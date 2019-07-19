import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import logo from "../../Images/logo.png";
import { BoxShadow, MainContainer, Logo } from "./HeaderStyles";

class Header extends Component {
  render() {
    return (
      <BoxShadow>
        <MainContainer>
          <Link to="/">
            <Logo src={logo} />
          </Link>
          <Navigation />
        </MainContainer>
      </BoxShadow>
    );
  }
}

export default Header;
