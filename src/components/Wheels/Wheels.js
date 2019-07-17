import React, { Component, Fragment } from "react";
import WheelsHero from "../WheelsHero/WheelsHero";
import WheelsRecommended from "../WheelsRecommended/WheelsRecommended";
import WheelsOthers from "../WheelsOthers/WheelsOthers";

class Wheels extends Component {
  render() {
    return (
      <Fragment>
        <WheelsHero></WheelsHero>
        <WheelsRecommended />
        <WheelsOthers />
      </Fragment>
    );
  }
}

export default Wheels;
