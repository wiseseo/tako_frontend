import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MapDetail from '../components/MapDetail';
import SearchBar from '../components/SearchBar';
export default function MapScreen({navigation}) {
  navigation.setOptions({
    headerRight: () => (
      <Button
        onPress={() => navigation.navigate('SettingNavigator', {screen:'SettingScreen'})}
        title="설정"
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
      {showMapDetail && <MapDetail navigation={navigation}/>}
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
