import React from "react";
import PropTypes from "prop-types";
import { HamburgerButtonContainer, HamburgerButtonBox, HamburgerButtonInner } from "./HamburgerButtonStyles";

export default function HamburgerButton({ onClick, isActive }) {
  return (
    <HamburgerButtonContainer onClick={onClick}>
      <HamburgerButtonBox>
        <HamburgerButtonInner isActive={isActive} />
      </HamburgerButtonBox>
    </HamburgerButtonContainer>
  );
}

HamburgerButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  className: PropTypes.string
};
