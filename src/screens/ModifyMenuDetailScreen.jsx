import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ModifyMenuDetailScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>ModifyMenuDetailScreen</Text>
      <Button
        title="메뉴수정"
        onPress={() => navigation.pop(1)}
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