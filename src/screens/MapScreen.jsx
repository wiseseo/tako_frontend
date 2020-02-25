import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function MapScreen({navigation}) {
  navigation.setOptions({
    headerRight: () => (
      <Button
        onPress={() => navigation.navigate('SettingNavigator', {screen:'SettingScreen'})}
        title="설정"
      />
    ),
  });
  return (
    <View style={styles.container}>
      <Text>MapScreen</Text>
      <Button
        title="모달"
        onPress={() => navigation.navigate('StoreInfoScreen')}
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
