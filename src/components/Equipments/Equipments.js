import React, { Component, Fragment } from "react";
import EquipmentsHero from "../EquipmentsHero/EquipmentsHero";
import EquipmentsGallery from "../EquipmentsGallery/EquipmentsGallery";

class Equipments extends Component {
  render() {
    return (
      <Fragment>
        <EquipmentsHero />
        <EquipmentsGallery />
      </Fragment>
    );
  }
}

export default Equipments;
