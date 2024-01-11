import React from "react";
import BottomNavigation from "../components/bottom-navigation";
import { Link } from "zmp-react";
import { Page } from "zmp-ui";

import PageHeading from "../components/page-heading";

import Banner from "../components/banner";
const HomePage = () => {
  return (
    <Page>
      <section id="home">
        <div className="container">
          <Banner />
          <div>Hello World</div>
        </div>
      </section>
    </Page>
  );
};

export default HomePage;
