import React from "react";
import BottomNavigation from "../components/bottom-navigation";
import { Link } from "zmp-react";
import { Page } from "zmp-ui";

import PageHeading from "../components/page-heading";
import Products from "../components/products";
import Banner from "../components/banner";
const HomePage = () => {
  return (
    <Page>
      <section id="home">
        <PageHeading />
        <div className="container">
          <Banner />
          <Products />
        </div>
      </section>
    </Page>
  );
};

export default HomePage;
