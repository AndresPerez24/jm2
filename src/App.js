import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Home from "./components/Home/Home";
import Equipments from "./components/Equipments/Equipments";
import Footer from "./components/Footer/Footer";

function AppRouter() {
  return (
    <Router>
      <div>
        <Header />
        <Hero />
        <Route path="/" exact component={Home} />
        <Route path="/equipos" exact component={Equipments} />
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default AppRouter;
