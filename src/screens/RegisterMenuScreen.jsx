import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
//import { StackActions } from '@react-navigation/native';

export default function RegisterMenuScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>RegisterMenuScreen</Text>
      <Button
        title="Menu Detail"
        onPress={() => navigation.navigate('RegisterMenuDetailScreen')}
      />
        <Button
        title="등록 완전 완료"
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