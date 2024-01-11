import React, { useEffect } from "react";

import myUserInfo from "../models/user-info";

import GLink from "../components/link";
import { Page } from "zmp-ui";
import { Link, useNavigate } from "react-router-dom";

import welcomeImg from "../static/photos/welcome.png";

import "./index.css";

const WelcomePage = () => {
  const navigateTo = useNavigate();
  myUserInfo.navigateTo = navigateTo;
  myUserInfo.verifyLogin();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigateTo("/home")
  //   }, 700);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <section id="welcome">
      <div className="container">
        <div className="img-frame">
          <Link to="/home">
            <img src={welcomeImg} alt="" />
          </Link>
        </div>
      </div>
    </section>
  );
};

// class WelcomePage extends React.Component {

//   constructor(props) {
//     super(props)
//   }

//   render() {
//     return (
//       <section id="welcome">
//         <div className="container">
//           <div className="img-frame">
//             <Link to="/home">
//               <img src={welcomeImg} alt="" />
//             </Link>
//           </div>
//         </div>

//       </section>

//     );
//   }
// }

export default WelcomePage;
