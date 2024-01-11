import React from "react";
import BottomNavigation from "../components/bottom-navigation";
import { Link } from "zmp-react";
import { Page } from "zmp-ui";

import Banner from "../components/banner";
const HomePage = () => {
  return (
    <section id="home">
      <div className="container">
        <Banner />
        <div>Hello World</div>
      </div>
    </section>
  );
};

export default HomePage;
