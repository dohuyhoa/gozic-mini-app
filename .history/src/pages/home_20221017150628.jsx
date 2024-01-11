import React from "react";
import BottomNavigation from "../components/bottom-navigation";

import Banner from "../components/banner";
import { Link } from "zmp-react";
const HomePage = () => {
  return (
    <section id="home">
      <div className="container">
        <Banner />
        <div>Hello World</div>
        <Link to="/contact">
          <p>Contact</p>
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
