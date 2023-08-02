import React from "react";
import data from "./data";
import "./step.css";

const Steps = () => {
  return (
    <>
      <div className="card-header">
        <h2>Create Your Profile And Start Free</h2>
      </div>
      <pre className="tag2">For candidate</pre>
      <div className="card-section">
        {data.map((item, id) => (
          <div className="card" key={id}>
            <img className="card-image" src={item.image} alt="sky" />
            <div className="heading">{item.header}</div>
            <div className="author2">{item.passage}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Steps;
