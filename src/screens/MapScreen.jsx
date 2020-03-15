import React, {useState} from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import MapDetail from '../components/Map/MapDetail';
import SearchBar from '../components/Search/SearchBar';
import { useNavigation } from '@react-navigation/native';
import HeaderRightButton from '../components/Common/HeaderRightButton';

export default function MapScreen() {
  const navigation = useNavigation();
  navigation.setOptions({
    headerRight: () => (
      <HeaderRightButton 
      screenName="SettingScreen" 
      onPress={()=>navigation.navigate("SettingNavigator",{screen :"SettingScreen" })}
      />
    ),
  });

  const [showMapDetail, setMapDetail] = useState(false);
  return (
    <View style={styles.container}>
      <View>
        <MapView 
        style={styles.mapStyle}
        provider="google" />
      </View>
      <SearchBar/>
      <View>
        <Text onPress={()=>setMapDetail(false)}>MapScreen</Text>
      </View>
      <Button title="가게닷!" onPress={()=>setMapDetail(true)}>
        </Button>
      {showMapDetail && <MapDetail/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/2,
  },
});
