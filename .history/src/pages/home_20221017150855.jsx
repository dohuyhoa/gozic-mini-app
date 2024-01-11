import React from "react";
import BottomNavigation from "../components/bottom-navigation";

import Banner from "../components/banner";
import { Link } from "zmp-react";
const HomePage = () => {
  return (
    <section id="home">
      <Link to="/contact">
        <img src={welcomeImg} alt="" />
      </Link>
      <div className="container">
        <Banner />
        <div>Hello World</div>
      </div>
    </section>
  );
};

export default HomePage;
