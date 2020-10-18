import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { MapEvent, Marker } from 'react-native-maps';

import mapMarkerImg from '../../../img/map-marker.png';

import styles from './styles'
import SearchBar from '../../../components/SearchBar';
import { GooglePlaceDetail } from 'react-native-google-places-autocomplete';

const SelectMapPosition: React.FC = () => {
  const [coordinates, setCoordinates] = useState({latitude:0, longitude:0})
  const navigation = useNavigation();

  function handleNextStep() {
    navigation.navigate('OrphanageData',{coordinates});
  }
  function handleGettingMapCoordinates(event: MapEvent){
    setCoordinates(event.nativeEvent.coordinate)
  }
  const { latitude, longitude } = coordinates
  
  function setSearch(details:GooglePlaceDetail){
    const coordinates = details!.geometry.location
    const {lat: latitude, lng: longitude} = coordinates
    setCoordinates({
    latitude,
    longitude
  })}

  
  return (
    
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: -23.224246575468193,
          longitude: -45.900734066963196,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        style={styles.mapStyle}
        onPress={handleGettingMapCoordinates}
        // animateToCoordinate={{latLng:coordinates, duration: 1000}}
      >
        {coordinates.latitude !== 0 && (
          <Marker 
          icon={mapMarkerImg}
          coordinate={{ latitude , longitude }}
          />
          )}
      </MapView>
      {coordinates.latitude !== 0 && (
        <RectButton style={styles.nextButton} onPress={handleNextStep}>
          <Text style={styles.nextButtonText}>Próximo</Text>
        </RectButton>
        )}
      <SearchBar title={'Procurar endereço'} onPress={(data,detail)=>{
        const coordinates = detail!.geometry.location
        const { lat: latitude, lng:longitude} = coordinates
        console.log(coordinates)
        setCoordinates({latitude, longitude})
      }}/>
    </View>
  );
}

export default SelectMapPosition;
