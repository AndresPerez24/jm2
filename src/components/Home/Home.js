import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import scrollIntoView from "scroll-into-view";
import Contact from "../Contact/Contact";
import Features from "../Features/Features";
import HomePageHero from "../HomePageHero/HomePageHero";
import Service from "../Services/Services";
import { HomeContainer, Container, Title, Description } from "./HomeStyles";

let aboutUs;
let features;
let contact;

class Home extends Component {
  state = {};

  static scrollToSection = hash => {
    if (hash) {
      let element;
      switch (hash) {
        case "#sobre-nosotros":
          element = aboutUs;
          break;
        case "#diferenciales":
          element = features;
          break;
        case "#contacto":
          element = contact;
          break;
        default:
          break;
      }
      scrollIntoView(element, { align: { top: 0, topOffset: 100 } });
    }
  };

  componentDidMount() {
    Home.scrollToSection(this.props.location.hash);
  }

  static getDerivedStateFromProps({ location }) {
    Home.scrollToSection(location.hash);
    return {};
  }

  render() {
    return (
      <HomeContainer>
        <HomePageHero />
        <Container ref={ref => (aboutUs = ref)}>
          <Title>
            Sobre <strong>Nosotros</strong>
          </Title>
          <Description>
            En JM2 apoyamos la gestión logística de su negocio con soluciones integrales para centros de almacenamiento, a través del
            alquiler y venta de montacargas y ruedas, entre otras soluciones que incrementarán la productividad de sus operaciones.
          </Description>
        </Container>
        <Service />
        <div ref={ref => (features = ref)}>
          <Features />
        </div>
        <div ref={ref => (contact = ref)}>
          <Contact />
        </div>
      </HomeContainer>
    );
  }
}

export default withRouter(Home);
