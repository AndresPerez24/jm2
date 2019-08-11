import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../BreakPoints";

export const List = styled.ul`
  background-color: rgba(240, 122, 57, 0.9);
  height: ${({ isActive }) => `${isActive ? "331px" : "0"}`};
  left: 0;
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: absolute;
  right: 0;
  top: 100%;
  transition: 0.3s;

  @media ${device.laptop} {
    background-color: #ffffff;
    height: initial;
    overflow: initial;
    position: static;
  }
`;

export const ListItem = styled.li`
  display: block;
  font-family: "Montserrat", sans-serif;
  font-size: 0.75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;

  &:not(:last-child) {
    border-bottom: 1px solid #bf5100;

    @media ${device.laptop} {
      border: 0;
    }
  }

  @media ${device.laptop} {
    display: inline-block;
    text-align: left;
    padding: 0;
    color: #888888;
  }
`;

export const StyledLink = styled(Link)`
  border-bottom: 4px solid transparent;
  color: #ffffff;
  display: block;
  font-weight: 600;
  padding-bottom: 5px;
  padding: 18px 0;
  text-align: center;
  text-decoration: none;
  transition: 0.3s;

  @media ${device.laptop} {
    color: #888888;
    font-weight: 400;
    margin-right: 20px;

    &:hover {
      border-color: #fd7f38;
    }
  }
`;

export const StyledButton = styled(Link)`
  color: #ffffff;
  font-weight: 600;
  padding: 18px 0;
  display: block;

  @media ${device.laptop} {
    background-color: #ff8f31;
    border-radius: 19px;
    font-weight: 400;
    padding: 11px 47px;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
      box-shadow: 0 0 10px 3px #ff8f31;
    }
  }
`;
