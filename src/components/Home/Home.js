import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Steps from '../Steps/Steps';
import Job from '../Jobs/Job';
import Service from '../Service/Service';
import Mentor from '../Mentor/Mentor';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Steps/>
      <Service/>
      <Job/>
      <Mentor/>
      <Footer/>
    </div>
  )
}

export default Home
