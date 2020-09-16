import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaMapMarker } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="col">
        <h6 className="bottomDivider"></h6>
      </div>
      <div className="w-100"></div>
      <div className="col">
        <div className="row">
          <div className="col-md contactFooter">
            <h4>Contact Us</h4>
            <h6>
              <FaPhoneAlt size={14} className="footerIcon" />
              +971 50 7401478
            </h6>
            <h6>
              <FaWhatsapp size={16} className="footerIcon" />
              +971 50 1917806
            </h6>

            <h6>
              <FaMapMarker size={14} className="footerIcon" />
              &nbsp;35th floor, Office #17, Al Saqr Business Tower, Sheikh Zayed
              Road, Dubai
            </h6>
          </div>
          <div className="col-md pageFooter">
            <h4>Legal</h4>
            <h6>Terms</h6>
            <h6>Privacy Policy</h6>
            <h6>© 2020 ProNation Group</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
