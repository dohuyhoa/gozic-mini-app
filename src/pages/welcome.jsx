import React from "react";
import BottomNavigation from "../components/bottom-navigation";
import { Link } from "zmp-react";
import { useNavigate } from "react-router-dom";
import { Page } from "zmp-ui";

import { useEffect, useState } from "react";
import PageHeading from "../components/page-heading";
import Banner from "../components/banner";
import Footer from "../components/footer";

import LoadingModal from "../components/loading-popup";

import myUserInfo from "../models/user-info";

const WelcomePage = () => {
  const navigateTo = useNavigate();

  const [loading, setLoading] = useState({ loading: true });

  myUserInfo.navigateTo = navigateTo;

  return (
    <Page>
      <section id="home" className="bg-light">
        <PageHeading />

        <Footer />

        <LoadingModal show={loading} />
      </section>
    </Page>
  );
};

export default WelcomePage;
