import { Link } from "react-router-dom";
import styled from "styled-components";

export const ListItem = styled.li`
  display: inline-block;
  font-family: "Montserrat", sans-serif;
  font-size: 0.75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const StyledLink = styled(Link)`
  border-bottom: 4px solid transparent;
  color: #888888;
  margin-right: 20px;
  padding-bottom: 5px;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    border-color: #fd7f38;
  }
`;

export const StyledButton = styled(Link)`
  background-color: #ff8f31;
  border-radius: 19px;
  color: #ffffff;
  padding: 11px 47px;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 0 10px 3px #ff8f31;
  }
`;
