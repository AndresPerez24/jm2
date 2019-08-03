import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from '../../BreakPoints';

export const MainContainer = styled.div`
  position: relative;

  .slick-dots {
    display: flex !important;
    width: initial;
    bottom: 70px;
    right: 50%;
    transform: translateX(50%);

    @media ${device.tablet} {
    flex-direction: column;
    font-size: 50px;
    text-align: left;
    transform: translateY(50%);    
    right: 80px;
    bottom: 50%;
  }

    li {
      &:not(:last-child) {
        margin-bottom: 12px;
      }
    }
  }

  .slick-dots li button::before {
    border-radius: 50%;
    border: 3px solid #d8d8d8;
    color: transparent;
    font-size: 16px;
    height: 15px;
    transition: 0.3s;
    width: 15px;
  }

  .slick-dots li.slick-active button::before {
    border-color: #ffffff;
    box-shadow: 0 0 5px 0 #ffffff;
    color: transparent;
    opacity: 1;
  }
`;

export const Slide = styled.div`
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-position: ${({ backgroundPosition }) => backgroundPosition || "center"};
  background-size: cover;
  min-height: 740px;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 160px 20px;
  text-align: center;

  @media ${device.tablet} {
    font-size: 50px;
    text-align: left;
  }
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 30px;
  font-weight: 800;
  line-height: 1;
  max-width: ${({ maxWidth }) => maxWidth};
  margin: 0 auto 20px;

  @media ${device.tablet} {
    font-size: 50px;
    margin: 0 0 20px;
  }
`;

export const Description = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 60px;
  max-width: 400px;
  margin: 0 auto 60px;

  @media ${device.tablet} {
    font-size: 1.25rem;
    max-width: 600px;
    margin: 0 0 60px;
  }
`;

export const Label = styled.span`
  font-weight: 600;
`;

export const Button = styled(Link)`
  border-radius: 30px;
  border: 4px solid #fd7f38;
  color: white;
  cursor: pointer;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 5px;
  max-width: 450px;
  padding: 13px 47px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.3s;
  display: inline-block;

  &:hover {
    box-shadow: 0 0 22px 4px #fa6711;
  }

  @media ${device.tablet} {
    font-size: 0.875rem;
  }
`;

export const Arrow = styled.span`
  align-items: center;
  background-color: #fb7d0b;
  border-radius: 50%;
  bottom: -40px;
  display: flex;
  height: 80px;
  justify-content: center;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 80px;
  display: none;

  @media ${device.tablet} {
    display: flex;
  }
`;
