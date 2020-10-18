import React, { useState } from 'react';
import { ScrollView, View, Switch, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ICoordinatesParams } from '../.././../entities/IOrphanage'
import * as ImagePicker from 'expo-image-picker'

import styles from './styles'
import api from '../../../services/api';

const OrphanageData: React.FC = () => {
  const [name, setName] = useState('')
  const [about, setAbout] = useState('')
  // const [whatsApp, setWhatsApp] = useState('')
  const [instructions, setInstructions] = useState('')
  const [opening_hours, setOpeningHours] = useState('')
  const [open_on_weekends, setOpenOnWeekends] = useState(true)
  const [images, setImages] =useState<string[]>([])
  
  const navigation = useNavigation()

  const route = useRoute()
  const params = route.params as ICoordinatesParams
  
  async function handleCreatingOrphanage(){
    const { latitude, longitude } = params.coordinates
    
    const data = new FormData()
    data.append('name', name)
    data.append('latitude', String(latitude))
    data.append('longitude', String(longitude))
    data.append('about', about)
    data.append('instructions', instructions)
    data.append('opening_hours', opening_hours)
    data.append('open_on_weekends', String(open_on_weekends))
    images.forEach((image, index)=>{
      data.append('images', {
        name: `image_${index}.jpg`,
        uri:image,
        type: 'image/jpg',
      } as any)
    })
   await api.post('orphanages', data)
   navigation.navigate('OrphanagesMap')
  }

 async function handleSelectingImages(){
   const { status } = await ImagePicker.requestCameraRollPermissionsAsync()
   if( status !== 'granted' ){
     alert('Eita, precisamos de acesso para acessar as fotos ...')
     return 
   }
   const result = await ImagePicker.launchImageLibraryAsync({
     allowsEditing:true,
     quality:1,
     mediaTypes: ImagePicker.MediaTypeOptions.Images
   })
   if( result.cancelled ){
     return
   }
   const { uri:image } = result
   setImages([...images, image])
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
      <Text style={styles.title}>Dados</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={name}
        // onChangeText={text=>setName(text)}
        onChangeText={setName}

      />

      <Text style={styles.label}>Sobre</Text>
      <TextInput
        style={[styles.input, { height: 110 }]}
        value={about}
        onChangeText={setAbout}
        multiline
      />

      {/* <Text style={styles.label}>Whatsapp</Text>
      <TextInput
        style={styles.input}
        value={whatsApp}
        onChangeText={text=>setWhatsApp(text)}
      /> */}

      <Text style={styles.label}>Fotos</Text>
      <ScrollView horizontal >
        <View style={styles.uploadedImagesContainer} >
          {images.map(image=>{
            return (
              <Image
                key={image}
                source={{ uri: image}}
                style={styles.uploadedImages}
              />
            )
          })}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.imagesInput} onPress={handleSelectingImages}>
        <Feather name="plus" size={24} color="#15B6D6" />
      </TouchableOpacity>

      <Text style={styles.title}>Visitação</Text>

      <Text style={styles.label}>Instruções</Text>
      <TextInput
        style={[styles.input, { height: 110 }]}
        value={instructions}
        onChangeText={setInstructions}
        multiline
      />

      <Text style={styles.label}>Horario de visitas</Text>
      <TextInput
        style={styles.input}
        value={opening_hours}
        onChangeText={setOpeningHours}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Atende final de semana?</Text>
        <Switch 
          thumbColor="#fff" 
          trackColor={{ false: '#ccc', true: '#39CC83' }}
          value={open_on_weekends}
          onValueChange={setOpenOnWeekends}
        />
      </View>

      <RectButton style={styles.nextButton} onPress={handleCreatingOrphanage}>
        <Text style={styles.nextButtonText}>Cadastrar</Text>
      </RectButton>
    </ScrollView>
  );
}

export default OrphanageData;
