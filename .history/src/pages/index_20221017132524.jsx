import React from "react";
import { Link, useNavigate } from "react-router-dom";

import myUserInfo from "../models/user-info";

import welcomeImg from "../static/photos/welcome.png";

import "../css/index.css";

const WelcomePage = () => {
  const navigateTo = useNavigate();
  // myUserInfo.navigateTo = navigateTo;
  // myUserInfo.verifyLogin();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigateTo("/home")
  //   }, 700);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <section id="welcome">
      <div className="container bg-white">
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
