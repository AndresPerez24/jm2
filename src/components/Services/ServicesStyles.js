import styled from "styled-components";
import { device } from '../../BreakPoints';

export const ServiceContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 100px 20px 120px;
`;

export const MainContainer = styled.div`
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Container = styled.div`
  background: #fb7d0b;
  border-radius: 17px;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.5);
  padding: 50px 30px;
  text-align: center;
  width: 100%;
  margin-bottom: 15px;

  @media ${device.mobileL} {
    width: 49%;
  }

  @media ${device.laptop} {
    width: 24%;
  }
`;

export const Img = styled.div`
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  border: 5px solid #fff;
  height: 175px;
  margin: 0 auto 35px;
  width: 175px;
`;

export const Title = styled.h2`
  font-size: 1rem;
  height: 57px;
  letter-spacing: 2px;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

export const Description = styled.p`
  font-size: 1rem;
  font-weight: 300;
  margin: 0 auto;
`;
