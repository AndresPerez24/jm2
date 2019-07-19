import styled from "styled-components";

export const MainContainer = styled.div`
  background: #e3e1e1;
  display: flex;
  justify-content: center;
  padding: 96px 72px 72px;
`;

export const Card = styled.div`
  align-items: center;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(23, 28, 33, 0.06);
  display: flex;
  height: 276px;
  justify-content: center;
  padding: 24px;
  position: relative;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 7px 20px 0 rgba(23, 28, 33, 0.19);
  }
`;

export const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

export const Item = styled.div`
  display: inline-block;
  padding: 12px;
  width: 25%;
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
`;

export const Bold = styled.div`
  font-weight: 700;
  letter-spacing: 2px;
`;

export const Link = styled.a`
  align-items: center;
  background-color: rgba(251, 125, 11, 0.7);
  bottom: 0;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.3s;
  z-index: 9;

  &:hover {
    opacity: 1;
  }
`;

export const Description = styled.div`
  font-size: 15px;
  font-weight: 300;
  margin-bottom: 24px;
  text-align: center;
`;
