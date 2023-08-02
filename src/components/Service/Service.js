import React from 'react';
import Company from '../../assests/Company Long List.png';
import './service.css';

const Service = () => {
  return (
<div className="service-card">
  <div className="tools">
    <div className="circle">
      <span className="red box"></span>
    </div>
    <div className="circle">
      <span className="yellow box"></span>
    </div>
    <div className="circle">
      <span className="green box"></span>
    </div>
  </div>
  <div className="card__content">
          <img src={Company} alt='body' className='service-image'/>
  </div>
</div>
  )
}

export default Service
