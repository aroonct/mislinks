import React from 'react';
import logo from '../img/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGlobe, faFan} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faTelegram, faTwitter, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import '../css/img.css';
import '../css/contenedor.css';

function Principal(props) {
  return (
    <div className='container' >
    <div className='contenedorimg' >
      <img className='imglogo' alt='kirohn' src={logo} />
    </div>
    <h1 className='nombre' >*★*――κıяø――*★*</h1>
    <div className='contenedordesc' >
      <h1 className='desc' >Freelancer programmer, student, vegan and animalist, I am Pansexual and gender fluid, fighting for animal rights and the LGBTQ+ community...</h1>
    </div>
      <div className='links' >
        <a target='_blank' href='https://github.com/kirohn24'><FontAwesomeIcon className='iconos' icon={faGithub} /></a>
        <a target='_blank' href='https://t.me/begin24'><FontAwesomeIcon className='iconos' icon={faTelegram} /></a>
        <a target='_blank' href='https://twitter.com/bigan24?t=7ybeTeZZZYahG1juvyO-Rg&s=09'><FontAwesomeIcon className='iconos' icon={faTwitter} /></a>
        <a target='_blank' href='https://kiro.vercel.app/'><FontAwesomeIcon className='iconos' icon={faGlobe} /></a>
        <a target='_blank' href='https://wa.link/ajvoax'><FontAwesomeIcon className='iconos' icon={faWhatsapp} /></a>
        <a target='_blank' href='https://kiro.bearblog.dev/'><FontAwesomeIcon className='iconos' icon={faFan} /></a>
      </div>
      </div>
  );
}

export default Principal;
