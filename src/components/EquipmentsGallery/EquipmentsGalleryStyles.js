import styled from "styled-components";

export const MainContainer = styled.div`
  background: #e3e1e1;
  display: flex;
  justify-content: center;
  padding: 96px 72px 72px;
`;

export const Card = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  background: #fff;
  height: 276px;
  padding: 24px;
  cursor: pointer;
  border: 2px solid #fff;

  &:hover {
    border-color: #f57502;
  }
`;

export const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

export const Item = styled.div`
  padding: 12px;
  width: 25%;
  display: inline-block;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
`;
