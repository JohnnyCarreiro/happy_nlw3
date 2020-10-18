import React from 'react';
import { Link } from 'react-router-dom'
import './style.css'

//images
import logo from '../../images/Logo.svg'
import { FiArrowRight } from 'react-icons/fi'

const Landing: React.FC = () => {
  return (
    <div id="page-landing">
    <div className="content-wrapper">
      <img src={logo} alt="Happy - Faça uma criança feliz"/>
      <main>
        <h1>Leve Felicidade para o mundo</h1>
        <p>Visite orfanatos e mude o dia de muitas crianças.</p>
      </main>
      <div className="location">
        <strong>São José dos Campos</strong>
        <span>São Paulo</span>
      </div>
      <Link to="/orfanatos" className="enter-app">
        <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
      </Link>
    </div>
  </div>
  );
}

export default Landing;
