import React from 'react'
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import './styles.css'

import mapMarkerImg from '../../images/map-marker.svg'

const Sidebar: React.FC = () => {
  const { goBack } = useHistory();
  return (
    <aside className="app-sidebar" >
      <Link to="/">
        <img src={mapMarkerImg} alt="Happy" />
      </Link>
        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </aside>
  );
}

export default Sidebar;
