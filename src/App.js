import React from "react";
import UnderConstruction from "./maintenance2.png";
import PronationLogo from "./pronationLogo";
import Footer from "./footer";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <nav className="navBar">
        <PronationLogo
          color1="url(#grad1)"
          color2="url(#grad2)"
          height={56}
          width={56}
        />{" "}
        <h2>ProNation Group</h2>
      </nav>
      <div className="row">
        <div className="col-md constructionText">
          <h2>
            Hello! <strong>👋</strong>
          </h2>
          <h1>We are launching</h1>
          <h1>our website</h1>
          <h1>
            pretty soon <h6>🚀</h6>
          </h1>
          <h3>Stay in touch</h3>
          <h5>
            <a href="https://www.facebook.com/PronationEvents/">
              <FaFacebookSquare className="facebookIcon" fontSize={40} />
            </a>
            <a href="https://www.instagram.com/pronation_em/">
              <FaInstagram className="instagramIcon" fontSize={43} />
            </a>
            <a href="https://twitter.com/EventsPronation">
              <FaTwitterSquare className="twitterIcon" fontSize={40} />
            </a>
            <a href="mailto:info@pronationevents.com">
              <FaEnvelopeOpenText className="mailIcon" fontSize={35} />
            </a>
          </h5>
        </div>
        <div className="col-md stirringPic">
          <img
            src={UnderConstruction}
            alt="UnderConstruction"
            className="UnderConstruction"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
