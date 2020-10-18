import React from 'react';
import { View, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'

import styles from './styles'
import { useNavigation } from '@react-navigation/native';

interface IHeaderProps{
  title:string
  showCancel?:boolean
}

const Header: React.FC<IHeaderProps> = ({title, showCancel = true}) => {
  const navigation = useNavigation()

  function handleGoBackToHome(){
    navigation.navigate('OrphanagesMap')
  }

  return (
    <View style={ styles.container }>
      <BorderlessButton onPress={navigation.goBack} >
        <Feather name="arrow-left" size={24} color="#15b6d6" />
      </BorderlessButton>
      <Text style={ styles.title }>{title}</Text>
      { showCancel ? (
          <BorderlessButton onPress={handleGoBackToHome} >
            <Feather name="x" size={24} color="#ff669d" />
          </BorderlessButton>
        ) :
          <View />
      }
    </View>
  );
}

export default Header;
