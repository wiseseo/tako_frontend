import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function SettingScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>SettingScreen</Text>
      <Button
        title="가게등록"
        onPress={() => navigation.navigate('RegisterNavigator',{screen : 'RegisterStoreScreen'})}
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