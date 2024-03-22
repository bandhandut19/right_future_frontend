import React, { useEffect } from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import Particle from '../components/Particle';
// import Particle from '../components/Particle';
import Plans from '../containers/Plan';
const Plan = () => {
  useEffect(()=>{
    window.scrollTo(0,1)
  },[])
  return (
    <>
      <Particle/>
      <Header/>
      <div className="rf_front_plan_hero_wrapper">
        <div className="container">
          <div className="rf_front_plan_hero_container">
            <div className="title">
              <h2>Buy Plan And Earn More Money</h2>
            </div>
          </div>
        </div>
      </div>
      <Plans/>
      <Footer/>
    </>
  )
}

export default Plan;