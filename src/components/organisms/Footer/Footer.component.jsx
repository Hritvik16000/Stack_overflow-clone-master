import React, { Fragment } from "react";

import {ReactComponent as GitHub} from "../../../assets/GitHub.svg";
import {ReactComponent as Database} from "../../../assets/Database.svg";

import './Footer.styles.scss';

const Footer = () => {
  return <Fragment>
    <div className='footer'>
      <div className="socials">
        <div className="social-item">
          
            <GitHub/>
         
          <p><strong>Frontend</strong></p>
        </div>
        <div className="social-item">
          
            <Database/>
          
          <p><strong>Backend</strong></p>
        </div>
      </div>
    </div>
  </Fragment>
};

export default Footer;