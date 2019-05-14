import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import styled from "styled-components";
import logo from "../../Images/logo.png";

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

const BoxShadow = styled.div`
  -webkit-box-shadow: 0px 5px 25px 0px rgba(54, 50, 50, 0.75);
  -moz-box-shadow: 0px 5px 25px 0px rgba(54, 50, 50, 0.75);
  box-shadow: 0px 5px 25px 0px rgba(54, 50, 50, 0.75);
`;

const MainContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img``;

export default Header;
