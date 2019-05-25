import styled from "styled-components";
import featureBg from "../../Images/features-bg.jpg";

export const MainContainer = styled.div`
  background-attachment: fixed;
  background-image: ${`url(${featureBg})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 20px 120px;
  font-family: "Montserrat", sans-serif;
  text-align: center;
`;

export const MainTitle = styled.h1`
  font-size: 37px;
  color: #ffffff;
  font-weight: 300;

  &:after {
    content: "";
    height: 15px;
    border-bottom: 8px solid white;
    top: 0;
    width: 70px;
    display: block;
    margin: 0 auto;
  }
`;

export const TitleDescription = styled.div`
  max-width: 750px;
  color: #ffffff;
  margin: 0 auto;
  font-size: 1.1875rem;
  margin-bottom: 90px;
`;

export const FeatureContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Feature = styled.div`
  align-items: center;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 18px 0 rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
  padding: 45px;
  text-align: left;
  width: 49%;
`;

export const Image = styled.img`
  width: 75px;
  margin-right: 40px;
`;

export const Title = styled.h2`
  color: #6d6d6d;
  font-size: 18px;
  font-weight: bold;
  max-width: 280px;
  text-transform: uppercase;
`;

export const Description = styled.p`
  color: #555555;
  font-size: 14px;
  max-width: 370px;
  font-weight: 300;
`;
