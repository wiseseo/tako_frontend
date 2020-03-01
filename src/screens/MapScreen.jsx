import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
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
});
