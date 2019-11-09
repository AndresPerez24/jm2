import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import scrollIntoView from "scroll-into-view";
import Contact from "../Contact/Contact";
import Features from "../Features/Features";
import HomePageHero from "../HomePageHero/HomePageHero";
import Service from "../Services/Services";
import {
  Container,
  Description,
  HomeContainer,
  Link,
  LocationCard,
  LocationsContainer,
  LocationsTitle,
  Title,
  MapContainer,
  LocationsSidebar
} from "./HomeStyles";
import MapChart from "../MapChart/MapChart";

let aboutUs;
let features;
let contact;
let locations;

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
        case "#oficinas":
          element = locations;
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
        <div ref={ref => (locations = ref)}>
          <LocationsContainer>
            <LocationsSidebar>
              <LocationsTitle>
                Nuestras <strong>Oficinas</strong>
              </LocationsTitle>
              <LocationCard>
                <strong>Bogota, Colombia</strong>
                <div>Mauricio Rodriguez</div>
                <div>+57 318 7353881</div>
                <Link href="mailto:mrodriguez@sljm2.com">mrodriguez@sljm2.com</Link>
              </LocationCard>
              <LocationCard>
                <strong>Guayaquil, Ecuador</strong>
                <div>Ignacio Sarmiento Hernandez</div>
                <div>+59 398 7769817</div>
                <Link href="mailto:isarmiento@sljm2">isarmiento@sljm2</Link>
              </LocationCard>
            </LocationsSidebar>
            <MapContainer>
              <MapChart />
            </MapContainer>
          </LocationsContainer>
        </div>
      </HomeContainer>
    );
  }
}

export default withRouter(Home);
