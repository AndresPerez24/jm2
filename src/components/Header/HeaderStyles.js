import styled from "styled-components";
import { device } from '../../BreakPoints';

export const BoxShadow = styled.div`
  background-color: #fff;
  box-shadow: 0 5px 15px 0 rgba(0,0,0,0.50);
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 99;
`;

export const MainContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row-reverse;
  height: 120px;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 24px;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

export const Logo = styled.img`
  width: 144px;
`;