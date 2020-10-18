import React, { useEffect, useState } from 'react';
import { Image, View, ScrollView, Text, StyleSheet, Dimensions, TouchableOpacity, Linking } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native'
import IOrphanage,{ IOrphanageParams } from '../../entities/IOrphanage'

import styles from './styles'

import mapMarkerImg from '../../img/map-marker.png';
import { RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';

const OrphanageDetails: React.FC = () => {
  const [orphanage, setOrphanage] = useState<IOrphanage>()

  const route = useRoute()

  const params = route.params as IOrphanageParams
  useEffect(()=>{
    api.get(`orphanages/${params.id}`).then(response=>{
      setOrphanage(response.data)
    })
  },[params.id])

  if(!orphanage){
    return(
      <View style={styles.container} >
        <Text style={ styles.description } >Carregando ...</Text>
      </View>
    )
  }
  const {
    id, 
    name, 
    latitude, 
    longitude, 
    about, 
    instructions, 
    opening_hours,
    open_on_weekends, 
    images 
  } = orphanage

  function handleOpenOnGoogleMaps(){
    Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${orphanage?.latitude},${orphanage?.longitude}`)
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imagesContainer}>
        <ScrollView horizontal pagingEnabled>
         {images.map(image=>{
           return(
            <Image key={image.id} style={styles.image} source={{ uri: image.url }} />
           )
         })}
        </ScrollView>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{about}</Text>
      
        <View style={styles.mapContainer}>
          <MapView 
            initialRegion={{
              latitude,
              longitude,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }} 
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
            style={styles.mapStyle}
          >
            <Marker 
              icon={mapMarkerImg}
              coordinate={{ 
                latitude,
                longitude
              }}
            />
          </MapView>

          <TouchableOpacity onPress={handleOpenOnGoogleMaps} style={styles.routesContainer}>
            <Text style={styles.routesText}>Ver rotas no Google Maps</Text>
          </TouchableOpacity>
        </View>
      
        <View style={styles.separator} />

        <Text style={styles.title}>Instruções para visita</Text>
            <Text style={styles.description}>{instructions}</Text>

        <View style={styles.scheduleContainer}>
          <View style={[styles.scheduleItem, styles.scheduleItemBlue]}>
            <Feather name="clock" size={40} color="#2AB5D1" />
            <Text style={[styles.scheduleText, styles.scheduleTextBlue]}>{opening_hours}</Text>
          </View>
          {open_on_weekends ? (
            <View style={[styles.scheduleItem, styles.scheduleItemGreen]}>
              <Feather name="info" size={40} color="#39CC83" />
              <Text style={[styles.scheduleText, styles.scheduleTextGreen]}>Atendemos fim de semana</Text>
            </View>
          ) : (
            <View style={[styles.scheduleItem, styles.scheduleItemRed]}>
              <Feather name="info" size={40} color="#FF669D" />
              <Text style={[styles.scheduleText, styles.scheduleTextRed]}>Atendemos fim de semana</Text>
            </View>
          )}
        </View>

        <RectButton style={styles.contactButton} onPress={() => {}}>
          <FontAwesome name="whatsapp" size={24} color="#FFF" />
          <Text style={styles.contactButtonText}>Entrar em contato</Text>
        </RectButton>
      </View>
    </ScrollView>
    
  );
}

export default OrphanageDetails;
