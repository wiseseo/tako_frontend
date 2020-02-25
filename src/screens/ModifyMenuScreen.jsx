import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ModifyMenuScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>ModifyMenuScreen</Text>
      <Button
        title="내메뉴 detail 수정"
        onPress={() => navigation.navigate('ModifyMenuFormScreen')}
      />
      <Button
        title="내메뉴 수정완료"
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