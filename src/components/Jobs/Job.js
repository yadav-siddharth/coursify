import React from "react";
import {BiLogoReact} from 'react-icons/bi';
import data from "./data";
import "./job.css";
import Search from "./Search";

const Job = () => {
  return (
    <div className="job">
      <div className="job-header">
        <div>
          <pre className="tag3">Featured Job</pre>
          <h2>Check Out's today featured Job</h2>
          <Search/>
        </div>
        {/* <button className='btn-job'>Previous Job</button>    */}
      </div>
      <div className="job-section">
        {data.map((item,id)=>(
              <div className="job-card" key={id}>
                  <div className="icons">{item.logo}</div>
                  <div className="job-heading">{item.name}</div>
                  <div className="job-author">{item.desc}</div>
                  <pre className="icon-tag">{item.tag}</pre>
              </div>

        ))}

      </div>
    </div>
  );
};

export default Job;
