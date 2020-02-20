import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ModifyMenuScreen() {
  return (
    <View style={styles.container}>
      <Text>ModifyMenuScreen</Text>
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