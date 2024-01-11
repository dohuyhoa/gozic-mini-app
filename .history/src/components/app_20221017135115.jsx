import React from "react";
import { Route } from "react-router-dom";

import myUserInfo from "../models/user-info";

import WelcomePage from "../pages/index";
import BottomNavigation from "./bottom-navigation";

import RegisterPage from "../pages/register";
import UserInfo from "../pages/user-info";
import UserUpdate from "../pages/user-update";

import { App, ZMPRouter, AnimationRoutes } from "zmp-ui";
import { RecoilRoot } from "recoil";

const MyApp = () => {
  // myUserInfo.getLanguage();

  // myUserInfo.login();

  return (
    <RecoilRoot>
      <App>
        <ZMPRouter>
          <AnimationRoutes>
            <Route path="/" element={<WelcomePage />}></Route>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>

            <Route path="/user-info" element={<UserInfo />}></Route>
            <Route path="/user-update" element={<UserUpdate />}></Route>
          </AnimationRoutes>

          <BottomNavigation />
        </ZMPRouter>
      </App>
    </RecoilRoot>
  );
};
export default MyApp;
