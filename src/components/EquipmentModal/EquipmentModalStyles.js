import styled from "styled-components";
import { device } from '../../BreakPoints';

export const Container = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  opacity: ${({ isActive }) => (isActive ? "1" : "0")};
  position: fixed;
  right: 0;
  top: 0;
  transition: 0.3s;
  visibility: ${({ isActive }) => (isActive ? "visible" : "hidden")};
  z-index: 100;

  .slick-dots {
    background-color: transparent !important;
    bottom: -101px !important;
    padding: 0 !important;
  }

  .slick-slider {
    margin-bottom: 98px;
  }

  .slick-arrow {
    z-index: 99;

    &:before {
      color: #767676;
      font-size: 40px;
    }

    &.slick-prev {
      left: 17px;
    }

    &.slick-next {
      right: 38px;
    }
  }
`;

export const Modal = styled.div`
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 24px -3px rgba(0, 0, 0, 0.5);
  padding: 24px;
  width: 410px;
  position: relative;

  @media ${device.mobileL} {
  width: 500px;
  }

  @media ${device.laptop} {
  width: 650px;
  }
`;

export const Header = styled.div`
  background-color: #fb7d0b;
  border-radius: 26px;
  color: #fff;
  margin: 0 auto 24px;
  padding: 12px 48px;
  text-align: center;
  width: 255px;
`;

export const Bold = styled.div`
  font-weight: 700;
`;

export const Close = styled.div`
  align-items: center;
  background-color: #fb7d0b;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  display: flex;
  height: 35px;
  justify-content: center;
  position: absolute;
  right: 24px;
  top: 24px;
  width: 35px;
`;

export const ImageContainer = styled.div`
  height: 300px;
  width: 300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

export const Thumbnail = styled.li`
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  box-shadow: 0 2px 4px 0 rgba(23, 28, 33, 0.06);
  height: 70px !important;
  margin: 0 7px !important;
  width: 70px !important;
  transition: 0.3s;
  border: 3px solid #fff;

  &.slick-active {
    border-color: #fb7d0b;
  }

  &:hover {
    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.5);
  }

  button {
    border-radius: 50%;
    bottom: 0;
    height: 100% !important;
    left: 0;
    padding: 0 !important;
    position: absolute;
    right: 0;
    top: 0;
    width: 100% !important;

    &:before {
      display: none;
    }
  }
`;

export const Thumbnails = styled.ul`
  margin: 0;
  padding: 0;
`;
