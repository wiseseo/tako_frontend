import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function RegisterStoreScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>RegisterStoreScreen</Text>
      <Button
        title="가게 등록 완료"
        onPress={() => navigation.navigate('RegisterMenuScreen')}
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