import React from 'react';
import './styles/Intro.css';
import Button from '@mui/material/Button'
import githubIcon from '../assets/github-icon.png'
import linkedinIcon from '../assets/linkedin-logo.png'

const Intro = () => {
  return (
  <div className='container personal-details'>
    <div className='name-about'>
      <p className='greeting'>Hello there. I'm ..</p>
      <h1 className='my-name'>Sai Harsha Vadde</h1>
      <p className='my-description'>
        An aspiring software developer with 3 years of industry experience. Enthusiastic about 
        Web development, Problem Solving, Algortims, Data Structures, Software Product development
      </p>
      <div className='button-container'>
        <Button className='github-button'>
          <img src={githubIcon} className='github-img'/>
          <p className='github'>Github</p>
        </Button>
        <Button className='linkedin-button'>
          <img src={linkedinIcon} className='linkedin-img'/>
          <p className='linkedin'>LinkedIn</p>
        </Button>
      </div>
    </div>
    <div className='profile-img'>
      <img src='https://cdn-icons-png.flaticon.com/512/7141/7141724.png' className="profile-pic" alt='profile-pic'/>
    </div>
  </div>
  )
}

export default Intro;