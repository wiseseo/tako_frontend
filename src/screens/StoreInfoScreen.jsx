import React from 'react';
import BackButton from '../components/Common/BackButton';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function StoreInfoScreen({navigation}) {
  navigation.setOptions({
    headerLeft: () => (
      <BackButton/>
    )
  });
  return (
    <View style={styles.container}>
      <Text>StoreInfoScreen</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" /> 
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
