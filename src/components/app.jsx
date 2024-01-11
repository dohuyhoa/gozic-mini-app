import React from "react";
import { Route } from "react-router-dom";

import BottomNavigation from "./bottom-navigation";

import RegisterPage from "../pages/register";
import UserInfo from "../pages/user-info";
import UserUpdate from "../pages/user-update";

import WelcomePage from "../pages/welcome";
import HomePage from "../pages/home";
import Post from "../pages/post";
import New from "../pages/news";
import { App, ZMPRouter, AnimationRoutes } from "zmp-ui";
import { RecoilRoot } from "recoil";
import Contact from "../pages/contact";
import "../css/app.css"
import { useEffect } from "react";
import myUserInfo from "../models/user-info";
import Feedback from "../pages/feedback";

const MyApp = () => {
  myUserInfo.login();
  myUserInfo.getLanguage();

  useEffect(() => {
    const jquery = document.createElement("script");
    jquery.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js";
    jquery.async = true;

    const script = document.createElement("script");
    script.src = "src/js/index.js";
    script.async = true;

    document.body.appendChild(jquery);
    document.body.appendChild(script);
  }, [])

  return (
    <RecoilRoot>
      <App>
        <ZMPRouter>
          <AnimationRoutes>
            <Route path="/" ext element={<WelcomePage />}></Route>

            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route path="/post/:id" element={<Post />}></Route>
            <Route path="/news" element={<New />}></Route>

            <Route path="/user-info" element={<UserInfo />}></Route>
            <Route path="/user-update" element={<UserUpdate />}></Route>
            <Route path="/feedback" element={<Feedback />}></Route>
          </AnimationRoutes>

          <BottomNavigation />
        </ZMPRouter>
      </App>
    </RecoilRoot>
  );
};
export default MyApp;
