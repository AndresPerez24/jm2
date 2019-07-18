import React, { Component, Fragment } from "react";
import WheelsHero from "../WheelsHero/WheelsHero";
import WheelsRecommended from "../WheelsRecommended/WheelsRecommended";
import WheelsOthers from "../WheelsOthers/WheelsOthers";
import WheelsTypes from "../WheelsTypes/WheelsTypes";

class Wheels extends Component {
  render() {
    return (
      <Fragment>
        <WheelsHero></WheelsHero>
        <WheelsRecommended />
        <WheelsOthers />
        <WheelsTypes />
      </Fragment>
    );
  }
}

export default Wheels;
