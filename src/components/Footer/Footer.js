import React, { Component } from "react";
import styled from "styled-components";
import ruedas from "../../Images/ruedas.png";
import partes from "../../Images/partes.png";
import equipos from "../../Images/equipos.png";

class Footer extends Component {
  render() {
    return (
      <MainContainer>
        <Logo src={ruedas} />
        <Logo src={partes} />
        <Logo src={equipos} />
      </MainContainer>
    );
  }
}

const MainContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const Logo = styled.img``;

export default Footer;
