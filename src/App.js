import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Home from "./components/Home/Home";
import Equipments from "./components/Equipments/Equipments";
import Wheels from "./components/Wheels/Wheels";
import Footer from "./components/Footer/Footer";

function AppRouter() {
  return (
    <Router>
      <ScrollToTop>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/ruedas" exact component={Wheels} />
        <Route path="/equipos" exact component={Equipments} />
        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default AppRouter;
