import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function MapScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>MapScreen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('MapDetailScreen')}
      />
      <Button
        title="설정"
        onPress={() => navigation.navigate('SettingNavigator', {screen:'SettingScreen'})}
      />
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
