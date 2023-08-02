import React from "react";
import data from "./data";
import {GrAchievement} from 'react-icons/gr';
import "./mentor.css";

const Mentor = () => {
  return (
    <div className="mentor">
      <h1 className="mentor-header"><GrAchievement size={30} style={{color:"#123054"}}/> Meet our Achievers</h1>

      <div className="mentor-section">
        {data.map((item,id)=>(
          <>
                  <img src={item.img} alt="" className="mentor-img" />
                  <div className="mentor-card" key={id}>
                    <p className="message">
                      {item.messg}
                    </p>
                    <p className="message"> - {item.name}</p>
                  </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Mentor;
