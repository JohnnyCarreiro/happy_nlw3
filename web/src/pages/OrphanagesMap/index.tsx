import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { happyMapIcon } from '../../utils/Mapicon'
import {IOrphanage} from '../../utils/entities/IOrphanage'

import mapMarkerImg from '../../images/map-marker.svg'
import { FiArrowRight, FiPlus } from 'react-icons/fi';

import './styles.css'
import api from '../../services/api';



const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<IOrphanage[]>([])

  useEffect(() => {
    api.get('orphanages').then(response=>{
      setOrphanages(response.data)

    })
  },[])
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy - Faça uma criança feliz 😃"/>
          <h2>Escolha um Orfanato no mapa.</h2>
          <p>Muitas crianças estão esperando pela sua visita!</p>
        </header>
        <footer>
          <strong>São José dos Campos</strong>
          <span>São Paulo</span>
        </footer>
      </aside>
      <Map
        center={[-23.1954134,-45.9112845]}
        zoom={13}
        style={{width: '100%', height:'100%'}}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
        {orphanages.map(orphanage => {
          return (
            <Marker
              key={orphanage.id}
              icon={happyMapIcon}
              position={[orphanage.latitude,orphanage.longitude]}
            >
              <Popup closeButton={false} minWidth={240} maxHeight={240} className="map-popup" >
                {orphanage.name}
                <Link to={`orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#fff" />
                </Link>
              </Popup>
            </Marker>
          )
        })}
      </Map>
      <Link to="/orphanages/create" className="create-orphanage" >
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
