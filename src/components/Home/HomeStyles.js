import styled from "styled-components";
import { device } from "../../BreakPoints";

export const HomeContainer = styled.div`
  background-color: #f3f3f3;
  padding-top: 120px;
`;

export const Container = styled.div`
  background-color: #ffffff;
  border-top: transparent;
  color: #656464;
  font-family: "Montserrat", sans-serif;
  padding: 30px 0 45px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 37px;
  font-weight: 300;
`;

export const Description = styled.p`
  font-weight: 300;
  margin: 0 auto;
  max-width: 960px;
  padding: 0 20px;

  @media ${device.tablet} {
    max-width: 700px;
  }
`;

export const LocationsContainer = styled.div`
  display: flex;
`;

export const LocationsTitle = styled.div`
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 24px;

  @media ${device.tablet} {
    margin-bottom: 48px;
  }
`;

export const LocationCard = styled.div`
  line-height: 1.6;

  &:not(:last-child) {
    margin-bottom: 24px;

    @media ${device.tablet} {
      margin-bottom: 48px;
    }
  }
`;

export const Link = styled.a`
  color: #fd7f38;
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 550px;
  overflow: hidden;
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;

export const LocationsSidebar = styled.div`
  padding: 48px;
  background-color: #fff;
  width: 100%;

  @media ${device.tablet} {
    width: 500px;
  }
`;
