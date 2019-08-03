import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from '../../BreakPoints';

export const Container = styled.div`
  background-color: #f57502;
  font-size: 0;
  text-align: center;
`;

export const InnerContainer = styled.div`
  background-color: #f57502;
  color: #fff;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 48px;
  margin: 0 auto;
  max-width: 1200px;
  padding-top: 48px;
  text-align: center;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 48px;
  position: relative;
  text-transform: uppercase;
  width: 100%;

  &:not(:last-child) {
    &:after {
      background-color: #d55501;
      content: "";
      height: 140px;
      position: absolute;
      right: 0;
      top: 0;
      width: 2px;
    }
  }

  @media ${device.laptop} {
  width: 33%;
  }
`;

export const ListNav = styled(List)`
  display: none;

  @media ${device.laptop} {
    display: block;
  }
`;

export const ListItem = styled.li`
  align-items: center;
  display: flex;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: ${({ marginBottom }) => marginBottom || "12px"};
  justify-content: center;

  @media ${device.laptop} {
    justify-content: normal;
  }
`;

export const Image = styled.img`
  margin-right: 24px;
`;

export const Label = styled.div`
  font-weight: 400;
`;

export const LogoFooter = styled.img`
  width: 100%;
  max-width: 500px;
`;

export const StyledLink = styled(Link)`
  cursor: pointer;
`;
