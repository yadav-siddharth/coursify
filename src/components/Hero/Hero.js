import React from "react";
import './hero.css';
import {SiWorkplace} from 'react-icons/si';
import {RiSendPlaneFill} from 'react-icons/ri';
import { FaUserAlt } from "react-icons/fa";
import {MdWork} from 'react-icons/md';
import {AiOutlineArrowRight} from 'react-icons/ai';


const Hero = () => {
  return (
    <div className="hero-section">
      <div className="left">
        <div className="content">
          <pre className="tag"><SiWorkplace/>Recuriting 2023 release . Job Seeker</pre>
          <h1 className="heading">Next generation hiring solution</h1>
          <p className="par">
           <span className="yellow-mark">Powerful agile </span>all-in-one hiring tool for your recuriting
            needs built with productivity at heart and loaded with features <span className="yellow-mark">to
            help you hire more effectivetly</span>
          </p>
          <div className="dash-numbers">
                    <div>
                              <h2>60.5K+</h2>
                              <p><FaUserAlt size={20}/> Million Users</p>
                    </div>
                    <div>
                              <h2>7.2K+</h2>
                              <p><MdWork size={20}/> Job Posted</p>
                    </div>
                    <div>
                              <h2>200.5K+</h2>
                              <p><RiSendPlaneFill size={20}/> Proposal Sent</p>
                    </div>
          </div>
          <button className="btn-hero">Get Started <AiOutlineArrowRight size={20}/></button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
