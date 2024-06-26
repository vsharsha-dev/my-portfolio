import React from 'react';
import './styles/Intro.css';

const Intro = () => {
  return (
  <div className='container personal-details'>
    <div className='name-about'>
      <h1 className='my-name'>Sai Harsha Vadde</h1>
      <p className='my-description'>
        Aspiring software developer with 3 years of industry experience. Enthusiastic about 
        Web development, Problem Solving, Algortims, Data Structures, Software Product development
      </p>
    </div>
    <div className='profile-img'>
      <img src='https://cdn-icons-png.flaticon.com/512/7141/7141724.png' className="profile-pic" alt='profile-pic'/>
    </div>
  </div>
  )
}

export default Intro;