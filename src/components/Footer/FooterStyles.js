import styled from "styled-components";

export const Images = styled.div`
  align-items: center;
  display: flex;
  height: 120px;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 20px;
`;

export const ImagesContainer = styled.div`
  box-shadow: 0 0 34px 1px rgba(0, 0, 0, 0.5);
  position: relative;
`;

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
  margin-bottom: 48px;
  margin: 0 auto;
  max-width: 1200px;
  padding-top: 48px;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 48px;
  position: relative;
  text-transform: uppercase;
  width: 33%;

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
`;

export const ListItem = styled.li`
  align-items: center;
  display: flex;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: ${({ marginBottom }) => marginBottom || "12px"};
`;

export const Image = styled.img`
  margin-right: 24px;
`;

export const Label = styled.div`
  font-weight: 400;
`;

export const LogoFooter = styled.img`
  width: 500px;
`;

export const Logo = styled.img``;
