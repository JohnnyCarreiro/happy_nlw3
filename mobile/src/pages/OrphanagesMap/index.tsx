import React, { useState } from 'react';
import { Text, View } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons'
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';

import IOrphanage from '../../entities/IOrphanage'

import mapMarker from '../../img/map-marker.png'

import styles  from './styles';

// interface IUserCoord{
//   latitude:number
//   longitude:number
//   latitudeDelta:number
//   longitudeDelta:number
// }

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<IOrphanage[]>([])
  
  const navigation = useNavigation()

  useFocusEffect(()=>{
    api.get('orphanages').then(response =>{
      setOrphanages(response.data)
    })
  })

  function handleNavigationToTheOrphanageDetails(id:string){
    navigation.navigate('OrphanageDetails', {id})
  }
  function handleNavigationToCreateOrphanage(){
    navigation.navigate('SelectMapPosition')
  }
  // const [coords, setCoords] = useState<IUserCoord>()
  // console.log(coords)
  
  // const componentDidMount = async ()=>{
  //    navigator.geolocation.getCurrentPosition(
  //     ({ coords: {latitude, longitude} })=>{
  //       setCoords({ latitude, longitude, latitudeDelta:0.0153, longitudeDelta:0.0135, })
  //     },
  //     ()=>{}
  //   ),{
  //     timeout: 2000,
  //     enableHeighAccuracy: true,
  //     maximumAge:1000,
  //   }
  // }
  // componentDidMount()
  return (
    <View style={styles.container}>
      <MapView 
        provider={PROVIDER_GOOGLE }
        style={styles.map}
        initialRegion={{
          latitude: -23.1894908,
          longitude: -45.8805243,
          latitudeDelta: 0.099,
          longitudeDelta: 0.099,
        }}
        showsUserLocation={true}
        loadingEnabled
      >
        {orphanages.map(orphanage=>{
          const { id, name, latitude, longitude, ...rest } = orphanage
          return (
            <Marker
              key={id}
              icon={mapMarker}
              calloutAnchor={{
                x: 2.7,
                y: 0.8,
              }}
              coordinate={{
                latitude,
                longitude,
              }}
            >
              <Callout tooltip={true} onPress={()=>handleNavigationToTheOrphanageDetails(id)} >
                <View style={styles.calloutContainer} >
                  <Text style={styles.calloutText} > {name} </Text>
                </View>
              </Callout>
            </Marker>
          )
        })}
      </MapView>
      <View style={styles.footer} >
        <Text style={styles.footerText} >{orphanages.length} Orfanatos encontrados</Text>
        <RectButton style={styles.createOphanageButton} onPress={handleNavigationToCreateOrphanage} >
          <Feather name="plus" size={20} color="#fff" />
        </RectButton>
      </View>
    </View>
  );
};

export default OrphanagesMap;
