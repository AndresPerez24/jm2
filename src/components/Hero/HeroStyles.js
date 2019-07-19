import styled from "styled-components";

export const Background = styled.div`
  background-image: ${`url(${require("../../Images/equipments-bg.jpg")})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  margin-top: 120px;
  position: relative;
`;

export const MainContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 940px;
  padding: 84px 0;
`;

export const Label = styled.div`
  background: #fb7d0b;
  border-radius: 26px;
  position: absolute;
  display: flex;
  align-items: center;
  right: 50%;
  transform: translate(50%, 50%);
  bottom: 0;
  padding: 12px 36px;
  z-index: 8;
`;

export const LabelItem = styled.div`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-right: 48px;
  }
`;

export const LabelImage = styled.img`
  margin-right: 12px;
`;
