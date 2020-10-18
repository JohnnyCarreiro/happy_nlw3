import React from 'react';
import { Dimensions } from 'react-native';
import { 
  GooglePlaceData, 
  GooglePlaceDetail, 
  GooglePlacesAutocomplete,
} from 'react-native-google-places-autocomplete'

export interface ILocationDetails{
  latitude: number;
  longitude: number;
}

interface IProps {
  title:string
  onPress?: (data: GooglePlaceData, detail: GooglePlaceDetail | null) => void
}
export interface FormRef{
  handleLocation():ILocationDetails
}
const Search: React.FC<IProps> = ({title, onPress,}) => {
  
  return (
      <GooglePlacesAutocomplete 
       placeholder={title}
       onPress={onPress}
       query={{
         key:'AIzaSyCCk_BXtAiwbKxR_LBIew20hs0XVdHuOqE',
         language: 'pt'
       }}
       textInputProps={{
         autoCapitalize:'none',
         autoCorrect:false,
       }}
       fetchDetails
       enablePoweredByContainer={false}
       styles={{
         container:{           
           position:'absolute',
           right:0,
           left:0,
           top: 40,
           marginHorizontal:20,
         },
         textInputContainer:{
           flexDirection: 'row',
           borderRadius: 10,
         },
         textInput:{
           fontFamily:'Nunito_600SemiBold',
           color:'#8fa7b3',
           width:Dimensions.get('screen').width,
           backgroundColor: '#FFFFFF',
           height: 44,
           paddingVertical: 5,
           paddingHorizontal: 10,
           fontSize: 16,
           elevation:6,
           shadowColor: '#000000',
           shadowOpacity:0.1,
           shadowOffset: { width:0, height:0 },
           shadowRadius:15,
           borderWidth:1,
           borderRadius: 10,
           borderColor:'#D3E2E6',
         },
         listView:{
           elevation:6,
           shadowColor: '#000000',
           shadowOpacity:0.1,
           shadowOffset: { width:0, height:0 },
           shadowRadius:15,
           borderWidth:1,
           borderRadius: 10,
           borderColor:'#D3E2E6',
         },
         description:{
          fontFamily:'Nunito_600SemiBold',
          fontSize:14,
          color: '#8fa7b3',
         },
         row:{},
       }}
      />
  );
}


export default Search;
