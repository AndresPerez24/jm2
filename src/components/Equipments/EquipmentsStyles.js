import styled from "styled-components";

export const Title = styled.h1`
  font-size: 45px;
  position: relative;
  padding-bottom: 30px;
  margin-bottom: 30px;

  &:after {
    background-color: #ff8824;
    bottom: 0;
    content: "";
    height: 10px;
    position: absolute;
    right: 50%;
    transform: translate(50%);
    width: 80px;
  }
`;

export const TextLight = styled.span`
  font-weight: 300;
`;

export const TextBold = styled.span`
  font-weight: 600;
`;

export const Description = styled.p`
  font-size: 19px;
  text-align: center;
  font-weight: 300;
`;
