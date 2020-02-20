import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function MyStoreScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>MyStoreScreen</Text>
      <Button
        title="내가게 수정"
        onPress={() => navigation.navigate('ModifyStoreScreen')}
      />
      <Button
        title="내가게메뉴 수정"
        onPress={() => navigation.navigate('ModifyMenuScreen')}
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