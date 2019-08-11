import styled from "styled-components";
import { device } from "../../BreakPoints";

const hamburgerBoxHeight = "20px";
const hamburgerBoxWidth = "25px";
const hamburgerHoverTransitionDuration = "0.2s";
const hamburgerHoverTransitionTimingFunction = "linear";
const hamburgerLayerBorderRadius = "4px";
const hamburgerLayerColor = "#F47A20";
const hamburgerLayerHeight = "4px";
const hamburgerPadding = "12px";

export const HamburgerButtonContainer = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  display: block;
  font-size: 0;
  margin: 0 -${hamburgerPadding};
  overflow: visible;
  padding: ${hamburgerPadding};
  position: relative;
  text-transform: none;
  transition-duration: ${hamburgerHoverTransitionDuration};
  transition-property: opacity, filter;
  transition-timing-function: ${hamburgerHoverTransitionTimingFunction};

  &:focus {
    outline: none;
  }

  @media ${device.laptop} {
    display: none;
  }
`;

export const HamburgerButtonBox = styled.span`
  display: inline-block;
  height: ${hamburgerBoxHeight};
  position: relative;
  width: ${hamburgerBoxWidth};
`;

export const HamburgerButtonInner = styled.span`
  background-color: ${hamburgerLayerColor};
  border-radius: ${hamburgerLayerBorderRadius};
  display: block;
  height: ${hamburgerLayerHeight};
  margin-top: -2px;
  position: absolute;
  top: ${({ isActive }) => `${isActive ? "0" : "2px"}`};
  transform: ${({ isActive }) => `${isActive ? "translate3d(0, 10px, 0) rotate(45deg)" : "none"}`};
  transition-duration: ${hamburgerHoverTransitionDuration};
  transition-property: transform;
  transition-timing-function: ease;
  width: ${hamburgerBoxWidth};

  &:before,
  &:after {
    background-color: ${hamburgerLayerColor};
    border-radius: ${hamburgerLayerBorderRadius};
    content: "";
    display: block;
    height: ${hamburgerLayerHeight};
    position: absolute;
    transition-duration: ${hamburgerHoverTransitionDuration};
    transition-property: transform;
    transition-timing-function: ease;
    width: ${hamburgerBoxWidth};
    width: 100%;
  }

  &:before {
    opacity: ${({ isActive }) => `${isActive ? "0" : "1"}`};
    top: 7px;
    transform: ${({ isActive }) => `${isActive ? "rotate(-45deg) translate3d(-5.7px, -6px, 0)" : "none"}`};
    transition-duration: ${hamburgerHoverTransitionDuration};
    transition-property: transform, opacity;
    transition-timing-function: ease;
  }

  &:after {
    top: 14px;
    transform: ${({ isActive }) => `${isActive ? "translate3d(0, -14px, 0) rotate(-90deg)" : "none"}`};
  }
`;
